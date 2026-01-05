import { motion } from "framer-motion";
import { FoodProduct } from "@/data/foodProducts";
import { ChevronRight } from "lucide-react";

interface ProductCardProps {
  product: FoodProduct;
  onClick: () => void;
  index: number;
}

export function ProductCard({ product, onClick, index }: ProductCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="w-full glass-card p-4 text-left transition-all hover:shadow-hover group flex items-center gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl shrink-0">
        {product.category === "snacks" && "🍿"}
        {product.category === "beverages" && "🥤"}
        {product.category === "dairy" && "🧀"}
        {product.category === "instant" && "🍜"}
        {product.category === "breakfast" && "🥣"}
        {product.category === "frozen" && "🧊"}
        {product.category === "condiments" && "🫙"}
        {product.category === "baked" && "🍞"}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {product.brand}
        </p>
      </div>

      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
    </motion.button>
  );
}
