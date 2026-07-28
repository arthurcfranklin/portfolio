import { ContactCard } from "@/components/cards/ContactCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { contacts } from "@/data/contacts";
import { useLocale } from "@/hooks/useLocale";

export function ContactSection() {
  const locale = useLocale();

  return (
    <section id="contato" className="section-pad min-h-[calc(100vh-4rem)] scroll-mt-16">
      <div className="container-pro w-full">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <SectionLabel center>{locale.contact.sectionLabel}</SectionLabel>

          <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            {locale.contact.headingPrefix}
            <span className="text-violet-gradient">{locale.contact.headingHighlight}</span>
            {locale.contact.headingSuffix}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            {locale.contact.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            {contacts.map((contact) => {
              const localeContact = locale.contact.items[contact.id];

              return (
                <ContactCard
                  key={contact.id}
                  label={localeContact.label}
                  value={localeContact.value}
                  action={localeContact.action}
                  icon={contact.icon}
                  href={contact.href}
                />
              );
            })}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
