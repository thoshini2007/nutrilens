import { FoodProduct } from './foodProducts';

export interface IngredientAnalysis {
  name: string;
  status: 'safe' | 'caution' | 'warning';
  explanation: string;
}

export interface ProductAnalysis {
  whatItIs: string;
  inferredConcerns: {
    concerns: string[];
    reasoning: string;
  };
  ingredientBreakdown: {
    safe: IngredientAnalysis[];
    caution: IngredientAnalysis[];
    warning: IngredientAnalysis[];
  };
  tradeOffs: {
    doesWell: string[];
    compromises: string[];
  };
  uncertainties: string[];
  bottomLine: string;
}

// Ingredient knowledge base
const ingredientInfo: Record<string, { status: 'safe' | 'caution' | 'warning'; explanation: string }> = {
  // Safe ingredients
  "potatoes": { status: "safe", explanation: "Whole food, primary ingredient for chips. Provides potassium and vitamin C." },
  "salt": { status: "safe", explanation: "Essential mineral. Amount per serving is what matters." },
  "whole wheat flour": { status: "safe", explanation: "Whole grain with fiber and nutrients intact." },
  "whole grain rolled oats": { status: "safe", explanation: "Excellent source of fiber and slow-releasing energy." },
  "almonds": { status: "safe", explanation: "Nutrient-dense, good fats and protein." },
  "cashews": { status: "safe", explanation: "Good source of minerals and healthy fats." },
  "broccoli": { status: "safe", explanation: "Nutrient-rich vegetable with vitamins and fiber." },
  "carrots": { status: "safe", explanation: "Rich in vitamin A and antioxidants." },
  "pasteurized cream": { status: "safe", explanation: "Simple dairy ingredient." },
  "100% orange juice": { status: "safe", explanation: "Natural fruit juice with vitamins." },
  "filtered water": { status: "safe", explanation: "Clean, purified water base." },
  "organic cane sugar": { status: "safe", explanation: "Less processed than refined sugar, though still sugar." },
  "honey": { status: "safe", explanation: "Natural sweetener with some beneficial compounds." },
  "green tea": { status: "safe", explanation: "Contains antioxidants and moderate caffeine." },
  "live active cultures": { status: "safe", explanation: "Beneficial probiotics for gut health." },
  "vitamin d3": { status: "safe", explanation: "Essential vitamin, often added to dairy." },
  "aged cayenne red peppers": { status: "safe", explanation: "Natural spice with capsaicin." },
  "distilled vinegar": { status: "safe", explanation: "Simple fermented ingredient." },
  
  // Caution ingredients
  "sugar": { status: "caution", explanation: "Added sugar contributes calories without nutrition. Watch daily intake." },
  "cane sugar": { status: "caution", explanation: "Still added sugar, though less processed. Monitor total intake." },
  "vegetable oil": { status: "caution", explanation: "Often highly processed. Quality and type matters." },
  "palm oil": { status: "caution", explanation: "Saturated fat source. Environmental and health concerns exist." },
  "soybean oil": { status: "caution", explanation: "High in omega-6. Quality of extraction matters." },
  "maltodextrin": { status: "caution", explanation: "Processed carb that spikes blood sugar quickly." },
  "natural flavors": { status: "caution", explanation: "Umbrella term that can hide various compounds. Not necessarily harmful." },
  "dextrose": { status: "caution", explanation: "Simple sugar, essentially glucose. Adds to total sugar intake." },
  "corn syrup": { status: "caution", explanation: "Liquid sugar. Different from HFCS but still added sugar." },
  "sodium citrate": { status: "caution", explanation: "Generally safe preservative, but adds to sodium intake." },
  "carrageenan": { status: "caution", explanation: "Some research suggests gut inflammation. Conflicting evidence." },
  "modified cornstarch": { status: "caution", explanation: "Processed thickener. Generally safe but indicates processing." },
  "sucralose": { status: "caution", explanation: "Artificial sweetener. Research ongoing on long-term effects." },
  "acesulfame potassium": { status: "caution", explanation: "Artificial sweetener often paired with sucralose. Long-term effects uncertain." },
  "soy lecithin": { status: "caution", explanation: "Common emulsifier, generally safe. May be concern if soy-sensitive." },
  "xanthan gum": { status: "caution", explanation: "Thickener, generally safe. Can cause digestive issues in some." },
  "sodium phosphates": { status: "caution", explanation: "Common additive, but excess phosphate intake may affect bone health." },
  "enriched flour": { status: "caution", explanation: "Stripped of nutrients then re-fortified. Not as nutritious as whole grain." },
  "enriched wheat flour": { status: "caution", explanation: "White flour with added vitamins. Missing whole grain benefits." },
  
  // Warning ingredients
  "high fructose corn syrup": { status: "warning", explanation: "Linked to obesity and metabolic issues. Common in processed foods." },
  "msg": { status: "warning", explanation: "Flavor enhancer some are sensitive to. May cause headaches in susceptible individuals." },
  "monosodium glutamate": { status: "warning", explanation: "Same as MSG. Generally recognized as safe but causes reactions in some people." },
  "artificial color": { status: "warning", explanation: "Synthetic dyes with potential behavioral effects, especially in children." },
  "red 40": { status: "warning", explanation: "Synthetic dye linked to hyperactivity in some children. Banned in some countries." },
  "blue 1": { status: "warning", explanation: "Synthetic dye. Some concerns about long-term effects." },
  "yellow 6": { status: "warning", explanation: "Synthetic dye with potential allergen concerns and hyperactivity links." },
  "caramel color": { status: "warning", explanation: "Can contain 4-MEI, a potential carcinogen. Depends on manufacturing process." },
  "tbhq": { status: "warning", explanation: "Preservative. Safe in small amounts but high doses are concerning." },
  "sodium nitrite": { status: "warning", explanation: "Preservative in processed meats. Linked to increased cancer risk with high consumption." },
  "bht": { status: "warning", explanation: "Preservative. Some studies suggest potential health risks." },
  "azodicarbonamide": { status: "warning", explanation: "Dough conditioner banned in EU and Australia. Respiratory concerns." },
  "calcium disodium edta": { status: "warning", explanation: "Preservative. Can bind to minerals and affect absorption." },
  "phosphoric acid": { status: "warning", explanation: "Adds acidity. May affect bone health and tooth enamel over time." },
  "sodium aluminum phosphate": { status: "warning", explanation: "Leavening agent. Aluminum intake is a concern for some." },
};

function analyzeIngredients(ingredients: string[]): ProductAnalysis['ingredientBreakdown'] {
  const result: ProductAnalysis['ingredientBreakdown'] = {
    safe: [],
    caution: [],
    warning: [],
  };

  const analyzed = new Set<string>();

  ingredients.forEach(ingredient => {
    const lowerIngredient = ingredient.toLowerCase();
    
    // Check each known ingredient
    for (const [key, info] of Object.entries(ingredientInfo)) {
      if (lowerIngredient.includes(key) && !analyzed.has(key)) {
        analyzed.add(key);
        const analysis: IngredientAnalysis = {
          name: ingredient.split('(')[0].trim(),
          status: info.status,
          explanation: info.explanation,
        };
        result[info.status].push(analysis);
      }
    }
  });

  return result;
}

function inferConcerns(product: FoodProduct): { concerns: string[]; reasoning: string } {
  const concerns: string[] = [];
  let reasoning = "";

  const hasHighSodium = product.nutritionHints.sodium && parseInt(product.nutritionHints.sodium) > 500;
  const hasHighSugar = product.nutritionHints.sugar && parseInt(product.nutritionHints.sugar) > 10;
  const hasArtificialColors = product.ingredients.some(i => 
    i.toLowerCase().includes('red 40') || 
    i.toLowerCase().includes('blue 1') || 
    i.toLowerCase().includes('yellow')
  );
  const hasPreservatives = product.ingredients.some(i => 
    i.toLowerCase().includes('bht') || 
    i.toLowerCase().includes('tbhq') ||
    i.toLowerCase().includes('nitrite')
  );

  if (hasHighSodium) {
    concerns.push("Daily sodium intake and blood pressure management");
  }
  if (hasHighSugar) {
    concerns.push("Sugar consumption and energy levels");
  }
  if (hasArtificialColors) {
    concerns.push("Suitability for children or those sensitive to additives");
  }
  if (hasPreservatives) {
    concerns.push("Long-term consumption patterns");
  }
  if (product.category === "instant") {
    concerns.push("Convenience vs. nutritional completeness");
  }
  if (product.category === "beverages") {
    concerns.push("Hydration quality and empty calories");
  }

  if (concerns.length === 0) {
    concerns.push("General ingredient quality and processing level");
    reasoning = "This appears to be a relatively straightforward product, so we're focusing on overall quality.";
  } else {
    reasoning = `Based on the ingredient list and nutritional profile, these are the areas most people would want to consider.`;
  }

  return { concerns, reasoning };
}

function generateTradeOffs(product: FoodProduct, breakdown: ProductAnalysis['ingredientBreakdown']): ProductAnalysis['tradeOffs'] {
  const doesWell: string[] = [];
  const compromises: string[] = [];

  // Positive aspects
  if (product.nutritionHints.protein && parseInt(product.nutritionHints.protein) > 5) {
    doesWell.push("Good protein content for satiety");
  }
  if (product.nutritionHints.fiber && parseInt(product.nutritionHints.fiber) > 2) {
    doesWell.push("Contains meaningful fiber");
  }
  if (breakdown.safe.length > breakdown.warning.length) {
    doesWell.push("Relatively clean ingredient list");
  }
  if (product.ingredients.length <= 5) {
    doesWell.push("Simple, minimal ingredients");
  }
  if (product.category === "instant" || product.category === "frozen") {
    doesWell.push("Convenient and quick to prepare");
  }

  // Compromises
  if (breakdown.warning.length > 0) {
    compromises.push("Contains ingredients some prefer to avoid");
  }
  if (product.nutritionHints.sodium && parseInt(product.nutritionHints.sodium) > 400) {
    compromises.push("Higher sodium content for shelf stability or flavor");
  }
  if (product.nutritionHints.sugar && parseInt(product.nutritionHints.sugar) > 10) {
    compromises.push("Added sugars for taste appeal");
  }
  if (product.ingredients.some(i => i.toLowerCase().includes('enriched'))) {
    compromises.push("Uses refined rather than whole grain flour");
  }

  // Defaults if empty
  if (doesWell.length === 0) doesWell.push("Widely available and affordable");
  if (compromises.length === 0) compromises.push("Processing level typical for this category");

  return { doesWell, compromises };
}

function generateUncertainties(product: FoodProduct, breakdown: ProductAnalysis['ingredientBreakdown']): string[] {
  const uncertainties: string[] = [];

  if (product.ingredients.some(i => i.toLowerCase().includes('natural flavors'))) {
    uncertainties.push("'Natural flavors' is a broad term—exact composition varies by manufacturer.");
  }
  if (breakdown.caution.some(i => i.name.toLowerCase().includes('carrageenan'))) {
    uncertainties.push("Research on carrageenan is mixed—some studies suggest concerns, others show safety.");
  }
  if (product.ingredients.some(i => i.toLowerCase().includes('sucralose') || i.toLowerCase().includes('acesulfame'))) {
    uncertainties.push("Long-term effects of artificial sweeteners are still being studied.");
  }
  if (product.category === "instant") {
    uncertainties.push("Exact sourcing and freshness of ingredients in instant products can vary.");
  }

  if (uncertainties.length === 0) {
    uncertainties.push("Individual tolerance varies—what works for most may not work for everyone.");
  }

  return uncertainties;
}

function generateBottomLine(product: FoodProduct, breakdown: ProductAnalysis['ingredientBreakdown']): string {
  const warningCount = breakdown.warning.length;
  const cautionCount = breakdown.caution.length;
  const safeCount = breakdown.safe.length;

  if (warningCount >= 3) {
    return `This product has several ingredients worth being mindful of. It's fine as an occasional treat, but if you're consuming it regularly, you might want to explore alternatives with cleaner ingredient lists. For everyday use, there are likely better options in this category.`;
  }
  
  if (warningCount >= 1 && warningCount < 3) {
    return `This is a reasonable choice for occasional consumption. It has a few ingredients that some people prefer to limit, but nothing alarming for moderate use. If it's a regular part of your diet, consider whether the convenience is worth the trade-offs for your specific health goals.`;
  }
  
  if (cautionCount > safeCount) {
    return `A fairly processed option typical of its category. Most people can enjoy this without concern, especially in moderation. If you're actively trying to reduce processed foods, look for simpler alternatives, but don't stress over occasional consumption.`;
  }

  return `This is a relatively straightforward product with a reasonable ingredient profile. Most people can feel comfortable including this in their regular routine. As with all foods, variety and moderation are your friends.`;
}

export function analyzeProduct(product: FoodProduct): ProductAnalysis {
  const breakdown = analyzeIngredients(product.ingredients);
  
  // Generate what it is
  const categoryDescriptions: Record<string, string> = {
    snacks: "a packaged snack food",
    beverages: "a packaged beverage",
    dairy: "a dairy product",
    instant: "a convenience food designed for quick preparation",
    breakfast: "a breakfast food item",
    frozen: "a frozen food product",
    condiments: "a condiment or sauce",
    baked: "a baked goods product",
  };

  const whatItIs = `${product.name} by ${product.brand} is ${categoryDescriptions[product.category] || 'a packaged food product'}. It's designed for convenience and taste, like most products in this category.`;

  return {
    whatItIs,
    inferredConcerns: inferConcerns(product),
    ingredientBreakdown: breakdown,
    tradeOffs: generateTradeOffs(product, breakdown),
    uncertainties: generateUncertainties(product, breakdown),
    bottomLine: generateBottomLine(product, breakdown),
  };
}
