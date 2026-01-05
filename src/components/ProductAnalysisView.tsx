import { motion } from "framer-motion";
import { FoodProduct } from "@/data/foodProducts";
import { ProductAnalysis } from "@/data/productAnalysis";
import { AnalysisSection } from "./AnalysisSection";
import { IngredientBadge } from "./IngredientBadge";
import { ArrowLeft, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ProductAnalysisViewProps {
  product: FoodProduct;
  analysis: ProductAnalysis;
  onBack: () => void;
}

export function ProductAnalysisView({ product, analysis, onBack }: ProductAnalysisViewProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="min-w-0">
              <h1 className="font-serif text-xl font-semibold text-foreground truncate">
                {product.name}
              </h1>
              <p className="text-sm text-muted-foreground">{product.brand}</p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Analysis Content */}
      <main className="container max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* What This Product Is */}
        <AnalysisSection icon="🧩" title="What This Product Is" delay={0.1}>
          <p>{analysis.whatItIs}</p>
        </AnalysisSection>

        {/* What Likely Matters to You */}
        <AnalysisSection icon="👀" title="What Likely Matters to You" delay={0.2}>
          <ul className="space-y-2">
            {analysis.inferredConcerns.concerns.map((concern, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{concern}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-3 italic">
            {analysis.inferredConcerns.reasoning}
          </p>
        </AnalysisSection>

        {/* Ingredients That Actually Matter */}
        <AnalysisSection icon="🧪" title="Ingredients That Actually Matter" delay={0.3}>
          <div className="space-y-6">
            {analysis.ingredientBreakdown.safe.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-safe">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Generally Safe / Neutral</span>
                </div>
                <div className="grid gap-2">
                  {analysis.ingredientBreakdown.safe.slice(0, 4).map((ingredient, i) => (
                    <IngredientBadge key={i} ingredient={ingredient} index={i} />
                  ))}
                </div>
              </div>
            )}

            {analysis.ingredientBreakdown.caution.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-caution">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Worth Paying Attention To</span>
                </div>
                <div className="grid gap-2">
                  {analysis.ingredientBreakdown.caution.slice(0, 4).map((ingredient, i) => (
                    <IngredientBadge key={i} ingredient={ingredient} index={i} />
                  ))}
                </div>
              </div>
            )}

            {analysis.ingredientBreakdown.warning.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-warning">
                  <XCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Potential Red Flags</span>
                </div>
                <div className="grid gap-2">
                  {analysis.ingredientBreakdown.warning.map((ingredient, i) => (
                    <IngredientBadge key={i} ingredient={ingredient} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </AnalysisSection>

        {/* Trade-offs */}
        <AnalysisSection icon="⚖️" title="Trade-offs You Should Know" delay={0.4}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-4 border-l-4 border-l-safe">
              <h4 className="font-medium text-sm text-safe mb-2">Does Well</h4>
              <ul className="space-y-1.5 text-sm">
                {analysis.tradeOffs.doesWell.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-safe">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-4 border-l-4 border-l-caution">
              <h4 className="font-medium text-sm text-caution mb-2">Compromises On</h4>
              <ul className="space-y-1.5 text-sm">
                {analysis.tradeOffs.compromises.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-caution">−</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnalysisSection>

        {/* Uncertainties */}
        <AnalysisSection icon="🌫️" title="What We're Not Fully Certain About" delay={0.5}>
          <div className="glass-card p-4 bg-muted/50">
            <ul className="space-y-2 text-sm">
              {analysis.uncertainties.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-muted-foreground">○</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnalysisSection>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="glass-card p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🧠</span>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Bottom-Line Guidance
            </h3>
          </div>
          <p className="text-foreground/90 leading-relaxed">
            {analysis.bottomLine}
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs text-center text-muted-foreground/60 pb-8"
        >
          This analysis is for informational purposes only and not medical advice. 
          Consult a healthcare professional for personalized dietary guidance.
        </motion.p>
      </main>
    </div>
  );
}
