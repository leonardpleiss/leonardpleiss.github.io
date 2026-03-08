import { contactLinks } from "@/content";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ContactSidebar = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-1.5 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm py-3 px-1.5 shadow-sm">
          {contactLinks.map((link) => (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={15} />
                </a>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-xs">
                {link.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ContactSidebar;
