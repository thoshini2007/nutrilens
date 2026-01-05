import pandas as pd

# Load CSV
df = pd.read_csv("usda_protein_nutrient_dataset_5000.csv")

# OPTIONAL: rename columns to frontend-friendly names
df = df.rename(columns={
    "FoodName": "food_name",
    "Category": "category",
    "Protein(g)": "protein_g",
    "Fat(g)": "fat_g",
    "Carbs(g)": "carbs_g",
    "Calories": "calories"
})

# Fill missing values (important for frontend)
df = df.fillna(0)

# Convert to JSON
df.to_json(
    "src/data/usdaFoods.json",
    orient="records",
    indent=2
)

print("✅ CSV successfully converted to JSON")
