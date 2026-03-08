import { profile, contactLinks } from "@/content";
import FadeIn from "./FadeIn";

const HeroSection = () => {
  return (
    <section id="about" className="pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
          {/* Left: Bio + Links */}
          <div className="space-y-5 min-w-0 flex-1">
            <FadeIn>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base text-muted-foreground leading-relaxed">
                {profile.bio}
              </p>
            </FadeIn>

            {/* Contact links */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap items-center gap-2 mt-8">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
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
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-border"
              />
            ) : (
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
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
