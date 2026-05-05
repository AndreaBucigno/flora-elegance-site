// Header sticky con navigazione e icona carrello
import { Flower2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Catalogo", href: "#catalogo" },
  { label: "Occasioni", href: "#occasioni" },
  { label: "Recensioni", href: "#recensioni" },
];

export const Navbar = () => {
  const { count } = useCart();

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

        <button
          aria-label="Carrello"
          className="relative p-2 rounded-full hover:bg-muted transition-colors"
        >
          <ShoppingBag className="h-5 w-5 text-foreground" />
          <AnimatePresence>
            {count > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                key={count}
                className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full h-5 min-w-5 px-1 flex items-center justify-center shadow-rose"
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
};
