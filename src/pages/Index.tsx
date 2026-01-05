import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, getProductsByCategory, FoodProduct } from "@/data/foodProducts";
import { analyzeProduct, ProductAnalysis } from "@/data/productAnalysis";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { ProductAnalysisView } from "@/components/ProductAnalysisView";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type ViewState = "categories" | "products" | "analysis";

export default function Index() {
  const [view, setView] = useState<ViewState>("categories");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<FoodProduct | null>(null);
  const [analysis, setAnalysis] = useState<ProductAnalysis | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setView("products");
  };

  const handleProductSelect = (product: FoodProduct) => {
    setSelectedProduct(product);
    const productAnalysis = analyzeProduct(product);
    setAnalysis(productAnalysis);
    setView("analysis");
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setView("categories");
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    setAnalysis(null);
    setView("products");
  };

  const products = selectedCategory ? getProductsByCategory(selectedCategory) : [];
  const currentCategory = categories.find(c => c.id === selectedCategory);

  if (view === "analysis" && selectedProduct && analysis) {
    return (
      <ProductAnalysisView
        product={selectedProduct}
        analysis={analysis}
        onBack={handleBackToProducts}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-10"
      >
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <AnimatePresence mode="wait">
              {view === "products" && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBackToCategories}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h1 className="font-serif text-2xl font-semibold text-foreground">
                  {view === "categories" ? "NutriLens" : currentCategory?.name}
                </h1>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {view === "categories" 
                  ? "Your AI-powered food companion" 
                  : `${products.length} products to explore`}
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {view === "categories" && (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
                  Understand what you eat,
                  <br />
                  <span className="text-primary">without the noise</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                  Select a category to explore products. Get clear, reasoning-driven insights—not ingredient dumps.
                </p>
              </motion.div>

              {/* Category Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    onClick={() => handleCategorySelect(category.id)}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {view === "products" && (
            <motion.div
              key="products"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3"
            >
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductSelect(product)}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <p className="text-xs text-center text-muted-foreground">
            AI-powered insights for educational purposes. Not medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
