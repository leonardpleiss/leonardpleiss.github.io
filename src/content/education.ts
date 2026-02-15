export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Ph.D. in Machine Learning",
    institution: "Technical University Munich",
    period: "2024 — present",
    description:
      'Focused on reinforcement learning methods and generalization within large language models. Advisor: Prof. Schiffer.',
  },
  {
    degree: "M.Sc. in Human Factors Engineering",
    institution: "Technical University Berlin",
    period: "2014 — 2016",
    description:
      "Focus on statistical learning. Thesis: Localizing emotional processes within the human cerebral cortex using fMRI data. Supervised by Prof. Obermayer and Prof. Deniz. GPA: 4.0/4.0.",
  },
  {
    degree: "B.Sc. in Psychology",
    institution: "University of Potsdam",
    period: "2016 — 2019",
    description:
      "Focus on cognitive science. Thesis: Investigating the relationship between media multitasking and cognitive-executive performance. Supervised by Dr. Soemer and Prof. Kliegl.",
  },
];
