export type CategoryProduct = {
  name: string;
  image: string;
  info?: string;
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
      {
        name: "Navel Oranges",
        image: "/images/products/citrus/navel-oranges.jpg",
        info: "Classic navel oranges with excellent color and export-grade sizing.",
      },
      {
        name: "Valencia Oranges",
        image: "/images/products/citrus/valencia-oranges.jpg",
        info: "Juicy Valencia oranges ideal for fresh consumption and juicing.",
      },
      {
        name: "Baladi Oranges",
        image: "/images/products/citrus/baladi-oranges.jpg",
        info: "Traditional Egyptian baladi oranges with rich, authentic flavor.",
      },
      {
        name: "Sweet Oranges",
        image: "/images/products/citrus/sweet-oranges.jpg",
        info: "Naturally sweet oranges packed for retail and wholesale programs.",
      },
      {
        name: "Shamouti",
        image: "/images/products/citrus/shamouti.jpg",
        info: "Premium Shamouti oranges prized for balance and shelf life.",
      },
      {
        name: "Blood Oranges",
        image: "/images/products/citrus/blood-oranges.jpg",
        info: "Deep-hued blood oranges with distinctive flavor and visual appeal.",
      },
      {
        name: "Mandarins",
        image: "/images/products/citrus/mandarins.jpg",
        info: "Easy-to-peel mandarins selected for sweetness and uniform grade.",
      },
      {
        name: "Murcott Mandarins",
        image: "/images/products/citrus/murcott-mandarins.jpg",
        info: "Murcott mandarins with rich flavor and smooth, thin skin.",
      },
      {
        name: "Easy Peelers",
        image: "/images/products/citrus/easy-peelers.jpg",
        info: "Convenient easy-peel citrus varieties for retail-ready packs.",
      },
      {
        name: "Lemons",
        image: "/images/products/citrus/lemons.jpg",
        info: "Bright Egyptian lemons with high juice content and firm peel.",
      },
      {
        name: "Limes",
        image: "/images/products/citrus/limes.jpg",
        info: "Vibrant limes supplied for fresh market and food-service use.",
      },
      {
        name: "Grapefruit",
        image: "/images/products/citrus/grapefruit.jpg",
        info: "Large, firm grapefruits packed for long-distance export.",
      },
      {
        name: "Other seasonal citrus varieties",
        image: "/images/products/citrus/seasonal-citrus.jpg",
        info: "Additional citrus varieties sourced seasonally to meet buyer needs.",
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
      {
        name: "Semi-Dry Dates",
        image: "/images/products/dates/semi-dry-dates.jpg",
        info: "Semi-dry dates processed for balanced moisture and extended shelf life.",
      },
      {
        name: "Dry Dates",
        image: "/images/products/dates/dry-dates.jpg",
        info: "Fully dried dates ideal for snacking, baking, and industrial use.",
      },
      {
        name: "Medjool Dates",
        image: "/images/products/dates/medjool-dates.jpg",
        info: "Large, premium Medjool dates with soft texture and rich sweetness.",
      },
      {
        name: "Fresh Barhi Dates",
        image: "/images/products/dates/fresh-barhi-dates.jpg",
        info: "Fresh Barhi dates harvested at peak ripeness from our own factories.",
      },
      {
        name: "Fresh Dates",
        image: "/images/products/dates/fresh-dates.jpg",
        info: "Fresh Egyptian dates packed for markets that demand soft, moist fruit.",
      },
      {
        name: "Premium Egyptian date varieties",
        image: "/images/products/dates/premium-varieties.jpg",
        info: "A curated range of premium Egyptian date cultivars for export.",
      },
      {
        name: "Date-based products",
        image: "/images/products/dates/date-products.jpg",
        info: "Value-added date products processed to customer specifications.",
      },
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
      {
        name: "Grapes",
        image: "/images/products/fresh-fruits/grapes.jpg",
        info: "Table grapes selected at peak ripeness for export markets.",
      },
      {
        name: "Pomegranates",
        image: "/images/products/fresh-fruits/pomegranates.jpg",
        info: "Jewel-toned Egyptian pomegranates with exceptional shelf life.",
      },
      {
        name: "Mangoes",
        image: "/images/products/fresh-fruits/mangoes.jpg",
        info: "A seasonal signature — sweet, aromatic Egyptian mangoes.",
      },
      {
        name: "Strawberries",
        image: "/images/products/fresh-fruits/strawberries.jpg",
        info: "Vibrant berries packed for freshness and cold-chain delivery.",
      },
      {
        name: "Peaches",
        image: "/images/products/fresh-fruits/peaches.jpg",
        info: "Juicy stone fruit harvested at optimal maturity.",
      },
      {
        name: "Apricots",
        image: "/images/products/fresh-fruits/apricots.jpg",
        info: "Golden apricots with delicate flavor and firm texture.",
      },
      {
        name: "Melons",
        image: "/images/products/fresh-fruits/melons.jpg",
        info: "Aromatic melons grown in Egypt's fertile valleys.",
      },
      {
        name: "Watermelons",
        image: "/images/products/fresh-fruits/watermelons.jpg",
        info: "Large, crisp watermelons for wholesale and retail programs.",
      },
      {
        name: "Guava",
        image: "/images/products/fresh-fruits/guava.jpg",
        info: "Tropical guava with rich aroma and export-grade quality.",
      },
      {
        name: "Other seasonal Egyptian fruits",
        image: "/images/products/fresh-fruits/seasonal-fruits.jpg",
        info: "Additional varieties sourced seasonally to meet buyer requirements.",
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
        info: "Red and yellow onions graded and packed for long shelf life.",
      },
      {
        name: "Garlic",
        image: "/images/products/fresh-vegetables/garlic.jpg",
        info: "Fresh Egyptian garlic with firm bulbs and strong aroma.",
      },
      {
        name: "Potatoes",
        image: "/images/products/fresh-vegetables/potatoes.jpg",
        info: "Clean, uniform potatoes supplied for retail and food-service.",
      },
      {
        name: "Sweet Potatoes",
        image: "/images/products/fresh-vegetables/sweet-potatoes.jpg",
        info: "Orange-fleshed sweet potatoes packed for freshness and consistency.",
      },
      {
        name: "Tomatoes",
        image: "/images/products/fresh-vegetables/tomatoes.jpg",
        info: "Vine-ripened tomatoes with vibrant color and firm texture.",
      },
      {
        name: "Peppers",
        image: "/images/products/fresh-vegetables/peppers.jpg",
        info: "Colorful peppers in multiple varieties for export programs.",
      },
      {
        name: "Cucumbers",
        image: "/images/products/fresh-vegetables/cucumbers.jpg",
        info: "Crisp cucumbers harvested fresh and packed for cold-chain delivery.",
      },
      {
        name: "Carrots",
        image: "/images/products/fresh-vegetables/carrots.jpg",
        info: "Bright, uniform carrots with excellent crunch and sweetness.",
      },
      {
        name: "Broccoli",
        image: "/images/products/fresh-vegetables/broccoli.jpg",
        info: "Tight-headed broccoli crowns packed for premium retail display.",
      },
      {
        name: "Cauliflower",
        image: "/images/products/fresh-vegetables/cauliflower.jpg",
        info: "White cauliflower with clean curds and consistent sizing.",
      },
      {
        name: "Cabbage",
        image: "/images/products/fresh-vegetables/cabbage.jpg",
        info: "Firm, compact cabbage heads for wholesale and processing.",
      },
      {
        name: "Eggplant",
        image: "/images/products/fresh-vegetables/eggplant.jpg",
        info: "Glossy eggplants with smooth skin and uniform grade.",
      },
      {
        name: "Okra",
        image: "/images/products/fresh-vegetables/okra.jpg",
        info: "Tender okra pods packed quickly to preserve freshness.",
      },
      {
        name: "Seasonal vegetables",
        image: "/images/products/fresh-vegetables/seasonal-vegetables.jpg",
        info: "Additional seasonal vegetables sourced to meet buyer requirements.",
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
      {
        name: "Fresh Herbs",
        image: "/images/products/herbs-spices-dried/fresh-herbs.jpg",
        info: "Aromatic fresh herbs packed for retail and food-service partners.",
      },
      {
        name: "Herbs & Spices",
        image: "/images/products/herbs-spices-dried/herbs-spices.jpg",
        info: "Dried herbs and spices supplied for wholesale and industry use.",
      },
      {
        name: "Dried Vegetables",
        image: "/images/products/herbs-spices-dried/dried-vegetables.jpg",
        info: "Dehydrated vegetables processed for extended shelf life.",
      },
      {
        name: "Sun-Dried Tomatoes",
        image: "/images/products/herbs-spices-dried/sun-dried-tomatoes.jpg",
        info: "Sun-dried tomatoes with concentrated flavor and rich color.",
      },
      {
        name: "Selected agricultural ingredients",
        image: "/images/products/herbs-spices-dried/ingredients.jpg",
        info: "Specialty agricultural ingredients sourced to customer specifications.",
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
      {
        name: "Pulses",
        image: "/images/products/pulses-grains/pulses.jpg",
        info: "High-quality pulses cleaned and graded for export markets.",
      },
      {
        name: "Beans",
        image: "/images/products/pulses-grains/beans.jpg",
        info: "Dried beans supplied in volumes tailored to buyer requirements.",
      },
      {
        name: "Legumes",
        image: "/images/products/pulses-grains/legumes.jpg",
        info: "A broad range of legumes sourced for food-industry partners.",
      },
      {
        name: "Grains",
        image: "/images/products/pulses-grains/grains.jpg",
        info: "Grains and cereals supplied according to customer specifications.",
      },
      {
        name: "Agricultural commodities",
        image: "/images/products/pulses-grains/commodities.jpg",
        info: "Additional agricultural commodities sourced to meet trade requirements.",
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
