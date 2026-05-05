// Sezione consegna: verifica CAP e selezione data/ora
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Delivery = () => {
  const [cap, setCap] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [status, setStatus] = useState<"idle" | "ok" | "ko">("idle");

  const checkCap = (e: React.FormEvent) => {
    e.preventDefault();
    if (cap.length !== 5) {
      toast.error("Inserisci un CAP valido (5 cifre)");
      return;
    }
    // Demo: copertura per CAP che iniziano con 0 o 1
    const covered = /^[01]/.test(cap);
    setStatus(covered ? "ok" : "ko");
  };

  return (
    <section className="py-24 bg-card">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Consegna</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-4">Quando vuoi, dove vuoi</h2>
          <p className="text-muted-foreground">
            Verifica la copertura nella tua zona e scegli il momento perfetto.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={checkCap}
          className="bg-background rounded-3xl p-8 md:p-10 shadow-soft grid md:grid-cols-3 gap-6"
        >
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-foreground">
              <MapPin className="h-4 w-4 text-primary" /> CAP
            </Label>
            <Input
              value={cap}
              onChange={(e) => {
                setCap(e.target.value.replace(/\D/g, "").slice(0, 5));
                setStatus("idle");
              }}
              placeholder="00100"
              className="h-12 rounded-xl bg-card"
            />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-foreground">
              <Calendar className="h-4 w-4 text-primary" /> Data
            </Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12 rounded-xl bg-card"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-foreground">Orario</Label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="h-12 w-full rounded-xl bg-card border border-input px-3 text-sm"
            >
              {["09:00", "10:00", "12:00", "15:00", "17:00", "19:00"].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3 flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
            <div className="text-sm">
              {status === "ok" && (
                <span className="flex items-center gap-2 text-primary">
                  <Check className="h-4 w-4" /> Consegniamo nella tua zona!
                </span>
              )}
              {status === "ko" && (
                <span className="flex items-center gap-2 text-destructive">
                  <X className="h-4 w-4" /> CAP non coperto, ci dispiace.
                </span>
              )}
            </div>
            <Button type="submit" size="lg" className="rounded-full px-8 bg-primary hover:bg-primary-glow">
              Verifica copertura
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
