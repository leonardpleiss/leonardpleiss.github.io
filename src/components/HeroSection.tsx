import { profile, contactLinks } from "@/content";
import FadeIn from "./FadeIn";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HeroSection = () => {
  return (
    <section id="about" className="pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
          {/* Left: Bio */}
          <div className="space-y-5 min-w-0 flex-1">
            <FadeIn>
              <p className="text-base text-muted-foreground leading-relaxed">
                {profile.bio}
              </p>
            </FadeIn>
          </div>

          {/* Right: Photo with hover popover */}
          <FadeIn className="shrink-0 self-center md:self-start">
            <HoverCard openDelay={150} closeDelay={200}>
              <HoverCardTrigger asChild>
                <button className="cursor-pointer group relative">
                  {profile.image ? (
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-border shadow-lg shadow-foreground/5 group-hover:border-accent/50 group-hover:shadow-accent/10 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-secondary border-2 border-border shadow-lg shadow-foreground/5 group-hover:border-accent/50 transition-all duration-300 flex items-center justify-center">
                      <span className="text-4xl font-display font-medium text-muted-foreground">
                        {profile.initials}
                      </span>
                    </div>
                  )}
                </button>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                align="center"
                className="w-56 p-4"
              >
                <div className="flex flex-col items-center gap-2.5">
                  <p className="text-sm font-semibold text-foreground">{profile.name}</p>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    {profile.university}
                  </p>
                  <div className="w-8 h-px bg-border" />
                  <div className="flex items-center gap-1">
                    {contactLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                        aria-label={link.label}
                      >
                        <link.icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
