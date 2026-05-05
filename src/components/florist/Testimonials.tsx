// Slider testimonial con rating a stelle
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Giulia Rossi",
    text: "Bouquet meraviglioso, profumatissimo e consegnato puntualissimo. La mia mamma è rimasta senza parole!",
    rating: 5,
    role: "Roma",
  },
  {
    name: "Marco Bianchi",
    text: "Ho ordinato per il nostro anniversario: peonie eleganti e curate nei minimi dettagli. Davvero professionali.",
    rating: 5,
    role: "Milano",
  },
  {
    name: "Sofia Conti",
    text: "Servizio impeccabile. Le rose erano fresche e l'imballaggio elegante come un regalo da boutique.",
    rating: 5,
    role: "Firenze",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const r = reviews[i];

  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section id="recensioni" className="py-24 bg-gradient-soft">
      <div className="container max-w-3xl text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Recensioni</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-12">Le voci dei nostri clienti</h2>

        <div className="relative bg-card rounded-3xl p-10 md:p-14 shadow-elegant min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed mb-6">
                «{r.text}»
              </p>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{r.name}</p>
                <p className="text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} aria-label="Precedente" className="h-11 w-11 rounded-full bg-card hover:bg-muted shadow-soft flex items-center justify-center transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Successivo" className="h-11 w-11 rounded-full bg-primary text-primary-foreground hover:bg-primary-glow shadow-soft flex items-center justify-center transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
