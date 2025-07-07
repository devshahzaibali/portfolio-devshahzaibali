import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      <ProjectsSection />
      <BlogSection />
      <Contact />
    </>
  );
}
