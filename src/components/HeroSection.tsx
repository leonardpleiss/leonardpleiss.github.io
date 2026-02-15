import { Mail, MapPin } from "lucide-react";
import { profile } from "@/content";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-[80vh] flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="section-fade-in">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              {profile.role}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground mb-6">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              {profile.bio}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                {profile.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href={`mailto:${profile.email}`} className="link-underline hover:text-foreground transition-colors">
                  {profile.email}
                </a>
              </span>
            </div>
          </div>

          <div className="section-fade-in hidden md:block" style={{ animationDelay: "0.2s" }}>
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-card border-2 border-border overflow-hidden flex items-center justify-center">
              <span className="font-display text-5xl text-muted-foreground">{profile.initials}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
