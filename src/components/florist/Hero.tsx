// Hero section con immagine a tutta larghezza e CTA
import heroImg from "@/assets/hero-flowers.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Bouquet di rose e peonie"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative container h-full flex flex-col justify-center items-start max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-background/90 mb-6"
        >
          · Fioraio Artigianale ·
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-background leading-[1.05] mb-6"
        >
          Emozioni in fiore,<br />
          <em className="text-secondary font-normal">consegnate a casa tua.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg text-background/85 max-w-lg mb-10"
        >
          Composizioni botaniche realizzate a mano dai nostri fioristi, con i fiori più freschi della stagione.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 shadow-rose group">
            <a href="#catalogo">
              Ordina Ora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
