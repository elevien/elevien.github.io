---
layout: default
# logo: /assets/img/contour.png
---

# Research

<p>For a complete list of publications see <a href="https://scholar.google.com/citations?user=hshuLN4AAAAJ&hl=en">Google Scholar</a>. Here is a list of some ongoing projects, details will be added soon. </p>


<div class="image-container">
 <h2> Evolution and disordered systems </h2>
  <img src="assets/img/coales.png" alt="Image 1" onclick="toggleContent('content1')">
  <div id="content1" class="content">
  
    <p>How do rare events shape genealogies? </p>
    <hr>
  </div>
</div>

<div class="image-container">
<h2> Single-cell biomass dynamics in leukemia cells </h2>
  <img src="assets/img/L1210.png" alt="Image 2" onclick="toggleContent('content2')">
  <div id="content2" class="content">
    <p>What is the role of growth rate regulation in suppressing noise in cell-size, and how are the cell-cycle and metabolism co-regulated?  </p>
  </div>
</div>

<div class="image-container">
<h2> Cell-fate determination under stress </h2>
  <img src="assets/img/nullclines.png" alt="Image 3" onclick="toggleContent('content3')">
  <div id="content3" class="content">
    <p>How do globel resource allocations strategies interact with gene networks and shape stress response in single-cells?  </p>
  </div>
</div>



<script>
  function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";  // Show content
    } else {
      content.style.display = "none";   // Hide content
    }
  }
</script>
