import { Mail, Github, Linkedin, FileText, type LucideIcon } from "lucide-react";

export interface ContactLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { icon: Mail, label: "Email", href: "mailto:leonard.pleiss@tum.de" },
  { icon: Github, label: "GitHub", href: "https://github.com/leonardpleiss" },
  { icon: Linkedin, label: "LinkedIn", href: "https://de.linkedin.com/in/leonard-s-pleiss-9b32171a3" },
  { icon: FileText, label: "Google Scholar", href: "https://scholar.google.com/citations?user=FHdoH8wAAAAJ&hl=de" },
];
