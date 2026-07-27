import { ContactCard } from "@/components/cards/ContactCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { contacts } from "@/data/contacts";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-pad min-h-[calc(100vh-4rem)] flex items-center scroll-mt-16"
    >
      <div className="container-pro w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel center>Entre em Contato</SectionLabel>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            O seu próximo projeto <span className="text-violet-gradient">pode começar aqui</span>!
          </h2>

          <p className="mt-5 text-muted-foreground text-lg">
            Seja para uma oportunidade profissional, uma colaboração ou uma troca de experiências,
            estou sempre aberto a conversar.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
          <div className="space-y-3">
            {contacts.map((contact) => (
              <ContactCard key={contact.label} contact={contact} />
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
