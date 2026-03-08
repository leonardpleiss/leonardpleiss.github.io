import { profile, contactLinks } from "@/content";

const HeroSection = () => {
  return (
    <section id="about" className="pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-fade-in flex flex-col-reverse md:flex-row gap-10 items-start">
          {/* Left: Bio + Links — takes all available space */}
          <div className="space-y-5 min-w-0 flex-1">
            <p className="text-base text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>

            {/* Contact links — icon-only with elegant hover effects */}
            <div className="flex items-center gap-3 mt-8">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/40 text-muted-foreground hover:bg-accent/15 hover:text-accent transition-all duration-300"
                >
                  <link.icon size={18} className="shrink-0" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium bg-foreground text-background rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Photo — larger and properly sized */}
          <div className="shrink-0">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover border-2 border-border"
              />
            ) : (
              <div className="w-44 h-44 md:w-48 md:h-48 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
                <span className="text-4xl font-display font-semibold text-muted-foreground">
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
