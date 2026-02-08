import { Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="section-fade-in">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Researcher & Academic
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground mb-6">
              Dr. Jane Smith
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              Assistant Professor of Computer Science at MIT, specializing in machine learning, 
              natural language processing, and human-computer interaction. Passionate about 
              building intelligent systems that bridge the gap between research and real-world impact.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                Cambridge, MA
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:jane.smith@mit.edu" className="link-underline hover:text-foreground transition-colors">
                  jane.smith@mit.edu
                </a>
              </span>
            </div>
          </div>

          <div className="section-fade-in hidden md:block" style={{ animationDelay: "0.2s" }}>
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-card border-2 border-border overflow-hidden flex items-center justify-center">
              <span className="font-display text-5xl text-muted-foreground">JS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
