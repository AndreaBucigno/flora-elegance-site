// Catalogo prodotti con filtri rapidi per occasione e tipologia
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const occasions = ["Tutte", "Matrimonio", "Compleanno", "Anniversario"];
const categories = ["Tutte", "Rose", "Tulipani", "Piante"];

export const Catalog = () => {
  const [occasion, setOccasion] = useState("Tutte");
  const [category, setCategory] = useState("Tutte");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (occasion === "Tutte" || p.occasion === occasion) &&
          (category === "Tutte" || p.category === category)
      ),
    [occasion, category]
  );

  return (
    <section id="catalogo" className="py-24 bg-gradient-soft">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Catalogo</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-4">Le nostre creazioni</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bouquet e piante curati nei minimi dettagli, perfetti per ogni occasione.
          </p>
        </motion.div>

        {/* Filtri rapidi */}
        <div id="occasioni" className="flex flex-col gap-4 mb-12 items-center">
          <FilterRow label="Occasione" options={occasions} value={occasion} onChange={setOccasion} />
          <FilterRow label="Tipologia" options={categories} value={category} onChange={setCategory} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {p.badge && (
                  <span
                    className={cn(
                      "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider",
                      p.badge === "best"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    )}
                  >
                    {p.badge === "best" ? "Best Seller" : "Sconto"}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">€ {p.price.toFixed(2)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const FilterRow = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="flex flex-wrap items-center gap-2 justify-center">
    <span className="text-xs uppercase tracking-widest text-muted-foreground mr-2">{label}:</span>
    {options.map((o) => (
      <Button
        key={o}
        variant="ghost"
        size="sm"
        onClick={() => onChange(o)}
        className={cn(
          "rounded-full text-sm transition-all",
          value === o
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-card hover:bg-muted"
        )}
      >
        {o}
      </Button>
    ))}
  </div>
);
