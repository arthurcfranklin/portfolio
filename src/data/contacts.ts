import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

import type { ContactModel } from "@/types/models";

export const contacts: ContactModel[] = [
  {
    id: "email",
    icon: Mail,
    href: "mailto:arthur@arthurfranklin.com.br",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://arthurfranklin.com.br/linkedin",
  },
  {
    id: "location",
    icon: MapPin,
    href: null,
  },
  {
    id: "phone",
    icon: Phone,
    href: null,
  },
];
