export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Stanford University",
    period: "2016 — 2020",
    description:
      'Dissertation: "Towards Fair and Interpretable Machine Learning Systems." Advisor: Prof. John Doe. NSF Graduate Research Fellowship recipient.',
  },
  {
    degree: "M.S. in Computer Science",
    institution: "Stanford University",
    period: "2014 — 2016",
    description:
      "Focus on artificial intelligence and statistical learning. GPA: 4.0/4.0.",
  },
  {
    degree: "B.S. in Mathematics & Computer Science",
    institution: "University of Chicago",
    period: "2010 — 2014",
    description:
      "Summa cum laude. Phi Beta Kappa. Dean's List all semesters. Undergraduate thesis on topological data analysis.",
  },
];
