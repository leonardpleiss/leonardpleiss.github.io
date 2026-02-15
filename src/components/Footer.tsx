import { profile } from "@/content";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. {profile.footerNote}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
