import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SkillsSection } from "@/sections/SkillsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arthur Franklin" },
      {
        name: "description",
        content:
          "Auxiliar de TI focado em infraestrutura, suporte técnico e monitoramento. Soluções confiáveis para ambientes corporativos.",
      },
      {
        property: "og:title",
        content: "Arthur Franklin — Auxiliar de TI",
      },
      {
        property: "og:description",
        content: "Infraestrutura, Suporte Técnico e Operações de TI.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-page min-h-screen text-foreground">
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
