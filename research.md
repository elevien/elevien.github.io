---
layout: default
# logo: /assets/img/contour.png
---

# Research
<p>
  I am broadly interested in a wide range of questions, both mathematical and biological.
</p>


<p>
  For a complete list of publications, see my 
  <a href="https://scholar.google.com/citations?user=hshuLN4AAAAJ&hl=en">Google Scholar</a>.
</p>


<div class="image-container">
 <h2> Mathematical interests </h2>
  <img src="assets/img/coales.png" alt="Image 1" onclick="toggleContent('content1')">
  <div id="content1" class="content">
  
    
<p><strong>Growing systems and extremal statistics</strong></p>
My reserach in this area includes:
<ul>
  <li>
    <strong>branching processes </strong>. These are models of population growth where individuals do not interact and have applications in population biology, but also in machine learning and statistical physics. 
  </li>
  <li>
    <strong>Extremal statistics and large deviation theory</strong>. Extremal statistics concerns the study of maxima, minima and order statistics or random variables, while large deviations are exponentially rate events. 
  </li>
   <li>
    <strong>Mathematics of machine learning</strong>. I'm studying multiple instance learning problems... 
  </li>
</ul>
    <hr>
  </div>
</div>

<div class="image-container">
<h2> Biological interests </h2>
  <img src="assets/img/L1210.png" alt="Image 2" onclick="toggleContent('content2')">
  <div id="content2" class="content">
   <p>In biology, I am interested in single-cell physiology, including:</p>
<ul>
  <li>
    <strong>Size homeostasis</strong> — how do cells regulate their size? 
    Do large cells slow down their growth rate, or do they accelerate their generation time? 
  </li>
  <li>
    <strong>Gene expression under antibiotic stress</strong>, especially how patterns of gene expression change under stress. 
  </li>
  <li>
    <strong>Inference of extreme events in cell populations</strong>. When can we predict population dynamics from single-cell data? 
  </li>
</ul>
  </div>
</div>

<!-- <div class="image-container">
<h2> Gene expression and stress </h2>
  <img src="assets/img/nullclines.png" alt="Image 3" onclick="toggleContent('content3')">
  <div id="content3" class="content">
    <p>How do globel resource allocations strategies interact with gene networks and shape stress response in single-cells?  </p>
  </div>
</div> -->



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
