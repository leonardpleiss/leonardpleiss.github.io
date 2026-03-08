import { profile, contactLinks } from "@/content";

const HeroSection = () => {
  return (
    <section id="about" className="pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in flex flex-col-reverse md:flex-row gap-12 items-start justify-between">
          {/* Left: Bio + Links */}
          <div className="space-y-6 min-w-0 flex-1">
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              {profile.bio}
            </p>

            {/* Labeled contact links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <link.icon size={15} className="shrink-0" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="shrink-0">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-40 h-40 rounded-full object-cover border-2 border-border"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
                <span className="text-3xl font-display font-semibold text-muted-foreground">
                  {profile.initials}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
