export type CategoryProduct = {
  name: string;
  image: string;
};

export type ProductCategory = {
  slug: string;
  num: string;
  title: string;
  shortLabel: string;
  image: string;
  alt: string;
  summary: string;
  description: string;
  products: CategoryProduct[];
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
      { name: "Navel Oranges", image: "/images/products/citrus/navel-oranges.jpg" },
      { name: "Valencia Oranges", image: "/images/products/citrus/valencia-oranges.jpg" },
      { name: "Baladi Oranges", image: "/images/products/citrus/baladi-oranges.jpg" },
      { name: "Sweet Oranges", image: "/images/products/citrus/sweet-oranges.jpg" },
      { name: "Shamouti", image: "/images/products/citrus/shamouti.jpg" },
      { name: "Blood Oranges", image: "/images/products/citrus/blood-oranges.jpg" },
      { name: "Mandarins", image: "/images/products/citrus/mandarins.jpg" },
      { name: "Murcott Mandarins", image: "/images/products/citrus/murcott-mandarins.jpg" },
      { name: "Easy Peelers", image: "/images/products/citrus/easy-peelers.jpg" },
      { name: "Lemons", image: "/images/products/citrus/lemons.jpg" },
      { name: "Limes", image: "/images/products/citrus/limes.jpg" },
      { name: "Grapefruit", image: "/images/products/citrus/grapefruit.jpg" },
      {
        name: "Other seasonal citrus varieties",
        image: "/images/products/citrus/seasonal-citrus.jpg",
      },
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
      { name: "Semi-Dry Dates", image: "/images/products/dates/semi-dry-dates.jpg" },
      { name: "Dry Dates", image: "/images/products/dates/dry-dates.jpg" },
      { name: "Medjool Dates", image: "/images/products/dates/medjool-dates.jpg" },
      { name: "Fresh Barhi Dates", image: "/images/products/dates/fresh-barhi-dates.jpg" },
      { name: "Fresh Dates", image: "/images/products/dates/fresh-dates.jpg" },
      {
        name: "Premium Egyptian date varieties",
        image: "/images/products/dates/premium-varieties.jpg",
      },
      { name: "Date-based products", image: "/images/products/dates/date-products.jpg" },
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
      { name: "Grapes", image: "/images/products/fresh-fruits/grapes.jpg" },
      { name: "Pomegranates", image: "/images/products/fresh-fruits/pomegranates.jpg" },
      { name: "Mangoes", image: "/images/products/fresh-fruits/mangoes.jpg" },
      { name: "Strawberries", image: "/images/products/fresh-fruits/strawberries.jpg" },
      { name: "Peaches", image: "/images/products/fresh-fruits/peaches.jpg" },
      { name: "Apricots", image: "/images/products/fresh-fruits/apricots.jpg" },
      { name: "Melons", image: "/images/products/fresh-fruits/melons.jpg" },
      { name: "Watermelons", image: "/images/products/fresh-fruits/watermelons.jpg" },
      { name: "Guava", image: "/images/products/fresh-fruits/guava.jpg" },
      {
        name: "Other seasonal Egyptian fruits",
        image: "/images/products/fresh-fruits/seasonal-fruits.jpg",
      },
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
      {
        name: "Red & Yellow Onions",
        image: "/images/products/fresh-vegetables/onions.jpg",
      },
      { name: "Garlic", image: "/images/products/fresh-vegetables/garlic.jpg" },
      { name: "Potatoes", image: "/images/products/fresh-vegetables/potatoes.jpg" },
      {
        name: "Sweet Potatoes",
        image: "/images/products/fresh-vegetables/sweet-potatoes.jpg",
      },
      { name: "Tomatoes", image: "/images/products/fresh-vegetables/tomatoes.jpg" },
      { name: "Peppers", image: "/images/products/fresh-vegetables/peppers.jpg" },
      { name: "Cucumbers", image: "/images/products/fresh-vegetables/cucumbers.jpg" },
      { name: "Carrots", image: "/images/products/fresh-vegetables/carrots.jpg" },
      { name: "Broccoli", image: "/images/products/fresh-vegetables/broccoli.jpg" },
      { name: "Cauliflower", image: "/images/products/fresh-vegetables/cauliflower.jpg" },
      { name: "Cabbage", image: "/images/products/fresh-vegetables/cabbage.jpg" },
      { name: "Eggplant", image: "/images/products/fresh-vegetables/eggplant.jpg" },
      { name: "Okra", image: "/images/products/fresh-vegetables/okra.jpg" },
      {
        name: "Seasonal vegetables",
        image: "/images/products/fresh-vegetables/seasonal-vegetables.jpg",
      },
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
      { name: "Fresh Herbs", image: "/images/products/herbs-spices-dried/fresh-herbs.jpg" },
      {
        name: "Herbs & Spices",
        image: "/images/products/herbs-spices-dried/herbs-spices.jpg",
      },
      {
        name: "Dried Vegetables",
        image: "/images/products/herbs-spices-dried/dried-vegetables.jpg",
      },
      {
        name: "Sun-Dried Tomatoes",
        image: "/images/products/herbs-spices-dried/sun-dried-tomatoes.jpg",
      },
      {
        name: "Selected agricultural ingredients",
        image: "/images/products/herbs-spices-dried/ingredients.jpg",
      },
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
      { name: "Pulses", image: "/images/products/pulses-grains/pulses.jpg" },
      { name: "Beans", image: "/images/products/pulses-grains/beans.jpg" },
      { name: "Legumes", image: "/images/products/pulses-grains/legumes.jpg" },
      { name: "Grains", image: "/images/products/pulses-grains/grains.jpg" },
      {
        name: "Agricultural commodities",
        image: "/images/products/pulses-grains/commodities.jpg",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs() {
  return productCategories.map((c) => c.slug);
}
