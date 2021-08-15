---
layout: default
---
# Research


<div class="chart"></div>
  <script type="module">
  import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
  import define from "https://api.observablehq.com/@elevien/spatial-growth.js?v=3";
  (new Runtime).module(define, name => {
    if (name === "chart") return Inspector.into(".chart")();
  });
  </script>

Updates coming soon.
