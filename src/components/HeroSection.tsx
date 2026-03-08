import { profile } from "@/content";
import FadeIn from "./FadeIn";

const HeroSection = () => {
  return (
    <section id="about" className="pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-stretch">
          {/* Left: Bio — 4/5 width */}
          <div className="min-w-0 basis-4/5 flex items-center">
            <FadeIn>
              <p className="text-base text-muted-foreground leading-relaxed">
                {profile.bio}
              </p>
            </FadeIn>
          </div>

          {/* Right: Photo — 1/5 width, right-aligned */}
          <FadeIn className="shrink-0 self-center md:self-stretch md:basis-1/5 flex items-center justify-end">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-36 md:w-full md:h-full max-w-40 max-h-40 aspect-square rounded-full object-cover border-2 border-border shadow-lg shadow-foreground/5"
              />
            ) : (
              <div className="w-36 md:w-full md:h-full max-w-40 max-h-40 aspect-square rounded-full bg-secondary border-2 border-border shadow-lg shadow-foreground/5 flex items-center justify-center">
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
