# Teleological essentialism, diagnosticity and multiple realizability

This repository contains the experiments, data, analyses, and figures for the paper "Teleological essentialism, diagnosticity and multiple realizability" by David Rose, Shaun Nichols and Tobias Gerstenberg.

<!-- The preprint can be found [here](https://psyarxiv.com/p5zt4) -->

__Contents__:
- [Introduction](#Introduction)
- [Repository structure](#Repository-structure)

## Introduction

<!-- <img src="figures/storyboard.png" width="100%" align="center">

<br clear="left" />
<br clear="right" /> -->

Teleological essentialism suggests that purposes are treated as the essences, challenging  standard psychological essentialism which treats essences as scientifically construed common causes. We show that the effect of teleology can’t be explained by people reasoning diagnostically from changes in purposes to changes in scientifically construed causes, that people recognize that functions are multiply realizable, and that this applies even to biological kinds. A bee made to look like a spider, that has the DNA of bees but the purpose of spiders is categorized as a spider (Experiment 1). Even making explicit that DNA is a common cause of a feature (e.g., blue spots) and a purpose (e.g., making honey), changes to the purpose have a greater impact on categorization judgments than changes to a feature (Experiment 2). Moreover, interventions on a causal mechanism that produce a feature matter less than interventions on a causal mechanism that produces a function (Experiment 3), and functions matter more in categorization than causal mechanisms (Experiment 4). Together our findings support teleological essentialism, build on our understanding of how people think about functions, and suggest a reorientation of research on essentialist thinking.  



## Repository structure

```

├── code
│   ├── R
│   └── experiments
├── data
│   ├── experiment1
│   ├── experiment2
│   ├── experiment3
│   └── experiment4
├── docs
│   ├── experiment1
│   ├── experiment2
│   ├── experiment3
│   └── experiment4
└── figures
    ├── experiment1
    ├── experiment2
    ├── experiment3
    └── experiment4


```

- `code/` contains all the code for the experiments, analyzing data and generating figures.
  - `experiments` contains code for each experiment that was run. All experiments were pre-registered and run in jsPsych. 
   - `experiment1` ([pre-registration](https://osf.io/2wb3e))
	 - `experiment2` ([pre-registration](https://osf.io/q6xdj))
	 - `experiment3` ([pre-registration](https://osf.io/rb8yt))
	 - `experiment4` ([pre-registration](https://osf.io/3nshc))


  - `R` contains the analysis scripts that were used to analyze data and generate figures
     (view a rendered file [here](https://davdrose.github.io/teleological_essentialism_diagnosticity/)).
- `data/` contains anonymized data from all experiments:
  - `experiment1` contains `exp1.csv` which includes the trial data and `exp1_demographics.csv` which includes demographic data.
  - `experiment2` contains `exp2.csv` which includes the trial data and `exp2_demographics.csv` which includes demographic data.
  - `experiment3` contains `exp3.csv` which includes the trial data and `exp3_demographics.csv` which includes demographic data.
  - `experiment4` contains `exp4.csv` which includes the trial data and `exp4_demographics.csv` which includes demographic data.
- `docs/` contains all the experiment code for each experiment. You can preview the experiments below:
  - [experiment 1](https://davdrose.github.io/teleological_essentialism_diagnosticity/experiment1)
  - [experiment 2](https://davdrose.github.io/teleological_essentialism_diagnosticity/experiment2)
	- [experiment 3](https://davdrose.github.io/teleological_essentialism_diagnosticity/experiment3)
	- [experiment 4](https://davdrose.github.io/teleological_essentialism_diagnosticity/experiment4)
- `figures/` contains all the figures from the paper (generated using the script in `code/R/`). 
