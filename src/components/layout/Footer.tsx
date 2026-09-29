import { useRouterState } from "@tanstack/react-router";
import {
  ArrowUp,
  Cookie,
  FileText,
  FolderGit2,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ScrollText,
} from "lucide-react";

import { useConsent } from "@/context/ConsentContext";
import { navigation } from "@/data/navigation";
import { useLocale } from "@/hooks/useLocale";

const linkClassName = "text-muted-foreground transition-colors hover:text-foreground";

const iconLinkClassName =
  "flex items-start gap-2.5 text-muted-foreground transition-colors hover:text-foreground";

const columnTitleClassName =
  "mb-5 font-mono text-xs uppercase tracking-[0.2em] text-foreground lg:mb-6 lg:whitespace-nowrap lg:text-sm";

const listClassName = "space-y-3 text-sm lg:space-y-4 lg:whitespace-nowrap lg:text-base";

const iconListClassName = "space-y-3.5 text-sm lg:space-y-4 lg:whitespace-nowrap lg:text-base";

const professionalPlaceholders = ["Experiência", "Formação", "Certificações", "Currículo"] as const;

export function Footer() {
  const locale = useLocale();
  const { openPreferences } = useConsent();

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isHome = pathname === "/";

  const fullName = `${locale.hero.firstName} ${locale.hero.lastName}`;
  const email = locale.contact.items.email;
  const phone = locale.contact.items.phone;
  const location = locale.contact.items.location;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-10 border-t border-white/5 lg:min-h-svh">
      <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-8 lg:flex lg:min-h-svh lg:flex-col lg:px-12 xl:px-16">
        <div className="grid gap-16 py-20 sm:py-24 lg:flex-1 lg:grid-cols-[1.15fr_3.85fr] lg:items-center lg:gap-24 lg:py-24">
          {/* Identity */}
          <div className="flex flex-col items-start">
            <a href="/" className="inline-flex items-center gap-5 lg:gap-6">
              <img
                src="/favicon-192x192.png"
                alt=""
                aria-hidden="true"
                className="h-14 w-14 shrink-0 rounded-xl lg:h-16 lg:w-16"
              />

              <div className="min-w-0 leading-tight">
                <div className="text-xl font-semibold tracking-[-0.03em] lg:whitespace-nowrap lg:text-2xl">
                  {fullName}
                </div>

                <div className="mt-1.5 text-sm font-normal text-muted-foreground lg:mt-2 lg:text-base">
                  {locale.footer.role}
                </div>
              </div>
            </a>

            {/* Badges */}
            <div className="mt-8 lg:mt-10">
              <div className="flex flex-col items-start gap-3.5">
                <img
                  src="/images/badges/cloudflare-badge.png"
                  alt="Cloudflare"
                  className="h-auto w-[150px] lg:w-[160px]"
                  loading="lazy"
                />

                <img
                  src="/images/badges/registro-br-domain-badge.png"
                  alt="Registro.br"
                  className="h-auto w-[150px] lg:w-[160px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Footer navigation */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14 lg:grid-cols-[1.2fr_1fr_1.55fr_1.2fr_0.9fr] lg:gap-x-12 lg:gap-y-12 lg:pt-1 xl:gap-x-14">
            {/* Navigation */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className={columnTitleClassName}>{locale.footer.navigationTitle}</h4>

              <ul className={listClassName}>
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a href={isHome ? item.href : `/${item.href}`} className={linkClassName}>
                      {locale.navigation[item.id].label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className={columnTitleClassName}>Profissional</h4>

              <ul className={listClassName}>
                {professionalPlaceholders.map((item) => (
                  <li key={item}>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className={columnTitleClassName}>{locale.footer.contactTitle}</h4>

              <ul className={`${iconListClassName} text-muted-foreground`}>
                <li>
                  <a href={`mailto:${email.value}`} className={iconLinkClassName}>
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />

                    <span className="whitespace-nowrap">{email.value}</span>
                  </a>
                </li>

                <li>
                  <a href="tel:+5521990798744" className={iconLinkClassName}>
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                    <span>{phone.value}</span>
                  </a>
                </li>

                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                  <span>{location.value}</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className={columnTitleClassName}>{locale.footer.legalTitle}</h4>

              <ul className={iconListClassName}>
                <li>
                  <a href="/privacy" className={iconLinkClassName}>
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                    <span>{locale.footer.privacyPolicy}</span>
                  </a>
                </li>

                <li>
                  <a href="/terms" className={iconLinkClassName}>
                    <ScrollText className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                    <span>{locale.footer.termsOfUse}</span>
                  </a>
                </li>

                <li>
                  <a href="/cookies" className={iconLinkClassName}>
                    <Cookie className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                    <span>{locale.footer.cookiePolicy}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className={columnTitleClassName}>{locale.footer.socialTitle}</h4>

              <ul className={iconListClassName}>
                <li>
                  <a
                    href="https://arthurfranklin.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconLinkClassName}
                  >
                    <Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                    <span>{locale.footer.websiteLabel}</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://arthurfranklin.com.br/github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconLinkClassName}
                  >
                    <Github className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                    <span>{locale.hero.socialLabels.github}</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://arthurfranklin.com.br/gitlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconLinkClassName}
                  >
                    <FolderGit2 className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                    <span>{locale.hero.socialLabels.gitlab}</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://arthurfranklin.com.br/linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconLinkClassName}
                  >
                    <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-accent lg:h-[18px] lg:w-[18px]" />
                    <span>{locale.hero.socialLabels.linkedin}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:py-7 lg:text-sm">
          <span>
            © {new Date().getFullYear()} {locale.footer.copyright}
          </span>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5 lg:gap-6">
            <button
              type="button"
              onClick={openPreferences}
              className="transition-colors hover:text-foreground"
            >
              {locale.footer.cookiePreferences}
            </button>

            <span>{locale.footer.signature}</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-foreground"
              aria-label={locale.footer.backToTopAriaLabel}
            >
              <ArrowUp className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              {locale.footer.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
