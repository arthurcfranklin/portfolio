import { ArrowRight, FolderGit2, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { useLocale } from "@/hooks/useLocale";

export function HeroSection() {
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="top" className="relative flex min-h-[calc(100vh-4rem)] items-center pb-24 pt-16">
      <div className="container-pro w-full">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-7xl"
          >
            {locale.hero.firstName}{" "}
            <span className="text-violet-gradient">{locale.hero.lastName}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-xl font-medium text-foreground/85 md:text-[1.55rem]"
          >
            {locale.hero.roles.map((role, index) => (
              <span key={role}>
                {index > 0 && <span className="mx-2 text-muted-foreground">|</span>}

                {role}
              </span>
            ))}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {locale.hero.description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="/curriculo" className="btn-primary">
              {locale.hero.resumeButton}
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="#projetos" className="btn-secondary">
              {locale.hero.projectsButton}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-4 text-muted-foreground"
          >
            <a
              href="https://arthurfranklin.com.br/github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale.hero.socialLabels.github}
              className="transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://arthurfranklin.com.br/gitlab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale.hero.socialLabels.gitlab}
              className="transition-colors hover:text-foreground"
            >
              <FolderGit2 className="h-5 w-5" />
            </a>

            <a
              href="https://arthurfranklin.com.br/linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale.hero.socialLabels.linkedin}
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:arthur@arthurfranklin.com.br"
              aria-label={locale.hero.socialLabels.email}
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
