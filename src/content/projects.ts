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
    title: "Reliability-adjusted Prioritized Experience Replay",
    description:
      "Proposes a transition sampling scheme for online reinforcement learning agents, yielding both theoretical and empirical improvements in learning efficiency across established approaches. Collaboration with Prof. Tobias Sutter and Prof. Maximilian Schiffer.",
    tags: ["Reinforcement Learning", "Experience Replay"],
    venue: "ICLR",
    github: "",
    link: "https://arxiv.org/abs/2506.18482",
    year: "2026",
  },
  {
    title: "Trapped in the past? Disentangling fluid and crystallized intelligence of large language models using chess",
    description:
      "Using chess as a controlled testbed, we show that GPT models perform well on memorized in-distribution positions but degrade to near-random performance on novel, reasoning-intensive tasks, indicating persistent limits in fluid intelligence despite scaling and reasoning-augmented inference. Collaboration with Prof. Maximilian Schiffer and Prof. Robert K. von Weizsäcker.",
    tags: ["Large Language Models", "Generalization", "Chess"],
    venue: "",
    github: "",
    year: "2026",
  },
];
