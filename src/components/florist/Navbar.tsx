// Header sticky con navigazione
import { Flower2 } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Catalogo", href: "#catalogo" },
  { label: "Occasioni", href: "#occasioni" },
  { label: "Recensioni", href: "#recensioni" },
];

export const Navbar = () => {

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Flower2 className="h-7 w-7 text-primary" />
          <span className="font-serif text-2xl font-semibold">Fiordaliso</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>


      </div>
    </header>
  );
};
