export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "Assistant Professor",
    organization: "MIT — Department of Computer Science",
    period: "2021 — Present",
    description:
      "Leading the Intelligent Systems Lab. Teaching graduate courses in ML and NLP. Secured $1.2M in research funding. Supervising 5 Ph.D. students.",
  },
  {
    role: "Postdoctoral Researcher",
    organization: "Google DeepMind",
    period: "2020 — 2021",
    description:
      "Worked on large-scale language models and responsible AI. Co-authored 4 papers at top-tier venues including NeurIPS and ICML.",
  },
  {
    role: "Research Intern",
    organization: "Microsoft Research",
    period: "Summer 2018",
    description:
      "Developed novel methods for few-shot learning in NLP tasks. Work integrated into Azure Cognitive Services.",
  },
  {
    role: "Teaching Assistant",
    organization: "Stanford University",
    period: "2015 — 2019",
    description:
      "TA for CS229 (Machine Learning) and CS224N (NLP with Deep Learning). Received Outstanding TA Award in 2017.",
  },
];
