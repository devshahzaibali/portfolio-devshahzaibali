import Skills from "@/components/Skills";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Skills />
      <ProjectsSection />
      <BlogSection />
      <Contact />
    </main>
  );
} 