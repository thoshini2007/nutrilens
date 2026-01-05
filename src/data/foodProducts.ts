export interface FoodProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  ingredients: string[];
  nutritionHints: {
    calories?: string;
    sugar?: string;
    sodium?: string;
    protein?: string;
    fiber?: string;
    caffeine?: string;
    calcium?: string;
  };
  imageUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: "snacks", name: "Snacks", icon: "🍿", description: "Chips, crackers, and munchies", productCount: 156 },
  { id: "beverages", name: "Beverages", icon: "🥤", description: "Sodas, juices, and energy drinks", productCount: 203 },
  { id: "dairy", name: "Dairy", icon: "🧀", description: "Milk, cheese, and yogurt", productCount: 89 },
  { id: "instant", name: "Instant Foods", icon: "🍜", description: "Noodles, soups, and quick meals", productCount: 124 },
  { id: "breakfast", name: "Breakfast", icon: "🥣", description: "Cereals, bars, and morning essentials", productCount: 97 },
  { id: "frozen", name: "Frozen", icon: "🧊", description: "Ice cream, pizzas, and frozen meals", productCount: 145 },
  { id: "condiments", name: "Condiments", icon: "🫙", description: "Sauces, dressings, and spreads", productCount: 78 },
  { id: "baked", name: "Baked Goods", icon: "🍞", description: "Bread, cookies, and pastries", productCount: 112 },
];

export const products: FoodProduct[] = [
  // Snacks
  {
    id: "snack-001",
    name: "Classic Salted Potato Chips",
    brand: "CrunchMaster",
    category: "snacks",
    subcategory: "chips",
    ingredients: ["Potatoes", "Vegetable Oil (Sunflower, Corn)", "Salt"],
    nutritionHints: { calories: "150 per serving", sodium: "180mg", fiber: "1g" },
  },
  {
    id: "snack-002",
    name: "Honey BBQ Flavored Chips",
    brand: "CrunchMaster",
    category: "snacks",
    subcategory: "chips",
    ingredients: ["Potatoes", "Vegetable Oil", "Sugar", "Salt", "Dextrose", "Maltodextrin", "Natural Flavors", "Paprika Extract", "Onion Powder", "Garlic Powder", "Caramel Color"],
    nutritionHints: { calories: "160 per serving", sodium: "220mg", sugar: "3g" },
  },
  {
    id: "snack-003",
    name: "Whole Grain Wheat Crackers",
    brand: "NatureBite",
    category: "snacks",
    subcategory: "crackers",
    ingredients: ["Whole Wheat Flour", "Canola Oil", "Sugar", "Salt", "Leavening (Baking Soda)"],
    nutritionHints: { calories: "130 per serving", fiber: "3g", sodium: "160mg" },
  },
  {
    id: "snack-004",
    name: "Cheese Puffs",
    brand: "PuffySnax",
    category: "snacks",
    subcategory: "puffs",
    ingredients: ["Enriched Corn Meal", "Vegetable Oil", "Cheese Seasoning (Whey, Cheddar Cheese, Canola Oil, Maltodextrin, Salt, Artificial Color Yellow 6, Lactic Acid)"],
    nutritionHints: { calories: "160 per serving", sodium: "250mg", protein: "2g" },
  },
  {
    id: "snack-005",
    name: "Trail Mix - Nuts & Dried Fruit",
    brand: "HappyTrail",
    category: "snacks",
    subcategory: "nuts",
    ingredients: ["Almonds", "Cashews", "Raisins", "Dried Cranberries (Cranberries, Sugar, Sunflower Oil)", "Peanuts", "Sunflower Seeds"],
    nutritionHints: { calories: "180 per serving", protein: "5g", fiber: "2g", sugar: "8g" },
  },

  // Beverages
  {
    id: "bev-001",
    name: "Classic Cola",
    brand: "FizzPop",
    category: "beverages",
    subcategory: "soda",
    ingredients: ["Carbonated Water", "High Fructose Corn Syrup", "Caramel Color", "Phosphoric Acid", "Natural Flavors", "Caffeine"],
    nutritionHints: { calories: "140 per can", sugar: "39g", sodium: "45mg" },
  },
  {
    id: "bev-002",
    name: "Orange Juice - No Pulp",
    brand: "SunnyGrove",
    category: "beverages",
    subcategory: "juice",
    ingredients: ["100% Orange Juice", "Vitamin C (Ascorbic Acid)", "Vitamin D3"],
    nutritionHints: { calories: "110 per serving", sugar: "22g", protein: "2g" },
  },
  {
    id: "bev-003",
    name: "Energy Surge",
    brand: "PowerMax",
    category: "beverages",
    subcategory: "energy",
    ingredients: ["Carbonated Water", "Sugar", "Glucose", "Citric Acid", "Taurine", "Sodium Citrate", "Caffeine", "Inositol", "Niacinamide", "Vitamin B6", "Vitamin B12", "Artificial Flavors", "Artificial Colors (Red 40, Blue 1)"],
    nutritionHints: { calories: "110 per can", sugar: "27g", caffeine: "80mg" },
  },
  {
    id: "bev-004",
    name: "Green Tea - Honey",
    brand: "ZenLeaf",
    category: "beverages",
    subcategory: "tea",
    ingredients: ["Filtered Water", "Organic Cane Sugar", "Honey", "Green Tea", "Citric Acid", "Natural Flavors"],
    nutritionHints: { calories: "70 per bottle", sugar: "17g" },
  },
  {
    id: "bev-005",
    name: "Protein Shake - Chocolate",
    brand: "FitFuel",
    category: "beverages",
    subcategory: "protein",
    ingredients: ["Filtered Water", "Milk Protein Concentrate", "Cocoa", "Natural Flavors", "Cellulose Gel", "Sucralose", "Acesulfame Potassium", "Carrageenan", "Vitamin & Mineral Blend"],
    nutritionHints: { calories: "160 per bottle", protein: "30g", sugar: "1g" },
  },

  // Dairy
  {
    id: "dairy-001",
    name: "Greek Yogurt - Strawberry",
    brand: "HealthySpoon",
    category: "dairy",
    subcategory: "yogurt",
    ingredients: ["Pasteurized Grade A Nonfat Milk", "Strawberries", "Cane Sugar", "Water", "Pectin", "Natural Flavors", "Lemon Juice Concentrate", "Live Active Cultures"],
    nutritionHints: { calories: "140 per container", protein: "12g", sugar: "15g" },
  },
  {
    id: "dairy-002",
    name: "Processed Cheese Slices",
    brand: "MeltMaster",
    category: "dairy",
    subcategory: "cheese",
    ingredients: ["Milk", "Whey", "Milk Protein Concentrate", "Milkfat", "Sodium Citrate", "Calcium Phosphate", "Sorbic Acid", "Cheese Culture", "Enzymes", "Annatto (Color)"],
    nutritionHints: { calories: "60 per slice", sodium: "270mg", protein: "4g" },
  },
  {
    id: "dairy-003",
    name: "Whole Milk",
    brand: "FarmFresh",
    category: "dairy",
    subcategory: "milk",
    ingredients: ["Whole Milk", "Vitamin D3"],
    nutritionHints: { calories: "150 per cup", protein: "8g", calcium: "30% DV" },
  },
  {
    id: "dairy-004",
    name: "Butter - Salted",
    brand: "CreamyDairy",
    category: "dairy",
    subcategory: "butter",
    ingredients: ["Pasteurized Cream", "Salt"],
    nutritionHints: { calories: "100 per tbsp", sodium: "90mg" },
  },
  {
    id: "dairy-005",
    name: "Flavored Cream Cheese",
    brand: "SpreadJoy",
    category: "dairy",
    subcategory: "spread",
    ingredients: ["Pasteurized Milk and Cream", "Whey Protein Concentrate", "Salt", "Carob Bean Gum", "Cheese Culture", "Strawberries", "Sugar", "Natural Flavors"],
    nutritionHints: { calories: "80 per serving", sodium: "105mg", sugar: "3g" },
  },

  // Instant Foods
  {
    id: "instant-001",
    name: "Instant Ramen - Beef Flavor",
    brand: "QuickNoodle",
    category: "instant",
    subcategory: "noodles",
    ingredients: ["Enriched Wheat Flour", "Vegetable Oil (Palm)", "Salt", "Soy Sauce Powder", "MSG (Monosodium Glutamate)", "Beef Fat", "Onion Powder", "Garlic Powder", "Caramel Color", "TBHQ (Preservative)"],
    nutritionHints: { calories: "380 per package", sodium: "1820mg", protein: "9g" },
  },
  {
    id: "instant-002",
    name: "Cup Soup - Chicken Noodle",
    brand: "WarmBowl",
    category: "instant",
    subcategory: "soup",
    ingredients: ["Enriched Pasta", "Salt", "Chicken Fat", "Cornstarch", "MSG", "Hydrolyzed Soy Protein", "Dehydrated Vegetables", "Natural Flavors", "Disodium Guanylate", "Disodium Inosinate"],
    nutritionHints: { calories: "120 per serving", sodium: "890mg" },
  },
  {
    id: "instant-003",
    name: "Microwaveable Mac & Cheese",
    brand: "QuickComfort",
    category: "instant",
    subcategory: "pasta",
    ingredients: ["Enriched Macaroni", "Cheese Sauce (Water, Cheddar Cheese, Milk, Whey, Canola Oil, Sodium Phosphate, Salt, Lactic Acid, Annatto Color)"],
    nutritionHints: { calories: "260 per container", sodium: "730mg", protein: "10g" },
  },
  {
    id: "instant-004",
    name: "Instant Oatmeal - Apple Cinnamon",
    brand: "MorningQuick",
    category: "instant",
    subcategory: "oatmeal",
    ingredients: ["Whole Grain Rolled Oats", "Sugar", "Dehydrated Apples", "Natural Flavor", "Cinnamon", "Salt", "Calcium Carbonate", "Vitamin A Palmitate"],
    nutritionHints: { calories: "160 per packet", sugar: "12g", fiber: "3g" },
  },
  {
    id: "instant-005",
    name: "Rice Bowl - Teriyaki Chicken",
    brand: "AsiaExpress",
    category: "instant",
    subcategory: "meals",
    ingredients: ["Cooked White Rice", "Chicken", "Teriyaki Sauce (Soy Sauce, Sugar, Water, Rice Wine, Ginger)", "Vegetables (Broccoli, Carrots)", "Sesame Oil", "Modified Cornstarch"],
    nutritionHints: { calories: "350 per bowl", sodium: "980mg", protein: "15g" },
  },

  // Breakfast
  {
    id: "breakfast-001",
    name: "Frosted Corn Flakes",
    brand: "MorningCrunch",
    category: "breakfast",
    subcategory: "cereal",
    ingredients: ["Milled Corn", "Sugar", "Malt Flavoring", "High Fructose Corn Syrup", "Salt", "BHT (Preservative)", "Iron", "Vitamin B12", "Folic Acid"],
    nutritionHints: { calories: "150 per serving", sugar: "13g", sodium: "200mg" },
  },
  {
    id: "breakfast-002",
    name: "Granola Bars - Chocolate Chip",
    brand: "NatureBite",
    category: "breakfast",
    subcategory: "bars",
    ingredients: ["Whole Grain Oats", "Brown Rice Syrup", "Sugar", "Semisweet Chocolate Chips", "Canola Oil", "Honey", "Salt", "Soy Lecithin", "Natural Flavors"],
    nutritionHints: { calories: "190 per bar", sugar: "10g", fiber: "2g" },
  },
  {
    id: "breakfast-003",
    name: "Pancake Mix - Buttermilk",
    brand: "FluffyMorning",
    category: "breakfast",
    subcategory: "mix",
    ingredients: ["Enriched Flour", "Sugar", "Leavening (Baking Soda, Sodium Aluminum Phosphate)", "Dextrose", "Buttermilk Powder", "Salt", "Egg Whites"],
    nutritionHints: { calories: "160 per serving", sodium: "490mg", protein: "4g" },
  },
  {
    id: "breakfast-004",
    name: "Toaster Pastries - Strawberry",
    brand: "PopTreats",
    category: "breakfast",
    subcategory: "pastries",
    ingredients: ["Enriched Flour", "Corn Syrup", "High Fructose Corn Syrup", "Dextrose", "Soybean Oil", "Sugar", "Dried Strawberries", "Red 40", "Blue 1", "Yellow 6", "Gelatin"],
    nutritionHints: { calories: "200 per pastry", sugar: "16g" },
  },
  {
    id: "breakfast-005",
    name: "Steel Cut Oats",
    brand: "WholeHarvest",
    category: "breakfast",
    subcategory: "oats",
    ingredients: ["100% Whole Grain Steel Cut Oats"],
    nutritionHints: { calories: "150 per serving", fiber: "4g", protein: "5g" },
  },

  // Frozen
  {
    id: "frozen-001",
    name: "Pepperoni Pizza",
    brand: "FreezeKing",
    category: "frozen",
    subcategory: "pizza",
    ingredients: ["Enriched Flour", "Tomato Sauce", "Low-Moisture Part-Skim Mozzarella", "Pepperoni (Pork, Beef, Salt, Spices, Dextrose, Sodium Nitrite)", "Soybean Oil", "Sugar", "Modified Cornstarch"],
    nutritionHints: { calories: "310 per serving", sodium: "730mg", protein: "13g" },
  },
  {
    id: "frozen-002",
    name: "Vanilla Ice Cream",
    brand: "CreamyDreams",
    category: "frozen",
    subcategory: "ice-cream",
    ingredients: ["Milk", "Cream", "Sugar", "Corn Syrup", "Whey", "Vanilla Extract", "Guar Gum", "Carrageenan", "Natural Flavor"],
    nutritionHints: { calories: "140 per serving", sugar: "14g" },
  },
  {
    id: "frozen-003",
    name: "Chicken Nuggets",
    brand: "QuickBite",
    category: "frozen",
    subcategory: "nuggets",
    ingredients: ["Chicken Breast with Rib Meat", "Water", "Enriched Flour", "Vegetable Oil", "Salt", "Spices", "Dextrose", "Sodium Phosphates", "Leavening"],
    nutritionHints: { calories: "270 per serving", sodium: "540mg", protein: "14g" },
  },
  {
    id: "frozen-004",
    name: "Vegetable Stir Fry Mix",
    brand: "GardenFrozen",
    category: "frozen",
    subcategory: "vegetables",
    ingredients: ["Broccoli", "Carrots", "Water Chestnuts", "Snap Peas", "Red Bell Peppers"],
    nutritionHints: { calories: "30 per serving", fiber: "2g" },
  },
  {
    id: "frozen-005",
    name: "Breakfast Burrito",
    brand: "MorningWrap",
    category: "frozen",
    subcategory: "breakfast",
    ingredients: ["Flour Tortilla", "Scrambled Eggs (Eggs, Milk, Soybean Oil)", "Cheese", "Sausage (Pork, Salt, Spices, BHT)", "Peppers", "Onions"],
    nutritionHints: { calories: "290 per burrito", sodium: "650mg", protein: "11g" },
  },

  // Condiments
  {
    id: "cond-001",
    name: "Tomato Ketchup",
    brand: "ClassicRed",
    category: "condiments",
    subcategory: "sauce",
    ingredients: ["Tomato Concentrate", "Distilled Vinegar", "High Fructose Corn Syrup", "Corn Syrup", "Salt", "Spices", "Onion Powder", "Natural Flavoring"],
    nutritionHints: { calories: "20 per tbsp", sugar: "4g", sodium: "160mg" },
  },
  {
    id: "cond-002",
    name: "Mayonnaise",
    brand: "CreamySpread",
    category: "condiments",
    subcategory: "spread",
    ingredients: ["Soybean Oil", "Water", "Whole Eggs and Egg Yolks", "Vinegar", "Salt", "Sugar", "Lemon Juice Concentrate", "Calcium Disodium EDTA"],
    nutritionHints: { calories: "90 per tbsp", sodium: "90mg" },
  },
  {
    id: "cond-003",
    name: "Soy Sauce - Reduced Sodium",
    brand: "AsianKitchen",
    category: "condiments",
    subcategory: "sauce",
    ingredients: ["Water", "Wheat", "Soybeans", "Salt", "Sodium Benzoate (Preservative)"],
    nutritionHints: { calories: "10 per tbsp", sodium: "575mg" },
  },
  {
    id: "cond-004",
    name: "Ranch Dressing",
    brand: "ValleyFarm",
    category: "condiments",
    subcategory: "dressing",
    ingredients: ["Soybean Oil", "Water", "Egg Yolk", "Sugar", "Salt", "Buttermilk", "Distilled Vinegar", "Phosphoric Acid", "Xanthan Gum", "MSG", "Garlic", "Onion", "Natural Flavors"],
    nutritionHints: { calories: "140 per serving", sodium: "260mg" },
  },
  {
    id: "cond-005",
    name: "Hot Sauce",
    brand: "FireKick",
    category: "condiments",
    subcategory: "sauce",
    ingredients: ["Aged Cayenne Red Peppers", "Distilled Vinegar", "Water", "Salt", "Garlic Powder"],
    nutritionHints: { calories: "0 per tsp", sodium: "35mg" },
  },

  // Baked Goods
  {
    id: "baked-001",
    name: "White Sandwich Bread",
    brand: "SoftLoaf",
    category: "baked",
    subcategory: "bread",
    ingredients: ["Enriched Wheat Flour", "Water", "High Fructose Corn Syrup", "Yeast", "Soybean Oil", "Salt", "Calcium Sulfate", "Monoglycerides", "DATEM", "Calcium Propionate (Preservative)", "Azodicarbonamide"],
    nutritionHints: { calories: "70 per slice", sodium: "130mg" },
  },
  {
    id: "baked-002",
    name: "Chocolate Chip Cookies",
    brand: "SweetBites",
    category: "baked",
    subcategory: "cookies",
    ingredients: ["Enriched Flour", "Sugar", "Palm Oil", "Chocolate Chips (Sugar, Chocolate, Cocoa Butter, Soy Lecithin)", "Brown Sugar", "Salt", "Baking Soda", "Natural and Artificial Flavors"],
    nutritionHints: { calories: "160 per serving", sugar: "10g" },
  },
  {
    id: "baked-003",
    name: "Whole Wheat Bread",
    brand: "GrainHouse",
    category: "baked",
    subcategory: "bread",
    ingredients: ["Whole Wheat Flour", "Water", "Wheat Gluten", "Honey", "Yeast", "Salt", "Soybean Oil", "Cultured Wheat Flour"],
    nutritionHints: { calories: "80 per slice", fiber: "3g", sodium: "130mg" },
  },
  {
    id: "baked-004",
    name: "Glazed Donuts",
    brand: "MorningTreat",
    category: "baked",
    subcategory: "pastries",
    ingredients: ["Enriched Wheat Flour", "Sugar", "Palm Oil", "Water", "Dextrose", "Soy Flour", "Leavening", "Salt", "Mono and Diglycerides", "Sodium Stearoyl Lactylate", "Artificial Flavors"],
    nutritionHints: { calories: "240 per donut", sugar: "14g" },
  },
  {
    id: "baked-005",
    name: "Multigrain Bagels",
    brand: "BagelBarn",
    category: "baked",
    subcategory: "bagels",
    ingredients: ["Enriched Flour", "Water", "Whole Wheat Flour", "Oat Fiber", "Wheat Gluten", "Flaxseed", "Millet", "Sugar", "Yeast", "Salt", "Sunflower Seeds"],
    nutritionHints: { calories: "250 per bagel", fiber: "5g", protein: "10g" },
  },
];

export const getProductsByCategory = (categoryId: string): FoodProduct[] => {
  return products.filter(p => p.category === categoryId);
};

export const getProductById = (productId: string): FoodProduct | undefined => {
  return products.find(p => p.id === productId);
};
