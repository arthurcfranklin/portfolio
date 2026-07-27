import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

import type { ContactItem } from "@/types/content";

export const contacts: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "arthur@arthurfranklin.com.br",
    href: "mailto:arthur@arthurfranklin.com.br",
    action: "Enviar email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "arthurfranklin.com.br/linkedin",
    href: "https://arthurfranklin.com.br/linkedin",
    action: "Ver perfil",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rio de Janeiro - RJ, Brasil",
    href: "#",
    action: "",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "Disponível em breve",
    href: "#",
    action: "",
  },
];
