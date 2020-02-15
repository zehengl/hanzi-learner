<script>
  import "chota";
  import { Container, Nav } from "svelte-chota";

  import HanziCard from "./components/HanziCard.svelte";
  import HanziCarousel from "./components/HanziCarousel.svelte";
  import HanziSetting from "./components/HanziSetting.svelte";

  let characters = [
    { zh: "一", en: "one" },
    { zh: "二", en: "two" },
    { zh: "三", en: "three" },
    { zh: "人", en: "person" },
    { zh: "个", en: "*one unit" },
    { zh: "大", en: "big" },
    { zh: "山", en: "mountain" },
    { zh: "上", en: "up" },
    { zh: "下", en: "down" },
    { zh: "小", en: "small" },
    { zh: "雨", en: "rain" },
    { zh: "天", en: "sky" },
    { zh: "车", en: "car" },
    { zh: "开", en: "open" },
    { zh: "火", en: "fire" },
    { zh: "门", en: "door" },
    { zh: "口", en: "mouth" },
    { zh: "月", en: "moon" },
    { zh: "羊", en: "sheep" },
    { zh: "只", en: "*one unit" },
    { zh: "有", en: "have" },
    { zh: "牛", en: "cow" },
    { zh: "水", en: "water" }
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
      <HanziCard
        character_zh={character.zh}
        character_en={character.en}
        {index} />
    {/each}
    <span slot="left-control">Prev</span>
    <span slot="right-control">Next</span>
  </HanziCarousel>
</Container>
