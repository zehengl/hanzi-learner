<script>
  import {onMount} from "svelte"
  import {Card, Button} from 'svelte-chota';
  import HanziWriter from "hanzi-writer"

  export let character;
  export let index;

  let writer;

  onMount(()=>{
    writer = HanziWriter.create(`character-${index}-div`, character, {
      width: 500,
      height: 500,
      padding: 5,
      showOutline: true,
      showHintAfterMisses: 3,
      highlightOnComplete: true,
    });
  })

  function animateCharacter() {
    writer.animateCharacter();
  }

  function quiz() {
    writer.quiz()
  }
</script>


<div class="HanziCard">
  <Card>
    <h2 slot="header">{character}</h2>
    <div class="text-center" id="character-{index}-div"></div>
    <div slot="footer" class="is-right">
      <Button on:click={animateCharacter} secondary>Animate</Button>
      <Button on:click={quiz} primary>Quiz</Button>
    </div>
  </Card>
</div>


<style>
  .HanziCard {max-width: 100%}
</style>
