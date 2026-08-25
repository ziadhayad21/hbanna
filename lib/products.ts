export type ProductCategory = {
  slug: string;
  num: string;
  title: string;
  shortLabel: string;
  image: string;
  alt: string;
  summary: string;
  description: string;
  products: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "citrus",
    num: "01",
    title: "Citrus",
    shortLabel: "Citrus",
    image: "/images/citrus.jpg",
    alt: "Citrus fruits",
    summary:
      "Navel, Valencia & Baladi Oranges · Blood Oranges · Mandarins · Murcott · Easy Peelers · Lemons · Limes · Grapefruit",
    description:
      "Premium Egyptian citrus grown across our groves and packed for global markets — from classic navel and Valencia oranges to easy peelers, lemons, limes, and grapefruit.",
    products: [
      "Navel Oranges",
      "Valencia Oranges",
      "Baladi Oranges",
      "Sweet Oranges",
      "Shamouti",
      "Blood Oranges",
      "Mandarins",
      "Murcott Mandarins",
      "Easy Peelers",
      "Lemons",
      "Limes",
      "Grapefruit",
      "Other seasonal citrus varieties",
    ],
  },
  {
    slug: "dates",
    num: "02",
    title: "Dates & Date Products",
    shortLabel: "Dates & Date Products",
    image: "/images/dates.jpg",
    alt: "Egyptian dates",
    summary:
      "Medjool · Semi-Dry & Dry Dates · Fresh Barhi Dates · Fresh Dates · Premium Egyptian date varieties",
    description:
      "Processed in our own modern dates factories — semi-dry, dry, Medjool, fresh Barhi, and a wide range of premium Egyptian date varieties and date-based products.",
    products: [
      "Semi-Dry Dates",
      "Dry Dates",
      "Medjool Dates",
      "Fresh Barhi Dates",
      "Fresh Dates",
      "Premium Egyptian date varieties",
      "Date-based products",
    ],
  },
  {
    slug: "fresh-fruits",
    num: "03",
    title: "Fresh Fruits",
    shortLabel: "Fresh Fruits",
    image: "/images/grapes.jpg",
    alt: "Fresh fruits",
    summary:
      "Grapes · Pomegranates · Mangoes · Strawberries · Peaches · Apricots · Melons · Watermelons · Guava",
    description:
      "Seasonal Egyptian fruits selected at peak ripeness — table grapes, pomegranates, mangoes, berries, stone fruit, melons, and more for international buyers.",
    products: [
      "Grapes",
      "Pomegranates",
      "Mangoes",
      "Strawberries",
      "Peaches",
      "Apricots",
      "Melons",
      "Watermelons",
      "Guava",
      "Other seasonal Egyptian fruits",
    ],
  },
  {
    slug: "fresh-vegetables",
    num: "04",
    title: "Fresh Vegetables",
    shortLabel: "Fresh Vegetables",
    image: "/images/vegetables.jpg",
    alt: "Fresh vegetables",
    summary:
      "Onions · Garlic · Potatoes · Sweet Potatoes · Tomatoes · Peppers · Cucumbers · Carrots · Broccoli · Cabbage",
    description:
      "A broad vegetable program packed for freshness — onions, garlic, roots, tomatoes, peppers, crucifers, and a wide range of seasonal Egyptian vegetables.",
    products: [
      "Red & Yellow Onions",
      "Garlic",
      "Potatoes",
      "Sweet Potatoes",
      "Tomatoes",
      "Peppers",
      "Cucumbers",
      "Carrots",
      "Broccoli",
      "Cauliflower",
      "Cabbage",
      "Eggplant",
      "Okra",
      "Seasonal vegetables",
    ],
  },
  {
    slug: "herbs-spices-dried",
    num: "05",
    title: "Herbs, Spices & Dried Products",
    shortLabel: "Herbs, Spices & Dried",
    image: "/images/herbs.jpg",
    alt: "Herbs and spices",
    summary:
      "Fresh Herbs · Herbs & Spices · Dried Vegetables · Sun-Dried Tomatoes · Selected agricultural ingredients",
    description:
      "Fresh herbs, spices, dried vegetables, sun-dried tomatoes, and selected agricultural ingredients for wholesale and food-industry partners.",
    products: [
      "Fresh Herbs",
      "Herbs & Spices",
      "Dried Vegetables",
      "Sun-Dried Tomatoes",
      "Selected agricultural ingredients",
    ],
  },
  {
    slug: "pulses-grains",
    num: "06",
    title: "Pulses & Grains",
    shortLabel: "Pulses & Grains",
    image: "/images/grains.jpg",
    alt: "Pulses and grains",
    summary:
      "Beans · Legumes · Grains · Agricultural commodities — sourced and supplied to customer requirements",
    description:
      "A growing range of high-quality pulses, beans, legumes, grains, and agricultural commodities — sourced and supplied according to our customers' requirements.",
    products: [
      "Pulses",
      "Beans",
      "Legumes",
      "Grains",
      "Agricultural commodities",
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs() {
  return productCategories.map((c) => c.slug);
}
