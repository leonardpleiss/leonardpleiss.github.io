import { Mail, Github, Linkedin, BookOpen, type LucideIcon } from "lucide-react";

export interface ContactLink {
  icon: LucideIcon;
  label: string;
  href: string;
  title: string;
}

export const contactLinks: ContactLink[] = [
  { icon: Mail, label: "Email", title: "Email", href: "mailto:leonard.pleiss@tum.de" },
  { icon: Github, label: "GitHub", title: "GitHub", href: "https://github.com/leonardpleiss" },
  { icon: Linkedin, label: "LinkedIn", title: "LinkedIn", href: "https://de.linkedin.com/in/leonard-s-pleiss-9b32171a3" },
  { icon: BookOpen, label: "Scholar", title: "Scholar", href: "https://scholar.google.com/citations?user=FHdoH8wAAAAJ&hl=de" },
];
