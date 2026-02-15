export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "Senior Consultant for Data & AI",
    organization: "Roland Berger",
    period: "2022 — present",
    description:
      "Worked on numerous large-scale data and machine learning projects across multiple industries on three contintents.",
  },
  
  {
    role: "Junior Data Scientist",
    organization: "Mazars",
    period: "2020 - 2022",
    description:
      "Conceptualized and led the Data Utilization project, which layed the groundwork for building scalable data-driven audit solutions.",
  },
  
  {
    role: "Research Assistant",
    organization: "Free University Berlin / Charité Berlin",
    period: "2015 — 2020",
    description:
      "Various constributions across multiple research projects.",
  },
];
