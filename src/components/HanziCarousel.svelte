<script>
  import { onMount } from "svelte";
  import { Row, Col } from "svelte-chota";
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

<div bind:this={siema}>
  <slot />
</div>

<Row>
  <Col class="is-left is-fixed">
    <button on:click={left}>
      <slot name="left-control" />
    </button>
  </Col>

  <Col class="is-right">
    <button on:click={right}>
      <slot name="right-control" />
    </button>
  </Col>
</Row>
