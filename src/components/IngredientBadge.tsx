import { motion } from "framer-motion";
import { IngredientAnalysis } from "@/data/productAnalysis";

interface IngredientBadgeProps {
  ingredient: IngredientAnalysis;
  index: number;
}

export function IngredientBadge({ ingredient, index }: IngredientBadgeProps) {
  const statusClasses = {
    safe: "status-safe border",
    caution: "status-caution border",
    warning: "status-warning border",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={`rounded-xl p-3 ${statusClasses[ingredient.status]}`}
    >
      <p className="font-medium text-sm">{ingredient.name}</p>
      <p className="text-xs mt-1 opacity-80">{ingredient.explanation}</p>
    </motion.div>
  );
}


























