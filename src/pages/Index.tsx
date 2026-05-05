// Pagina principale dell'applicazione fioraio
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/florist/Navbar";
import { Hero } from "@/components/florist/Hero";
import { Catalog } from "@/components/florist/Catalog";
import { Delivery } from "@/components/florist/Delivery";
import { Testimonials } from "@/components/florist/Testimonials";
import { Footer } from "@/components/florist/Footer";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Catalog />
          <Delivery />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
