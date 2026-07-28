import { ArrowUp, FolderGit2, Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { navigation } from "@/data/navigation";
import { useLocale } from "@/hooks/useLocale";

export function Footer() {
  const locale = useLocale();

  const fullName = `${locale.hero.firstName} ${locale.hero.lastName}`;
  const email = locale.contact.items.email;
  const phone = locale.contact.items.phone;
  const location = locale.contact.items.location;

  return (
    <footer className="mt-10 border-t border-white/5">
      <div className="container-pro py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/favicon-180x180.png"
                alt=""
                aria-hidden="true"
                className="h-9 w-9 rounded-lg"
              />
              <div className="leading-tight">
                <div className="text-base font-semibold">{fullName}</div>

                <div className="mt-0.5 text-[11px] font-normal text-muted-foreground">
                  {locale.footer.role}
                </div>
              </div>
            </a>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {locale.footer.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground">
              {locale.footer.navigationTitle}
            </h4>

            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {locale.navigation[item.id].label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground">
              {locale.footer.contactTitle}
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:arthur@arthurfranklin.com.br"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {email.value}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                {phone.value}
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                {location.value}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground">
              {locale.footer.socialTitle}
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://arthurfranklin.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Globe className="h-4 w-4 text-accent" />
                  {locale.footer.websiteLabel}
                </a>
              </li>

              <li>
                <a
                  href="https://arthurfranklin.com.br/github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4 text-accent" />
                  {locale.hero.socialLabels.github}
                </a>
              </li>

              <li>
                <a
                  href="https://arthurfranklin.com.br/gitlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FolderGit2 className="h-4 w-4 text-accent" />
                  {locale.hero.socialLabels.gitlab}
                </a>
              </li>

              <li>
                <a
                  href="https://arthurfranklin.com.br/linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4 text-accent" />
                  {locale.hero.socialLabels.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {locale.footer.copyright}
          </span>

          <div className="flex items-center gap-5">
            <span>{locale.footer.signature}</span>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-foreground"
              aria-label={locale.footer.backToTopAriaLabel}
            >
              <ArrowUp className="h-3.5 w-3.5" />
              {locale.footer.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
