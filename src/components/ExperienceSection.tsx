import { Briefcase } from "lucide-react";

interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Assistant Professor",
    organization: "MIT — Department of Computer Science",
    period: "2021 — Present",
    description:
      "Leading the Intelligent Systems Lab. Teaching graduate courses in ML and NLP. Secured $1.2M in research funding. Supervising 5 Ph.D. students.",
  },
  {
    role: "Postdoctoral Researcher",
    organization: "Google DeepMind",
    period: "2020 — 2021",
    description:
      "Worked on large-scale language models and responsible AI. Co-authored 4 papers at top-tier venues including NeurIPS and ICML.",
  },
  {
    role: "Research Intern",
    organization: "Microsoft Research",
    period: "Summer 2018",
    description:
      "Developed novel methods for few-shot learning in NLP tasks. Work integrated into Azure Cognitive Services.",
  },
  {
    role: "Teaching Assistant",
    organization: "Stanford University",
    period: "2015 — 2019",
    description:
      "TA for CS229 (Machine Learning) and CS224N (NLP with Deep Learning). Received Outstanding TA Award in 2017.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-2">
            Experience
          </h2>
          <p className="text-muted-foreground mb-12">
            Professional and academic positions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
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
                  <h3 className="text-lg font-display font-semibold text-foreground">
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
