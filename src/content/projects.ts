export interface Project {
  title: string;
  authors: string;
  description: string;
  tags: string[];
  venue?: string;
  paper?: string;
  github?: string;
  image?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Reliability-adjusted Prioritized Experience Replay",
    authors: "Leonard S. Pleiss, Tobias Sutter, Maximilian Schiffer",
    description:
      "Proposes a transition sampling scheme for online reinforcement learning agents, yielding both theoretical and empirical improvements in learning efficiency across established approaches.",
    tags: ["Reinforcement Learning", "Experience Replay"],
    venue: "ICLR",
    paper: "https://arxiv.org/abs/2506.18482",
    github: "https://github.com/leonardpleiss/ReaPER",
    image: "",
    year: "2026",
  },
  {
    title: "Trapped in the past? Disentangling fluid and crystallized intelligence of large language models using chess",
    authors: "Leonard S. Pleiss, Maximilian Schiffer, Robert K. von Weizsäcker",
    description:
      "Using chess as a controlled testbed, we show that GPT models perform well on memorized in-distribution positions but degrade to near-random performance on novel, reasoning-intensive tasks, indicating persistent limits in fluid intelligence despite scaling and reasoning-augmented inference.",
    tags: ["Large Language Models", "Generalization", "Chess"],
    venue: "",
    paper: "https://arxiv.org/abs/2601.16823",
    github: "",
    image: "",
    year: "2026",
  },
];
