import { contactLinks } from "@/content";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="section-fade-in">
          <h2 className="text-3xl font-display tracking-wide uppercase text-foreground mb-2">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Interested in collaboration, speaking opportunities, or just want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="section-fade-in flex justify-center gap-6" style={{ animationDelay: "0.15s" }}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <link.icon size={20} />
              </div>
              <span className="text-xs font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
