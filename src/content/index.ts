/**
 * Content Hub
 *
 * All website content lives in this folder.
 * To update content, edit the individual files:
 *   - profile.ts    → name, bio, location, email, university
 *   - projects.ts   → research projects, co-authors, venues, links, images
 *   - education.ts  → degrees & institutions
 *   - experience.ts → professional positions
 *   - contact.ts    → social / contact links
 *   - navigation.ts → navbar items
 */

export { profile } from "./profile";
export { projects, type Project } from "./projects";
export { education, type Education } from "./education";
export { experiences, type Experience } from "./experience";
export { contactLinks, type ContactLink } from "./contact";
export { navItems, type NavItem } from "./navigation";
