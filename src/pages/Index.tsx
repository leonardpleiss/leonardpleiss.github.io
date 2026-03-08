import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactStrip from "@/components/ContactStrip";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ContactStrip />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
