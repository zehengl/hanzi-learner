<script>
  import { onMount } from "svelte";
  import { Button, Card } from "svelte-chota";
  import HanziWriter from "hanzi-writer";

  export let character;
  export let index;

  let writer;
  let inQuiz = false;
  let inAnimation = false;

  onMount(() => {
    writer = HanziWriter.create(`character-${index}-div`, character, {
      width: 240,
      height: 240,
      padding: 5,
      showOutline: true,
      showHintAfterMisses: 3,
      highlightOnComplete: true,
    });
  });

  const startAnimation = () => {
    inAnimation = true;
    writer.animateCharacter({ onComplete: clearAnimationFlag });
  };

  const clearAnimationFlag = () => {
    inAnimation = false;
  };

  const startQuiz = () => {
    inQuiz = true;
    writer.quiz({ onComplete: stopQuiz });
  };

  const stopQuiz = () => {
    inQuiz = false;
    writer.cancelQuiz();
    writer.showCharacter();
  };
</script>

<div class="HanziCard">
  <Card>
    <div class="text-center" id="character-{index}-div" />
    <div slot="footer" class="is-center">
      {#if inQuiz}
        <Button on:click={stopQuiz} error>Abort</Button>
      {:else}
        <Button on:click={startAnimation} secondary loading={inAnimation}>
          Animate
        </Button>
      {/if}
      <Button on:click={startQuiz} primary loading={inQuiz} disabled={inAnimation}>
        Quiz
      </Button>
    </div>
  </Card>
</div>

<style>
  .HanziCard {
    max-width: 100%;
    padding: 1rem;
  }
</style>
