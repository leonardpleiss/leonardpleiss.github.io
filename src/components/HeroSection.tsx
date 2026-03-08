import { profile } from "@/content";
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
