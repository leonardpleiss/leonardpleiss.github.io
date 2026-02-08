import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const education: Education[] = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Stanford University",
    period: "2016 — 2020",
    description:
      "Dissertation: \"Towards Fair and Interpretable Machine Learning Systems.\" Advisor: Prof. John Doe. NSF Graduate Research Fellowship recipient.",
  },
  {
    degree: "M.S. in Computer Science",
    institution: "Stanford University",
    period: "2014 — 2016",
    description:
      "Focus on artificial intelligence and statistical learning. GPA: 4.0/4.0.",
  },
  {
    degree: "B.S. in Mathematics & Computer Science",
    institution: "University of Chicago",
    period: "2010 — 2014",
    description:
      "Summa cum laude. Phi Beta Kappa. Dean's List all semesters. Undergraduate thesis on topological data analysis.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-2">
            Education
          </h2>
          <p className="text-muted-foreground mb-12">
            Academic background and qualifications.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="section-fade-in flex gap-5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <GraduationCap size={18} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-accent font-medium mb-1">
                  {edu.institution}
                  <span className="text-muted-foreground font-normal ml-2">
                    {edu.period}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
