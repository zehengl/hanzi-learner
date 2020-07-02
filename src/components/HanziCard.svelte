<script>
  import { onMount } from "svelte";
  import { Button, Card } from "svelte-chota";
  import HanziWriter from "hanzi-writer";

  export let character_zh;
  export let character_en;
  export let index;

  let writer;
  let inQuiz = false;
  let inAnimation = false;

  onMount(() => {
    writer = HanziWriter.create(`character-${index}-div`, character_zh, {
      width: 240,
      height: 240,
      padding: 5,
      showOutline: true,
      showHintAfterMisses: 3,
      highlightOnComplete: true
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

<style>
  .HanziCard {
    max-width: 100%;
    padding: 1rem;
  }
</style>

<div class="HanziCard">
  <Card>
    <h2 slot="header">{character_en}</h2>
    <div class="text-center" id="character-{index}-div" />
    <div slot="footer" class="is-center">
      {#if inQuiz}
        <Button on:click={stopQuiz} secondary>Abort</Button>
      {:else}
        <Button on:click={startAnimation} secondary loading={inAnimation}>
          Animate
        </Button>
      {/if}
      <Button
        on:click={startQuiz}
        primary
        loading={inQuiz}
        disabled={inAnimation}>
        Quiz
      </Button>
    </div>
  </Card>
</div>
