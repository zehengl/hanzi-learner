<script>
  import "chota";
  import { Container, Nav } from "svelte-chota";

  import HanziCard from "./components/HanziCard.svelte";
  import HanziCarousel from "./components/HanziCarousel.svelte";
  import HanziSetting from "./components/HanziSetting.svelte";

  let characters = [
    "一",
    "二",
    "三",
    "人",
    "个",
    "大",
    "山",
    "上",
    "下",
    "小",
    "雨",
    "天",
    "车",
    "开",
    "火",
    "门",
    "口",
    "月",
    "羊",
    "只",
    "有",
    "牛",
    "水"
  ];
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
    <a slot="left" href="/" class="brand">Hanzi Learner</a>
    <span class="is-vertical-align" slot="right">
      <HanziSetting />
    </span>
  </Nav>
  <HanziCarousel {options}>
    {#each characters as character, index}
      <HanziCard {character} {index} />
    {/each}
    <span slot="left-control">Prev</span>
    <span slot="right-control">Next</span>
  </HanziCarousel>
</Container>
