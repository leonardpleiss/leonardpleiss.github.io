import { Mail, Building2 } from "lucide-react";
import { profile, contactLinks } from "@/content";

const HeroSection = () => {
  return (
    <section id="about" className="pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in flex flex-col md:flex-row gap-10 items-start">
          {/* Photo */}
          <div className="shrink-0">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-36 h-36 rounded-full object-cover border-2 border-border"
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
                <span className="text-3xl font-display font-semibold text-muted-foreground">
                  {profile.initials}
                </span>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="space-y-4 min-w-0">
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              {profile.bio}
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 size={15} className="text-accent shrink-0" />
              <span>{profile.university}</span>
            </div>

            {/* Contact links row */}
            <div className="flex items-center gap-4 pt-1">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
