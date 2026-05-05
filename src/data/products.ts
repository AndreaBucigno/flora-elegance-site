// Catalogo prodotti del fioraio
import b1 from "@/assets/bouquet-1.jpg";
import b2 from "@/assets/bouquet-2.jpg";
import b3 from "@/assets/bouquet-3.jpg";
import b4 from "@/assets/bouquet-4.jpg";
import b5 from "@/assets/bouquet-5.jpg";
import b6 from "@/assets/bouquet-6.jpg";
import { Product } from "@/context/CartContext";

export const products: Product[] = [
  { id: 1, name: "Rose Antiche", price: 45, image: b1, badge: "best", category: "Rose", occasion: "Anniversario" },
  { id: 2, name: "Tulipani Bianchi", price: 32, image: b2, category: "Tulipani", occasion: "Compleanno" },
  { id: 3, name: "Peonie Rosa", price: 58, image: b3, badge: "sale", category: "Rose", occasion: "Anniversario" },
  { id: 4, name: "Monstera Deliciosa", price: 38, image: b4, category: "Piante", occasion: "Compleanno" },
  { id: 5, name: "Bouquet Sposa", price: 95, image: b5, badge: "best", category: "Rose", occasion: "Matrimonio" },
  { id: 6, name: "Mille Colori", price: 42, image: b6, category: "Tulipani", occasion: "Compleanno" },
];
