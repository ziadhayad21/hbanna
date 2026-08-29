export type CategoryProduct = {
  slug: string;
  name: string;
  image: string;
  info?: string;
  varieties?: string;
  origin?: string;
  season?: string;
  sizes?: string;
  packaging?: string;
  shelfLife?: string;
  certifications?: string;
  exportMarkets?: string;
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
    summary: "Navel, Valencia & Baladi Oranges · Lemons · Limes · Grapefruit",
    description: "Premium Egyptian citrus grown across our groves and packed for global markets.",
    products: [
      {
        slug: "navel-oranges",
        name: "Navel Oranges",
        image: "/images/products/citrus/navel-oranges.jpg",
        info: "Classic navel oranges with excellent color and export-grade sizing.",
        varieties: "Washington Navel",
        origin: "Egypt",
        season: "November – March",
        sizes: "44, 48, 56, 64, 72, 80, 88, 100",
        packaging: "15kg Telescopic Cartons, 8kg Open Top",
        shelfLife: "30-45 Days at 4°C",
        certifications: "GlobalG.A.P., ISO 22000, BRCGS",
        exportMarkets: "Europe, Middle East, Asia",
      },
      {
        slug: "valencia-oranges",
        name: "Valencia Oranges",
        image: "/images/products/citrus/valencia-oranges.jpg",
        info: "Juicy Valencia oranges ideal for fresh consumption and juicing.",
        varieties: "Valencia Late",
        origin: "Egypt",
        season: "January – June",
        sizes: "48, 56, 64, 72, 80, 88, 100, 113, 125",
        packaging: "15kg Telescopic Cartons, 8kg Open Top",
        shelfLife: "45-60 Days at 4°C",
        certifications: "GlobalG.A.P., ISO 22000, BRCGS",
        exportMarkets: "Europe, Russia, Middle East",
      }
    ],
  },
  {
    slug: "dates",
    num: "02",
    title: "Dates & Date Products",
    shortLabel: "Dates",
    image: "/images/dates.jpg",
    alt: "Egyptian dates",
    summary: "Medjool · Semi-Dry & Dry Dates · Fresh Barhi Dates",
    description: "Processed in our own modern dates factories — semi-dry, dry, Medjool, fresh Barhi.",
    products: [
      {
        slug: "medjool-dates",
        name: "Medjool Dates",
        image: "/images/products/dates/medjool-dates.jpg",
        info: "Large, premium Medjool dates with soft texture and rich sweetness.",
        varieties: "Medjool",
        origin: "Egypt",
        season: "August – December",
        sizes: "Jumbo, Large, Medium",
        packaging: "1kg, 5kg Boxes",
        shelfLife: "12 Months at 0-4°C",
        certifications: "GlobalG.A.P., ISO 22000, Halal",
        exportMarkets: "Europe, North America, Middle East",
      },
      {
        slug: "semi-dry-dates",
        name: "Semi-Dry Dates",
        image: "/images/products/dates/semi-dry-dates.jpg",
        info: "Semi-dry dates processed for balanced moisture and extended shelf life.",
        varieties: "Siwi, Saidy",
        origin: "Egypt",
        season: "September – February",
        sizes: "Standard",
        packaging: "5kg, 10kg Cartons",
        shelfLife: "12 Months at Room Temp",
        certifications: "ISO 22000, Halal",
        exportMarkets: "North Africa, Asia, Europe",
      }
    ],
  },
  {
    slug: "fresh-fruits",
    num: "03",
    title: "Fresh Fruits",
    shortLabel: "Fresh Fruits",
    image: "/images/grapes.jpg",
    alt: "Fresh fruits",
    summary: "Grapes · Pomegranates · Mangoes · Strawberries",
    description: "Seasonal Egyptian fruits selected at peak ripeness.",
    products: [
      {
        slug: "grapes",
        name: "Grapes",
        image: "/images/products/fresh-fruits/grapes.jpg",
        info: "Table grapes selected at peak ripeness for export markets.",
        varieties: "Early Sweet, Prime, Crimson, Red Globe",
        origin: "Egypt",
        season: "May – September",
        sizes: "18mm+",
        packaging: "4.5kg Cartons, 5kg Punnets",
        shelfLife: "30-40 Days at 0°C",
        certifications: "GlobalG.A.P., BRCGS, SMETA",
        exportMarkets: "Europe, UK, Middle East",
      },
      {
        slug: "pomegranates",
        name: "Pomegranates",
        image: "/images/products/fresh-fruits/pomegranates.jpg",
        info: "Jewel-toned Egyptian pomegranates with exceptional shelf life.",
        varieties: "Wonderful, Baladi",
        origin: "Egypt",
        season: "August – December",
        sizes: "6, 7, 8, 9, 10, 12",
        packaging: "4.5kg, 5kg Open Top Cartons",
        shelfLife: "30-60 Days at 5°C",
        certifications: "GlobalG.A.P., ISO 22000",
        exportMarkets: "Europe, Russia, Asia",
      }
    ],
  },
  {
    slug: "vegetables",
    num: "04",
    title: "Fresh Vegetables",
    shortLabel: "Vegetables",
    image: "/images/mango.jpg",
    alt: "Fresh vegetables",
    summary: "Onions · Garlic · Potatoes · Sweet Potatoes · Peppers",
    description: "Export-grade Egyptian vegetables harvested for quality and stability.",
    products: [
      {
        slug: "peppers",
        name: "Peppers",
        image: "/images/products/vegetables/peppers.jpg",
        info: "Colorful peppers in multiple varieties for export programs.",
        varieties: "Bell Peppers (Red, Yellow, Green)",
        origin: "Egypt",
        season: "November – May",
        sizes: "Medium, Large",
        packaging: "5kg Cartons",
        shelfLife: "14-21 Days at 7-10°C",
        certifications: "GlobalG.A.P.",
        exportMarkets: "Europe, Middle East",
      }
    ],
  }
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs() {
  return productCategories.map((c) => c.slug);
}

export function getProductBySlug(categorySlug: string, productSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.products.find((p) => p.slug === productSlug);
}
