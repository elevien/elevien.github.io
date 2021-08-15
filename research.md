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

  
## What causes non-genetic variability in single-cell growth rates?

One of the most fundamental questions in evolutionary biology is: what determines an organism’s influence fitness? Mi- crobes such as E. coli are optimized to proliferate quickly in favorable growth conditions, making the rate of exponential growth a key determinant of their evolutionary fitness. The most basic model of a microbial population is the Bellman-Harris branching process [2], which treats the lifetime of each individual cell as an independent random variable. However, in order to capture the interesting aspects of microbial growth, it is necessary to introduce correlations between the lifetimes of mother and daughter cells. Within the context of branching processes with correlated inter-division times, a key result is that a population’s long-term exponential growth rate,
\begin{equation}
\Lambda = \lim_{t \to \infty}\ln N/t
\end{equation} and the distribution of inter-division times measured throughout the entire history of an exponentially growing populations, denoted ψ(τ), are related according to the formula
\begin

## How does epigenetic variation evolve in microbes?

Most work on cell-size regulation has been done on bacteria or yeast; however, their small size makes it difficult to obtain accurate mass measurements over the course of the cell-cycle. For this reason, I have been using single-cell data from Mammalian cells to investigate cell-size homeostasis mechanisms.
This data consists of multiple lineages, each containing a sequence of 5 − 25 cells in succession, as shown in Figure 2 (B). Using Bayesian model validation techniques, such as posterior predictive p-values, I have found that existing phenological models of cell-size control fail to explain the observed heritability of generation times and single-cell growth rates across generations. Guided by this data analysis, I plan to develop and validate new models of cell-size regulation which explicitly account for the coupling between growth rates and cell mass. The hope is that these will shed light on the underlying biochemical mechanisms controlling cell size. In the long-term, I would like to explain why certain phenomenological aspects of cell-size regulation appear across all domains of life, for example, many cells add an approximately constant amount of mass between cell birth and division despite having markedly different physiologies and evolutionary histories

## How do new functions evolve in gene regulatory networks and why do certain networks appear to evolve separately in distinct organisms?

In Eukaryotic organisms, most beneficial mutations do not occur on coding DNA (sites on the DNA which specify how to build proteins), but instead occur at regulatory sites where regulatory molecules, known as transcription factors, bind and unbind in order to modulate the production of proteins at nearby coding sites. Some regulatory regions may contain binding sites for multiple regulatory proteins which can interact with each other. Thus, Eukaryotic evolutionary dynamics are constrained by the topology of these interaction networks. Phylogenetic analysis of yeast and fungal genomes has found that many regulatory networks undergo convergent evolution, in which distinct organisms have separately gained regulatory binding sites for the same protein. Why do evolutionary trajectories appear to repeat themselves in some cases? How does the topology of a gene regularly network dictate the time-scales over which regulatory interactions evolve and shape the genetic variation across species?
