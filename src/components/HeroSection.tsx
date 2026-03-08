import { profile, contactLinks } from "@/content";
import FadeIn from "./FadeIn";

const HeroSection = () => {
  return (
    <section id="about" className="pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
          {/* Left: Bio + Links */}
          <div className="space-y-5 min-w-0 flex-1">
            <FadeIn>
              <p className="text-base text-muted-foreground leading-relaxed">
                {profile.bio}
              </p>
            </FadeIn>

            {/* Contact links */}
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap items-center gap-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-sm text-muted-foreground hover:bg-accent/15 hover:text-accent hover:border-accent/30 hover:shadow-sm transition-all duration-200"
                  >
                    <link.icon size={13} />
                    <span>{link.title}</span>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Photo */}
          <FadeIn className="shrink-0 self-center md:self-start">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-border shadow-lg shadow-foreground/5"
              />
            ) : (
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-secondary border-2 border-border shadow-lg shadow-foreground/5 flex items-center justify-center">
                <span className="text-4xl font-display font-medium text-muted-foreground">
                  {profile.initials}
                </span>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
