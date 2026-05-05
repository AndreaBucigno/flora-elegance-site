// Footer con contatti, orari, social e newsletter
import { Flower2, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Inserisci una email valida");
    toast.success("Iscrizione confermata! 🌸");
    setEmail("");
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flower2 className="h-6 w-6" />
            <span className="font-serif text-2xl font-semibold">Fiordaliso</span>
          </div>
          <p className="text-primary-foreground/75 text-sm leading-relaxed">
            Fiori freschi e composizioni artigianali per ogni emozione, dal 1998.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Contatti</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +39 06 1234 5678</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> ciao@fiordaliso.it</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Via dei Fiori 12, Roma</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Orari</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Lun – Ven: 9:00 – 19:30</li>
            <li>Sabato: 9:00 – 18:00</li>
            <li>Domenica: 10:00 – 13:00</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Newsletter</h4>
          <p className="text-sm text-primary-foreground/75 mb-4">
            Iscriviti per offerte stagionali e novità botaniche.
          </p>
          <form onSubmit={subscribe} className="flex gap-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-full"
            />
            <Button type="submit" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shrink-0">
              Iscriviti
            </Button>
          </form>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-primary-foreground/15 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Fiordaliso. Tutti i diritti riservati.
      </div>
    </footer>
  );
};
