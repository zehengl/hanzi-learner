<script>
  import "chota";
  import {Container, Nav} from 'svelte-chota';

  import HanziCard from "./components/HanziCard.svelte"

  let characters = ["一", "二", "三", "四", "五", "六"]
</script>


<Container>
  <Nav>
    <a slot="center" href="/" class="brand">Hanzi Learner</a>
  </Nav>

  {#each characters as character, index}
    <HanziCard character={character} index={index}/>
  {/each}
</Container>


<style>
  :global(:root) {
    --grid-maxWidth: 108rem;
  }
</style>
