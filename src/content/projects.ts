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
    title: "Synthetic Monitoring Environments for Reinforcement Learning",
    authors: "Leonard S. Pleiss, Carolin Schmidt, Maximilian Schiffer",
    description:
      "Reinforcement Learning (RL) lacks benchmarks that enable precise, white-box diagnostics of agent behavior. Current environments often entangle complexity factors and lack ground-truth optimality metrics, making it difficult to isolate why algorithms fail. We introduce Synthetic Monitoring Environments (SMEs), an infinite suite of continuous control tasks. SMEs provide fully configurable task characteristics and known optimal policies. As such, SMEs allow for the exact calculation of instantaneous regret. Their rigorous geometric state space bounds allow for systematic within-distribution (WD) and out-of-distribution (OOD) evaluation. We demonstrate the framework’s benefit through multidimensional ablations of PPO, TD3, and SAC, revealing how specific environmental properties - such as action or state space size, reward sparsity and complexity of the optimal policy - impact WD and OOD performance. We thereby show that SMEs offer a standardized, transparent testbed for transitioning RL evaluation from empirical benchmarking toward rigorous scientific analysis.",
    tags: ["Reinforcement Learning", "Generalization", "Environment", "Benchmark"],
    venue: "",
    paper: "",
    github: "",
    image: "",
    year: "2026",
  },
  
  {
    title: "Trapped in the past? Disentangling fluid and crystallized intelligence of large language models using chess",
    authors: "Leonard S. Pleiss, Maximilian Schiffer, Robert K. von Weizsäcker",
    description:
      "Large Language Models (LLMs) exhibit remarkable capabilities, yet it remains unclear to what extent these reflect sophisticated recall (crystallized intelligence) or reasoning ability (fluid intelligence). We introduce chess as a controlled testbed for disentangling these faculties. Leveraging the game's structure and scalable engine evaluations, we construct a taxonomy of positions varying in training corpus proximity--ranging from common states solvable by memorization to novel ones requiring first-principles reasoning. We systematically evaluate multiple GPT generations under varying reasoning intensities. Our analysis reveals a clear gradient: performance consistently degrades as fluid intelligence demands increase. Notably, in out-of-distribution tasks, performance collapses to random levels. While newer models improve, progress slows significantly for tasks outside the training distribution. Furthermore, while reasoning-augmented inference improves performance, its marginal benefit per token decreases with distributional proximity. These results suggest current architectures remain limited in systematic generalization, highlighting the need for mechanisms beyond scale to achieve robust fluid intelligence.",
    tags: ["Large Language Models", "Generalization", "Benchmark", "Chess"],
    venue: "",
    paper: "https://arxiv.org/abs/2601.16823",
    github: "",
    image: "",
    year: "2026",
  },
  
  {
    title: "Reliability-adjusted Prioritized Experience Replay",
    authors: "Leonard S. Pleiss, Tobias Sutter, Maximilian Schiffer",
    description:
      "Experience replay enables data-efficient learning from past experiences in online reinforcement learning agents. Traditionally, experiences were sampled uniformly from a replay buffer, regardless of differences in experience-specific learning potential. In an effort to sample more efficiently, researchers introduced Prioritized Experience Replay (PER). In this paper, we propose an extension to PER by introducing a novel measure of temporal difference error reliability. We theoretically show that the resulting transition selection algorithm, Reliability-adjusted Prioritized Experience Replay (ReaPER), enables more efficient learning than PER. We further present empirical results showing that ReaPER outperforms PER across various environment types, including the Atari-10 benchmark.",
    tags: ["Reinforcement Learning", "Experience Replay"],
    venue: "ICLR",
    paper: "https://arxiv.org/abs/2506.18482",
    github: "https://github.com/leonardpleiss/ReaPER",
    image: "",
    year: "2026",
  },
];
