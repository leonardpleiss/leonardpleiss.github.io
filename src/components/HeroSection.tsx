import { profile } from "@/content";
import FadeIn from "./FadeIn";

const HeroSection = () => {
  return (
    <section id="about" className="pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-stretch">
          {/* Left: Bio */}
          <div className="min-w-0 flex-1 flex items-center">
            <FadeIn>
              <p className="text-base text-muted-foreground leading-relaxed">
                {profile.bio}
              </p>
            </FadeIn>
          </div>

          {/* Right: Photo — scales to match text height */}
          <FadeIn className="shrink-0 self-center md:self-stretch flex items-center">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-36 md:w-auto md:h-full aspect-square rounded-full object-cover border-2 border-border shadow-lg shadow-foreground/5"
              />
            ) : (
              <div className="w-36 md:w-auto md:h-full aspect-square rounded-full bg-secondary border-2 border-border shadow-lg shadow-foreground/5 flex items-center justify-center">
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
