import { useState } from "react";
import { Github, BookOpen, ChevronDown } from "lucide-react";
import { projects, profile } from "@/content";

/** Renders author string with the user's own name underlined */
const AuthorList = ({ authors }: { authors: string }) => {
  const ownerName = profile.name;
  const parts = authors.split(ownerName);
  if (parts.length === 1) {
    return <span>{authors}</span>;
  }
  return (
    <span>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="underline underline-offset-2">{ownerName}</span>
          )}
        </span>
      ))}
    </span>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > 280;

  return (
    <article
      key={project.title}
      className="section-fade-in border border-border rounded-lg overflow-hidden transition-colors duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
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
        {/* Line 1: Title */}
        <h3 className="text-lg font-display font-medium text-foreground leading-snug">
          {project.title}
        </h3>

        {/* Line 2: Authors */}
        <p className="text-sm text-muted-foreground">
          <AuthorList authors={project.authors} />
        </p>

        {/* Line 3: Venue + Year */}
        <p className="text-sm">
          <span className="text-accent font-medium">
            {project.venue || "Preprint"}
          </span>
          <span className="text-muted-foreground ml-2">{project.year}</span>
        </p>

        {/* Abstract — collapsible if long */}
        <div className="pt-1">
          <p className={`text-sm text-muted-foreground leading-relaxed ${isLong && !expanded ? "line-clamp-2" : ""}`}>
            {project.description}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent/80 font-medium mt-1.5 transition-colors"
            >
              <span>{expanded ? "Show less" : "Read more"}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>

        {/* Keywords + Links row */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
            >
              {tag}
            </span>
          ))}

          {/* Spacer pushes links right */}
          {(project.paper || project.github) && (
            <div className="flex-1" />
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            >
              <Github size={13} />
              <span>Code</span>
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            >
              <BookOpen size={13} />
              <span>Paper</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-3xl font-display font-medium text-foreground mb-12">
            Projects
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
