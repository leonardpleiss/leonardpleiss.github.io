import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navItems, contactLinks } from "@/content";
import { profile } from "@/content";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => handleClick("#about")}
            className="text-3xl font-display tracking-wide text-foreground"
          >
            {profile.name}
          </button>
          <TooltipProvider delayDuration={100}>
            <span className="hidden sm:flex items-center gap-0.5 ml-0.5">
              {contactLinks.map((link) => (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                      aria-label={link.label}
                    >
                      <link.icon size={14} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">
                    {link.title}
                  </TooltipContent>
                </Tooltip>
              ))}
            </span>
          </TooltipProvider>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="link-underline text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
