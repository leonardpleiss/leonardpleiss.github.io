import { Briefcase } from "lucide-react";
import { experiences } from "@/content";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-2xl font-display font-medium text-foreground mb-10">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.organization}
                className="section-fade-in flex gap-5"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="shrink-0 mt-1 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Briefcase size={18} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display font-medium text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-1">
                    {exp.organization}
                    <span className="text-muted-foreground font-normal ml-2">
                      {exp.period}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
