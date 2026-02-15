export interface Project {
  title: string;
  description: string;
  tags: string[];
  venue?: string;
  github?: string;
  link?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Neural Text Summarization",
    description:
      "A transformer-based model for abstractive text summarization achieving state-of-the-art results on CNN/DailyMail benchmark. Published at ACL 2024.",
    tags: ["NLP", "Deep Learning", "Transformers"],
    venue: "",
    github: "https://github.com",
    link: "https://arxiv.org",
    year: "2024",
  },
  {
    title: "FairML Framework",
    description:
      "Open-source toolkit for evaluating and mitigating bias in machine learning models. Used by 50+ research groups worldwide.",
    tags: ["Fairness", "Python", "Open Source"],
    venue: "NeurIPS 2023",
    github: "https://github.com",
    year: "2023",
  },
  {
    title: "Conversational AI for Education",
    description:
      "Developed an intelligent tutoring system using large language models, deployed across three university courses with 2,000+ students.",
    tags: ["LLM", "Education", "HCI"],
    venue: "ICML 2023",
    link: "https://example.com",
    year: "2023",
  },
  {
    title: "Graph Neural Networks for Drug Discovery",
    description:
      "Collaborative project with the Chemistry department applying GNNs to molecular property prediction, resulting in two Nature publications.",
    tags: ["GNN", "Bioinformatics", "Collaboration"],
    venue: "Nature 2022",
    github: "https://github.com",
    year: "2022",
  },
];
