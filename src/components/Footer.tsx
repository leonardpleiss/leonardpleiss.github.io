import { profile, contactLinks } from "@/content";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-5">
        <div className="flex items-center gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/15 transition-colors"
              aria-label={link.label}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
