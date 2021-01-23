import App from "./App.svelte";
import { version } from "../package.json";

const app = new App({
  target: document.body,
  props:{
    version: version
  }
});

export default app;
