import { contactLinks } from "@/content";

const ContactStrip = () => {
  return (
    <div className="w-full bg-accent/5 border-y border-accent/15">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-center gap-6">
        {contactLinks.map((link, i) => (
          <div key={link.label} className="flex items-center gap-6">
            {i > 0 && (
              <span className="w-px h-4 bg-accent/20" />
            )}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
              aria-label={link.label}
            >
              <link.icon size={14} />
              <span>{link.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactStrip;
