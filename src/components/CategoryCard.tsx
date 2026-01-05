import { motion } from "framer-motion";
import { Category } from "@/data/foodProducts";

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  index: number;
}

export function CategoryCard({ category, onClick, index }: CategoryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass-card p-6 text-left transition-shadow hover:shadow-hover group"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl" role="img" aria-label={category.name}>
          {category.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {category.description}
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            {category.productCount} products
          </p>
        </div>
      </div>
    </motion.button>
  );
}
