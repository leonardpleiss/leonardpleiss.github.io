import { Mail, MapPin, Building2 } from "lucide-react";
import { profile } from "@/content";

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {profile.bio}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Building2 size={16} className="text-accent" />
              {profile.university}
            </span>
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
      </div>
    </section>
  );
};

export default HeroSection;
