import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ptBR } from "@/data/locales/pt-BR";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SkillsSection } from "@/sections/SkillsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: ptBR.seo.title,
      },
      {
        name: "description",
        content: ptBR.seo.description,
      },
      {
        property: "og:title",
        content: ptBR.seo.openGraphTitle,
      },
      {
        property: "og:description",
        content: ptBR.seo.openGraphDescription,
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-page text-foreground">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
