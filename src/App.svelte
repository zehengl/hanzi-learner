<script>
  import "chota";
  import { Container, Nav } from "svelte-chota";

  import HanziCard from "./components/HanziCard.svelte";
  import HanziCarousel from "./components/HanziCarousel.svelte";
  import HanziSetting from "./components/HanziSetting.svelte";
  import { getAllCharacters } from "./hanzi";

  let options = {
    perPage: 1,
    loop: true,
    draggable: false,
    easing: "linear",
  };
  export let version;
</script>

<style>
  :global(:root) {
    --grid-maxWidth: 108rem;
  }

  footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
  }

  #app {
    margin-top: 3rem;

  }
</style>

<div id="app">
  <Container>
    <Nav>
      <a slot="left" href="/" class="brand">Hanzi Learner</a>
      <span class="is-vertical-align" slot="right">
        <HanziSetting />
      </span>
    </Nav>
    <HanziCarousel {options}>
      {#each getAllCharacters() as character, index}
        <HanziCard character_zh={character.zh} character_en={character.en} {index} />
      {/each}
      <span slot="left-control">Prev</span>
      <span slot="right-control">Next</span>
    </HanziCarousel>
  </Container>
</div>
<footer class="text-center bg-light">Version: <strong>{version}</strong></footer>
