<script>
  import "chota";
  import { Container, Nav } from "svelte-chota";

  import HanziCard from "./components/HanziCard.svelte";
  import HanziCarousel from "./components/HanziCarousel.svelte";

  let characters = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  let options = {
    perPage: 1,
    loop: true,
    draggable: false,
    easing: "linear"
  };
</script>

<style>
  :global(:root) {
    --grid-maxWidth: 108rem;
  }
</style>

<Container>
  <Nav>
    <a slot="center" href="/" class="brand">Hanzi Learner</a>
  </Nav>
  <HanziCarousel {options}>
    {#each characters as character, index}
      <HanziCard {character} {index} />
    {/each}
    <span slot="left-control">Prev</span>
    <span slot="right-control">Next</span>
  </HanziCarousel>
</Container>
