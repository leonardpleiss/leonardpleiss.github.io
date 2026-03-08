import { ExternalLink, Github, BookOpen } from "lucide-react";
import { projects } from "@/content";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-12">
            Projects
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="section-fade-in border border-border rounded-lg overflow-hidden hover:bg-card transition-colors duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {project.image && (
                <div className="w-full h-48 overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6 space-y-3">
                {/* Line 1: Title + Links */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-display font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0 pt-0.5">
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
                    {project.paper && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Read paper"
                      >
                        <BookOpen size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Line 2: Authors */}
                <p className="text-sm text-muted-foreground">
                  {project.authors}
                </p>

                {/* Line 3: Venue + Year */}
                <p className="text-sm">
                  <span className="text-foreground font-medium">
                    {project.venue || "Preprint"}
                  </span>
                  <span className="text-muted-foreground ml-2">{project.year}</span>
                </p>

                {/* Abstract */}
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {project.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 pt-1">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
