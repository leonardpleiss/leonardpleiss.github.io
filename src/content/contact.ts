import { Mail, Github, Linkedin, FileText, type LucideIcon } from "lucide-react";

export interface ContactLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { icon: Mail, label: "Email", href: "mailto:jane.smith@mit.edu" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FileText, label: "Google Scholar", href: "https://scholar.google.com" },
];
