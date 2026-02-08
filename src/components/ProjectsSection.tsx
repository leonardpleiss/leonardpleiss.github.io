import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Neural Text Summarization",
    description:
      "A transformer-based model for abstractive text summarization achieving state-of-the-art results on CNN/DailyMail benchmark. Published at ACL 2024.",
    tags: ["NLP", "Deep Learning", "Transformers"],
    github: "https://github.com",
    link: "https://arxiv.org",
    year: "2024",
  },
  {
    title: "FairML Framework",
    description:
      "Open-source toolkit for evaluating and mitigating bias in machine learning models. Used by 50+ research groups worldwide.",
    tags: ["Fairness", "Python", "Open Source"],
    github: "https://github.com",
    year: "2023",
  },
  {
    title: "Conversational AI for Education",
    description:
      "Developed an intelligent tutoring system using large language models, deployed across three university courses with 2,000+ students.",
    tags: ["LLM", "Education", "HCI"],
    link: "https://example.com",
    year: "2023",
  },
  {
    title: "Graph Neural Networks for Drug Discovery",
    description:
      "Collaborative project with the Chemistry department applying GNNs to molecular property prediction, resulting in two Nature publications.",
    tags: ["GNN", "Bioinformatics", "Collaboration"],
    github: "https://github.com",
    year: "2022",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground mb-12">
            Selected research projects and open-source contributions.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="section-fade-in group border border-border rounded-lg p-6 hover:bg-card transition-colors duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground font-body">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="External link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
