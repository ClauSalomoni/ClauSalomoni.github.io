// src/components/ContactList.tsx
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import LinkContato from "./LinkContato";
import { SOCIAL_LINKS } from "../config/constants";

interface ContactListProps {
  iconSize?: number;
}

export default function ContactList({ iconSize = 18 }: ContactListProps) {
  const { t } = useTranslation();

  const contacts = [
    {
      id: "whatsapp",
      href: SOCIAL_LINKS.whatsapp,
      icon: <MessageCircle size={iconSize} />,
      colorClass: "text-green-500",
      label: t("header.whatsapp"),
    },
    {
      id: "email",
      href: SOCIAL_LINKS.email,
      icon: <Mail size={iconSize} />,
      colorClass: "text-blue-500",
      label: t("header.email"),
    },
    {
      id: "linkedin",
      href: SOCIAL_LINKS.linkedin,
      icon: <Linkedin size={iconSize} />,
      colorClass: "text-indigo-500",
      label: t("header.linkedin"),
    },
  ];

  return (
    <>
      {contacts.map((contact) => (
        <LinkContato
          key={contact.id}
          href={contact.href}
          icon={contact.icon}
          colorClass={contact.colorClass}
        >
          {contact.label}
        </LinkContato>
      ))}
    </>
  );
}