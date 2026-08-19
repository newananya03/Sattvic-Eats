/* =====================================================
   SATTVIC EATS — PRODUCT CATALOG
   Single source of truth for every Product Detail Page.
   Add a new product = add one object here. No new HTML needed.
===================================================== */

const PRODUCTS = [

  {
    slug: "arabica-coffee",
    category: "Coffee",
    name: "Arabica/Robusta Filter Coffee Powder",
    tagline: "Pure. Aromatic. Authentic.",
    image: "images/coffee.jpg",
    tags: ["BEST SELLER", "PURE ARABICA", "STONE GROUND"],
    price: 350,
    unit: "200g pack",
    description:
      "Made from high-quality Arabica/Robusta beans, our filter coffee offers a smooth, rich flavor with a balanced aroma. Roasted and ground in small batches to preserve freshness.",
    benefits: [
      "Rich in antioxidants",
      "Boosts energy and focus",
      "Supports metabolism",
      "Gentle on acidity (compared to robusta)"
    ],
    healthValue: [
      "Improves alertness",
      "May support heart health",
      "Enhances mood naturally"
    ],
    variants: {
      label: "Roast Blend",
      options: [
        { id: "light", name: "Light", coffee: 90, chicory: 10 },
        { id: "medium", name: "Medium", coffee: 80, chicory: 20 },
        { id: "strong", name: "Strong", coffee: 70, chicory: 30 }
      ]
    }
  },

  { slug: "badam-powder", category: "Health Blends", name: "Badam Powder",
    tagline: "Daily Nutrition in Every Spoon", image: "images/badam.jpg",
    tags: ["POPULAR"], price: 250, unit: "200g pack",
    description: "A wholesome blend of finely ground almonds with natural ingredients — a nutritious almond drink mix for the whole family.",
    benefits: ["Boosts brain function", "Strengthens immunity", "Supports bone health", "Ideal for kids and adults"],
    healthValue: ["Rich in Vitamin E & healthy fats", "Supports memory and concentration", "Aids overall nourishment"] },

  { slug: "dry-fruit-laddu", category: "Health Blends", name: "Seeds and Dry Fruits Ladoo",
    tagline: "Natural Sweetness. Powerful Nutrition.", image: "images/laddu.jpg",
    tags: ["HEALTHY", "NO REFINED SUGAR"], price: 300, unit: "250g box",
    description: "A healthy alternative to sweets, made with premium dry fruits and seeds, without refined sugar.",
    benefits: ["Instant energy booster", "Supports immunity", "Helps in weight management", "Perfect healthy snack"],
    healthValue: ["High in fiber & protein", "Good for digestion", "Sustains energy levels"] },

  { slug: "almonds", category: "Dry Fruits", name: "Almonds",
    tagline: "Premium California Almonds", image: "images/almond.jpg",
    tags: ["PREMIUM"], price: 420, unit: "250g pack",
    description: "Premium California almonds, rich in nutrition and carefully sorted for size and freshness.",
    benefits: ["Boost brain function", "Good for heart health"],
    healthValue: ["Rich in Vitamin E & protein"] },

  { slug: "cashews", category: "Dry Fruits", name: "Cashews",
    tagline: "Crunchy Premium Cashews", image: "images/cashew.jpg",
    tags: ["PREMIUM"], price: 480, unit: "250g pack",
    description: "Crunchy premium cashews, hand-sorted and packed with goodness.",
    benefits: ["Supports bone health", "Boosts energy"],
    healthValue: ["Rich in healthy fats & magnesium"] },

  { slug: "walnuts", category: "Dry Fruits", name: "Walnuts",
    tagline: "Omega-3 Rich Walnuts", image: "images/walnut.jpg",
    tags: ["PREMIUM"], price: 520, unit: "250g pack",
    description: "Healthy, omega-3 rich walnut halves, sourced for freshness and crunch.",
    benefits: ["Supports brain health", "Improves heart health"],
    healthValue: ["Rich in Omega-3 fatty acids"] },

  { slug: "pistachios", category: "Dry Fruits", name: "Pistachios",
    tagline: "Protein-Rich Pistachios", image: "images/pistachio.jpg",
    tags: ["PREMIUM"], price: 650, unit: "250g pack",
    description: "Naturally flavorful pistachios, a satisfying protein-rich snack straight from the shell.",
    benefits: ["Aids weight management", "Improves gut health"],
    healthValue: ["High in protein & antioxidants"] },

  { slug: "raisins", category: "Dry Fruits", name: "Raisins",
    tagline: "Naturally Sun-Dried Raisins", image: "images/raisin.jpg",
    tags: [], price: 190, unit: "250g pack",
    description: "Naturally sweet, sun-dried raisins — a wholesome everyday source of quick energy.",
    benefits: ["Improves digestion", "Boosts iron levels"],
    healthValue: ["Natural source of energy", "Supports blood health"] },

  { slug: "sunflower-seeds", category: "Seeds", name: "Sunflower Seeds",
    tagline: "Nature's Power Seeds", image: "images/sunflower.jpg",
    tags: [], price: 180, unit: "200g pack",
    description: "Crunchy sunflower seeds, rich in Vitamin E and healthy fats.",
    benefits: ["Supports heart health", "Rich in Vitamin E", "Improves skin health"],
    healthValue: ["Antioxidant-rich", "Helps reduce inflammation"] },

  { slug: "pumpkin-seeds", category: "Seeds", name: "Pumpkin Seeds",
    tagline: "Nature's Power Seeds", image: "images/pumpkin.jpg",
    tags: [], price: 220, unit: "200g pack",
    description: "Protein-rich pumpkin seeds loaded with zinc and magnesium.",
    benefits: ["Boosts immunity", "Supports prostate health", "Improves sleep"],
    healthValue: ["High in magnesium & zinc", "Supports muscle recovery"] },

  { slug: "melon-seeds", category: "Seeds", name: "Melon Seeds",
    tagline: "Nature's Power Seeds", image: "images/melon.jpg",
    tags: [], price: 210, unit: "200g pack",
    description: "Delicately flavored melon seeds, a good everyday source of protein and minerals.",
    benefits: ["Good for skin & hair", "Boosts metabolism"],
    healthValue: ["Rich in protein & minerals", "Supports hydration"] },

  { slug: "flax-seeds", category: "Seeds", name: "Flax Seeds",
    tagline: "Nature's Power Seeds", image: "images/flax.jpg",
    tags: [], price: 160, unit: "200g pack",
    description: "Finely sourced flax seeds, an everyday staple for digestion and heart health.",
    benefits: ["Supports weight loss", "Improves digestion", "Heart-friendly"],
    healthValue: ["High in Omega-3 fatty acids", "Rich in fiber"] },

  { slug: "chia-seeds", category: "Seeds", name: "Chia Seeds",
    tagline: "Nature's Power Seeds", image: "images/chia.jpg",
    tags: [], price: 250, unit: "200g pack",
    description: "Natural source of fibre and Omega-3 — soaks well for puddings, drinks and bowls.",
    benefits: ["Boosts energy", "Aids weight management", "Supports hydration"],
    healthValue: ["High in fiber & protein", "Stabilizes blood sugar"] },

  { slug: "sesame-seeds", category: "Seeds", name: "Sesame Seeds",
    tagline: "Nature's Power Seeds", image: "images/sesame.jpg",
    tags: [], price: 170, unit: "200g pack",
    description: "Traditional sesame seeds, rich in calcium and a staple of everyday Sattvic cooking.",
    benefits: ["Strengthens bones", "Improves skin & hair", "Supports hormonal balance"],
    healthValue: ["Rich in calcium & iron", "Natural detox support"] }

];

function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}
