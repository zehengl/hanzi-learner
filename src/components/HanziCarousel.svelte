<script>
  import { onMount } from "svelte";
  import Siema from "siema";

  export let options;

  let controller;
  let siema;

  onMount(() => {
    controller = new Siema({
      selector: siema,
      ...options
    });
  });

  function left() {
    controller.prev();
  }

  function right() {
    controller.next();
  }
</script>

<div>
  <div bind:this={siema}>
    <slot />
  </div>
  <button on:click={left}>
    <slot name="left-control" />
  </button>
  <button on:click={right}>
    <slot name="right-control" />
  </button>
</div>
