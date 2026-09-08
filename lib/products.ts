export type CategoryProduct = {
  name: string;
  image: string;
  info?: string;
  // Rich modal fields
  description?: string;
  harvestMonths?: number[]; // 1=Jan ... 12=Dec
  // Commercial enrichment fields
  sugarBrix?: string;       // e.g. "10° Brix min." or "10.5–12° Brix"
  varieties?: string[];     // named cultivars, e.g. ["Eureka", "Adalia"]
  sizes?: string;           // commercial size codes or diameter range, e.g. "48, 56, 64"
  packing?: string;         // packaging spec, e.g. "15 kg carton"
  productClass?: string;    // e.g. "First Class"
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

export const CAT_KEY: Record<string, "citrus" | "dates" | "freshFruits" | "freshVegetables" | "herbsSpices" | "pulsesGrains"> = {
  citrus: "citrus",
  dates: "dates",
  "fresh-fruits": "freshFruits",
  "fresh-vegetables": "freshVegetables",
  "herbs-spices": "herbsSpices",
  "pulses-grains": "pulsesGrains",
};

export const productCategories: ProductCategory[] = [
  {
    slug: "citrus",
    num: "01",
    title: "Citrus",
    shortLabel: "Citrus",
    image: "/images/citruss.jpg",
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
        description: "The navel oranges are the earliest maturing of orange varieties, producing the seedless fruit of larger size with deep orange easily peeled rinds and sweet & pleasant flavor.",
        harvestMonths: [11, 12, 1, 2],
        varieties: ["Navel"],
        sugarBrix: "12.5 to 14.5 (Acid level: 0.0)",
        sizes: "36 - 40 - 42 - 48 - 56 - 64 - 72 - 80 - 88 - 100 - 113",
        productClass: "First Class",
        packing: "Telescopic cartons 15 KG NW - 16 KG GW, Open Top cartons 15 KG NW, Cartons for Arab country 8 KG"
      },
      {
        name: "Late Lane Navel Orange",
        image: "/images/products/citrus/Late Lane Navel Orange.jpg",
        info: "Late Lane Navel oranges with deep orange skin and sweet flavor.",
        description: "Late Lane Navel oranges are the earliest maturing of orange varieties, producing the seedless fruit of larger size with deep orange easily peeled rinds and sweet & pleasant flavor.",
        harvestMonths: [12, 1, 2],
        varieties: ["Late Lane Navel"],
        sugarBrix: "12.5 to 14.5",
        sizes: "36 - 40 - 42 - 48 - 56 - 64 - 72 - 80 - 88 - 100 - 113",
        productClass: "First Class",
        packing: "Telescopic cartons 15 KG NW - 16 KG GW, Open Top cartons 15 KG NW, Cartons for Arab country 8 KG"
      },
      {
        name: "Valencia Oranges",
        image: "/images/products/citrus/valencia-oranges.jpg",
        info: "Juicy Valencia oranges ideal for fresh consumption and juicing.",
        description: "Valencia oranges are very sweet and a distinctive bright colored juice that other citrus fruits don't have.",
        harvestMonths: [1, 2, 3, 4, 5],
        varieties: ["Valencia"],
        sugarBrix: "11.3 to 12.5",
        sizes: "48 - 56 - 64 - 72 - 80 - 88 - 100 - 113",
        productClass: "First Class",
        packing: "Telescopic cartons 15 KG NW - 16 KG GW, Cartons for Arab country 8 KG"
      },
      {
        name: "Baladi Oranges",
        image: "/images/products/citrus/baladi-oranges.jpg",
        info: "Traditional Egyptian baladi oranges with rich, authentic flavor.",
        description: "Egyptian Baladi Oranges are the most popular variety, similar to Valencia oranges which is used for juice and the taste is the same as Valencia, but the brix level is higher.",
        harvestMonths: [12, 1],
        varieties: ["Baladi"],
        sugarBrix: "11.6 to 12.7",
        sizes: "56 - 64 - 72 - 80 - 88 - 100 - 113 - 125 - 136",
        productClass: "First Class",
        packing: "Telescopic cartons 15 KG NW - 16 KG GW, Cartons for Arab country 8 KG"
      },
      {
        name: "Sukkari Orange",
        image: "/images/products/citrus/sweet-oranges.jpg",
        info: "Naturally sweet oranges packed for retail and wholesale programs.",
        description: "Sukkari oranges have a bright orange skin that is relatively thin and may vary in color. The flesh is juicy, sweet, with a low acidity level that makes it sweeter than other citrus fruits. They are a good source of vitamin C and dietary fiber as well.",
        harvestMonths: [12, 1],
        varieties: ["Sukkari"],
        sugarBrix: "11.6 to 12.6",
        sizes: "64 - 72 - 80 - 88 - 100 - 113",
        productClass: "First Class",
        packing: "Telescopic cartons 15 KG NW - 16 KG GW, Cartons for Arab country 8 KG"
      },
      {
        name: "Mandarins",
        image: "/images/products/citrus/mandarins.jpg",
        info: "Easy-to-peel mandarins selected for sweetness and uniform grade.",
        description: "Fremont are small to medium-sized with a thin, easy-to-peel skin that is bright orange in color. They have a sweet and juicy flesh that is low in acid and has a rich and distinctive flavor.",
        harvestMonths: [12, 1, 2],
        varieties: ["Murcott", "Clementine", "Fremont", "Mirav", "Minneola"],
        sizes: "36 - 42 - 48 - 54 - 60",
        productClass: "First Class",
        packing: "Cartons 8 KG, or as per customer's desire"
      },
      {
        name: "Lemons",
        image: "/images/products/citrus/lemons.jpg",
        info: "Bright Egyptian lemons with high juice content and firm peel.",
        description: "Lemon are high in vitamin C, and various beneficial plant compounds. A single glass does not seem to provide a lot of nutrients, lemon water is a health beverage that can boost a person's vitamin C intake.",
        harvestMonths: [10, 11, 12, 1, 2],
        varieties: ["Eureka", "Adlaia", "Verna"],
        sizes: "72 - 80 - 88 - 100 - 113 - 125 - 138",
        productClass: "First Class",
        packing: "Telescopic cartons 15 KG NW - 16 KG GW"
      },
      {
        name: "Grapefruit",
        image: "/images/products/citrus/grapefruit.jpg",
        info: "Large, firm grapefruits packed for long-distance export.",
        description: "Grapefruit is pink and red varieties, colors that refer to the flesh of the fruit. It is an excellent source of vitamin A, and C, potassium, and has significant antioxidants. It is an important source of a healthy diet, in addition to lowering blood pressure and playing a role in the formation of collagen, the main support system of the skin.",
        harvestMonths: [11, 12, 1],
        varieties: ["Star Ruby", "Dark Red"],
        sizes: "30 - 36 - 40 - 42 - 48 - 56 - 64",
        packing: "15 Kg - Net Weight - Open Top Carton, 15 Kg plastic box"
      },
      {
        name: "Other seasonal citrus varieties",
        image: "/images/products/citrus/seasonal-citrus.jpg",
        info: "Additional citrus varieties sourced seasonally to meet buyer needs.",
        description:
          "Beyond our core citrus portfolio, HBanna leverages its deep agricultural network to source and supply a wide array of specialized seasonal citrus varieties. Whether buyers require specific hybrids, tangelos, or localized cultivars, we manage the procurement, grading, and export logistics to deliver bespoke citrus programs tailored to precise international specifications.",
        harvestMonths: [10, 11, 12, 1, 2, 3, 4, 5],
      },
    ],
  },
  {
    slug: "dates",
    num: "02",
    title: "Dates & Date Products",
    shortLabel: "Dates & Date Products",
    image: "/images/Date.jpeg",
    alt: "Egyptian dates",
    summary:
      "Medjool · Semi-Dry Dates · King Baraka Dates · Fresh Barhi Dates · Fresh Dates · Premium Egyptian date varieties",
    description:
      "Processed in our own modern dates factories — semi-dry, King Baraka, Medjool, fresh Barhi, and a wide range of premium Egyptian date varieties and date-based products.",
    products: [
      {
        name: "Semi-Dry Dates",
        image: "/images/products/dates/semi-dry-dates.jpg",
        info: "Semi-dry dates processed for balanced moisture and extended shelf life.",
        description:
          "Sourced from the fertile regions of Upper Egypt and the Delta, our Semi-Dry Dates are meticulously processed in our modern, climate-controlled factories. We achieve the ideal moisture balance to deliver an exceptional, chewy texture, deep flavour, and outstanding shelf stability. These dates are a highly versatile commodity, perfectly suited for both premium retail packaging and large-scale wholesale distribution across global markets.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Siwi", "Saidi"],
        sizes: "Medium to Large",
        packing: "1 kg, 5 kg, 10 kg cartons",
      },
      {
        name: "King Baraka Dates",
        image: "/images/products/dates/dry-dates.jpg",
        info: "Fully dried King Baraka dates — ideal for snacking, baking, and industrial use.",
        description:
          "King Baraka is a premium dry date variety, naturally low in moisture and known for its excellent keeping quality and long shelf life. It features a pleasantly chewy texture and a rich, distinctive flavor with balanced natural sweetness. Naturally less sweet than many other date varieties, King Baraka offers a satisfying taste without being overly sugary or heavy. Its plump yet naturally dry texture makes it less sticky than softer date varieties, making it an excellent choice for everyday snacking and a balanced diet. Naturally rich in dietary fiber and essential nutrients, King Baraka provides wholesome natural energy in every bite.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["King Baraka"],
        sizes: "Premium Grades",
        packing: "400 gm- 800 gm, 3 kg and 5 KG",
      },
      {
        name: "Medjool Dates",
        image: "/images/products/dates/medjool-dates.jpg",
        info: "Large, premium Medjool dates with soft texture and rich sweetness.",
        description:
          "Internationally recognized as the 'king of dates,' our Medjool Dates are cultivated in Southern Egypt under strict agronomic protocols. They are hand-sorted to guarantee exceptional sizing, a soft, melt-in-the-mouth caramel texture, and rich natural sweetness. Positioned as a luxury agricultural product, they are the definitive choice for premium retail, exclusive gifting sectors, and high-end hospitality buyers.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Medjool"],
        sizes: "Super Jumbo · Jumbo · Large · Medium · Small · Baby Small · Fancy",
        packing: "500 gm / 1 kg / 5 kg",
      },
      {
        name: "Fresh Barhi Dates",
        image: "/images/products/dates/date.jpg",
        info: "Fresh Barhi dates harvested at peak ripeness from our own factories.",
        description:
          "A highly anticipated seasonal delicacy, our Fresh Barhi Dates are harvested precisely at the Khalal (yellow, crunchy) stage or the fully ripe Tamar stage. Processed directly in our own facilities to ensure immediate cold-chain integrity, they offer a unique buttery, crisp sweetness. They are supplied in limited, highly sought-after quantities directly to premium importers in the Gulf and Europe.",
        harvestMonths: [8, 9, 10],
        varieties: ["Barhi"],
        sizes: "On branches",
        packing: "5 kg box",
      },
      {
        name: "Fresh Dates",
        image: "/images/products/dates/image copy.png",
        info: "Fresh Egyptian dates packed for markets that demand soft, moist fruit.",
        description:
          "Freshly harvested Egyptian dates are packed with meticulous care to cater to markets that specifically demand soft, moist, and highly flavourful fruit. With multiple regional varieties available across the harvest season, we provide tailored sorting and rapid cold-chain logistics to ensure the fruit arrives at international destinations maintaining its delicate texture and peak freshness.",
        harvestMonths: [8, 9, 10, 11],
        varieties: ["Zaghloul", "Hayany", "Samany", "Amhat"],
        packing: "2 kg, 4.5 kg, 5 kg cartons",
      },
      {
        name: "Premium Egyptian date varieties",
        image: "/images/products/dates/premium-varieties.jpg",
        info: "A curated range of premium Egyptian date cultivars for export.",
        description:
          "Capitalizing on Egypt's extraordinary diversity of date cultivars, we curate and export a highly specialized selection of premium, heritage varieties. These unique dates offer distinct flavour profiles, textures, and appearances, catering to discerning buyers, boutique brands, and specialty importers who seek to differentiate their product lines beyond the standard mainstream date offerings.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Bartamoda", "Sakkoty", "Shamia"],
      },
      {
        name: "Date-based products",
        image: "/images/products/dates/date-products.jpg",
        info: "Value-added date products processed to customer specifications.",
        description:
          "Our comprehensive range of value-added date products—including pure date paste, rich date syrup, date powder, and precision-chopped dates—is processed entirely within our own Egyptian factories. Adhering to the strictest international food-grade standards (BRC, HACCP), these products serve as premium, natural sweetening and texturizing ingredients for the global food manufacturing, baking, and foodservice industries.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        packing: "Bulk 10 kg / 20 kg blocks (paste), Drums (syrup)",
      },
      {
        name: "Dates Protein Bar",
        image: "/images/products/dates/dates-protein-bar.jpg",
        info: "Premium date-based protein bar produced in our own Egyptian factories.",
        description:
          "Manufactured in our modern, certified Egyptian production facilities, our Dates Protein Bar is a premium, clean-label energy and protein snack built on a foundation of high-quality Egyptian dates. Combining the natural sweetness and nutritional density of our own date varieties with carefully selected complementary ingredients, it delivers a wholesome, convenient format that meets the growing international demand for natural, plant-forward functional snacks. Available for private-label and co-manufacturing programs, it is supplied in bulk and retail-ready formats to health-food distributors, supermarket chains, and the food-service sector across Europe, the Gulf, and Asia.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        packing: "Retail flow-wraps, wholesale display boxes",
      },
    ],
  },
  {
    slug: "fresh-fruits",
    num: "03",
    title: "Fresh Fruits",
    shortLabel: "Fresh Fruits",
    image: "/images/Fruit.jpeg",
    alt: "Fresh fruits",
    summary:
      "Grapes · Pomegranates · Mangoes · Strawberries · Peaches · Apricots · Melons · Watermelons · Guava",
    description:
      "Seasonal Egyptian fruits selected at peak ripeness — table grapes, pomegranates, mangoes, berries, stone fruit, melons, and more for international buyers.",
    products: [
      {
        name: "Superior Grapes",
        image: "/images/products/fresh-fruits/Superior Grapes.jpg",
        info: "Superior seedless table grapes selected at peak ripeness.",
        description:
          "Cultivated in the established vineyards of Beheira and Fayoum, our Superior seedless grapes are celebrated for their crisp, snappy texture and perfectly balanced sweetness. Harvested at peak maturity, they undergo rapid pre-cooling and are packed utilizing advanced SO₂ padding to ensure maximum shelf life and strict compliance with European and Asian phytosanitary import standards.",
        harvestMonths: [5, 6, 7, 8],
        varieties: ["Superior Seedless"],
        sugarBrix: "14+ Brix",
        sizes: "16 - 22 mm",
        packing: "Plastic bag Carton: 5 Kg N.W Carton contains 10 plastic bags X 500 Gm (3400 Cartons / 20 Pallets - Each Pallet 170 Cartons)",
      },
      {
        name: "Crimson Grapes",
        image: "/images/products/fresh-fruits/Crimson Grapes.jpg",
        info: "Crimson seedless table grapes selected at peak ripeness.",
        description:
          "Crimson seedless table grapes are known for their striking red color, firm crisp berries, and excellent shelf life. Harvested at peak maturity, they undergo rapid pre-cooling and are packed utilizing advanced SO₂ padding to ensure strict compliance with European and Asian phytosanitary import standards.",
        harvestMonths: [7, 8, 9, 10],
        varieties: ["Crimson Seedless"],
        sizes: "14 - 22 mm",
        packing: "5 Kg Carton contains 8-9 plastic bags X 500 Gm, 5 Kg Carton contains 10 punnet X 500 Gm",
      },
      {
        name: "Red Globe Grapes",
        image: "/images/products/fresh-fruits/Red Globe Grapes.jpg",
        info: "Large Red Globe seeded table grapes.",
        description:
          "Red Globe grapes are famously large, seeded berries with a sweet flavor and firm, crunchy texture. They boast excellent storage capabilities and are perfectly suited for long-distance export to European and Asian markets.",
        harvestMonths: [7, 8, 9, 10],
        varieties: ["Red Globe"],
        sugarBrix: "18+ Brix",
        sizes: "22 - 30 mm",
        packing: "5 Kg Carton contains 8-9 plastic bags X 500 Gm, 5 Kg Carton contains 10 punnet X 500 Gm",
      },
      {
        name: "Flame Grapes",
        image: "/images/products/fresh-fruits/Flame Grapes.jpg",
        info: "Sweet and crisp Flame seedless table grapes.",
        description:
          "Flame seedless grapes offer a vibrant red color and an intensely sweet, tart flavor profile. They are an early-season favorite for fresh markets across Europe and the Gulf, undergoing rapid pre-cooling post-harvest.",
        harvestMonths: [5, 6],
        varieties: ["Flame Seedless"],
        sizes: "15 - 24 mm",
        packing: "5 Kg Carton contains 8-9 plastic bags X 500 Gm, 5 Kg Carton contains 10 punnet X 500 Gm",
      },
      {
        name: "Autumn Royal Grapes",
        image: "/images/products/fresh-fruits/Autumn Royal Grapes.jpg",
        info: "Dark, sweet Autumn Royal seedless table grapes.",
        description:
          "Autumn Royal grapes are prized for their large, dark purple-to-black berries and exceptional sweetness. They offer a firm crunch and serve as a premium late-season export variety.",
        harvestMonths: [8, 9, 10],
        varieties: ["Autumn Royal"],
        sugarBrix: "20+ Brix",
        sizes: "22 - 24 mm",
        packing: "5 Kg N.W Carton contains 10 plastic bags X 500 Gm (3400 Cartons / 20 Pallets - Each Pallet 170 Cartons), 5 Kg N.W Carton contains 10 punnets X 500 Gm (3600 Cartons / 20 Pallets - Each Pallet 180 Cartons)",
      },
      {
        name: "Thompson Grapes",
        image: "/images/products/fresh-fruits/Thompson Grapes.jpg",
        info: "Classic Thompson seedless table grapes.",
        description:
          "Thompson seedless grapes are a globally recognized light-green variety known for their elongated shape, sweet flavor, and tender skin. They are carefully handled and packed with SO₂ padding to maintain premium quality during transit.",
        harvestMonths: [8, 9, 10],
        varieties: ["Thompson Seedless"],
        sugarBrix: "20+ Brix",
        sizes: "22 - 24 mm",
        packing: "5 Kg N.W Carton contains 10 plastic bags X 500 Gm (3400 Cartons / 20 Pallets - Each Pallet 170 Cartons), 5 Kg N.W Carton contains 10 punnets X 500 Gm (3600 Cartons / 20 Pallets - Each Pallet 180 Cartons)",
      },
      {
        name: "Early Sweet Grapes",
        image: "/images/products/fresh-fruits/Early Sweet Grapes.jpg",
        info: "Early Sweet seedless table grapes with high natural sugars.",
        description:
          "The Early Sweet grape is a premium white seedless variety harvested early in the Egyptian season. Characterized by its creamy color, excellent crunch, and high natural sugar levels, it is highly demanded by international buyers.",
        harvestMonths: [5, 6, 7],
        varieties: ["Early Sweet"],
        sugarBrix: "16+ Brix",
        sizes: "18 - 22 mm",
        packing: "Plastic bag Carton: 5 Kg N.W Carton contains 10 plastic bags X 500 Gm (3400 Cartons / 20 Pallets), Punnet Carton: 5 Kg N.W Carton contains 10 punnets X 500 Gm (3600 Cartons / 20 Pallets)",
      },
      {
        name: "Pomegranates",
        image: "/images/products/fresh-fruits/pomegranates.jpg",
        info: "Jewel-toned Egyptian pomegranates with exceptional shelf life.",
        description:
          "Grown in the sun-drenched regions of Minya and Sohag, our Egyptian Pomegranates are prized for their deep ruby-red arils, exceptionally high juice yield, and remarkable post-harvest durability. Hand-picked and meticulously graded, they represent a premium export commodity, highly valued by international supermarkets and wholesale distributors for their stunning visual appeal and robust transit performance.",
        harvestMonths: [9, 10, 11, 12],
        varieties: ["Wonderful", "Manfaluti", "Baladi", "Early 116"],
        sugarBrix: "approx. 15° Brix min.",
        sizes: "6, 7, 8, 9, 10, 11, 12, 13, 14",
        packing: "4.50 Kg N.W carton (label & tray), 4.50 Kg N.W carton (label & tray & P.bag), 4.50 Kg Plastic Tray (label & tray), 5 Kg Plastic Tray (label & tray)",
      },
      {
        name: "Mangoes",
        image: "/images/products/fresh-fruits/mangoes.jpg",
        info: "A seasonal signature — sweet, aromatic Egyptian mangoes.",
        description:
          "A true hallmark of the Egyptian summer, our Mangoes are cultivated along the fertile Nile corridor. They are fiercely sought after for their fibre-free, buttery flesh, intense tropical aroma, and extraordinary natural sweetness. Harvested at precise maturity indices, they are expertly handled to prevent bruising, ensuring they arrive at premium European and Gulf markets in flawless, ready-to-eat condition.",
        harvestMonths: [7, 8, 9, 10, 11],
      },
      {
        name: "Strawberries",
        image: "/images/products/fresh-fruits/strawberries.jpg",
        info: "Vibrant berries packed for freshness and cold-chain delivery.",
        description:
          "Benefiting immensely from Egypt's mild winter climate, our Strawberries are harvested precisely at their peak colour and maximum Brix levels. Because of their delicate nature, they are subjected to immediate forced-air cooling and packed into retail-ready formats. Our unbroken cold-chain logistics guarantee that these vibrant, sweet berries reach European and Gulf shelves maintaining absolute freshness and structural integrity.",
        harvestMonths: [12, 1, 2, 3, 4],
      },
      {
        name: "Peaches",
        image: "/images/products/fresh-fruits/peaches.jpg",
        info: "Juicy stone fruit harvested at optimal maturity.",
        description:
          "Cultivated in Egypt's temperate growing zones, our Peaches deliver incredibly juicy flesh, a vibrant blush skin colour, and a deeply characteristic stone-fruit aroma. They are expertly harvested at the optimal firmness to withstand long-distance transit while still allowing for perfect ripening upon arrival. They are a highly reliable and visually appealing product for early-season retail programs.",
        harvestMonths: [5, 6, 7, 8],
        varieties: ["Florida", "Desert", "Sugary"],
        sizes: "12, 15, 18 Pieces Per Carton",
        packing: "3 KG & 5 KG Standard carton",
      },
      {
        name: "Apricots",
        image: "/images/products/fresh-fruits/apricots.jpg",
        info: "Golden apricots with delicate flavor and firm texture.",
        description:
          "Harvested in the early spring, Egyptian Apricots are distinguished by their beautiful golden-orange skin, highly fragrant aroma, and a pleasantly firm texture that ensures excellent durability during export. Graded with precision to ensure uniform sizing, they are an excellent, high-turnover stone fruit offering for European and Gulf wholesale markets, available for both fresh consumption and premium dried applications.",
        harvestMonths: [4, 5, 6],
      },
      {
        name: "Melons",
        image: "/images/products/fresh-fruits/melons.jpg",
        info: "Aromatic melons grown in Egypt's fertile valleys.",
        description:
          "Capitalizing on Egypt's warm, sun-drenched climate, our Melons develop exceptional, concentrated sweetness and a highly aromatic profile. Ranging from netted Galia and Cantaloupe to smooth Honeydew varieties, they are rigorously field-inspected and graded for consistent size and blemish-free skin. Our strict quality management ensures reliable, premium supply for international retail and food-service buyers.",
        harvestMonths: [4, 5, 6, 7, 8],
      },
      {
        name: "Watermelons",
        image: "/images/products/fresh-fruits/watermelons.jpg",
        info: "Large, crisp watermelons for wholesale and retail programs.",
        description:
          "A cornerstone of the summer export season, Egyptian Watermelons are renowned across international wholesale programs for their impressive size, deep-red, crisp flesh, and excellent hydration qualities. Grown in the Nile Delta and Southern Egypt, they offer a consistent, high-volume supply window. They are expertly handled in bulk or carton formats to ensure they reach global markets without degradation.",
        harvestMonths: [4, 5, 6, 7, 8],
      },
      {
        name: "Guava",
        image: "/images/products/fresh-fruits/guava.jpg",
        info: "Tropical guava with rich aroma and export-grade quality.",
        description:
          "Harvested twice yearly from the lush regions of Ismailia and Beheira, Egyptian Guava is experiencing surging international demand. It is celebrated for its intensely fragrant tropical aroma, high Vitamin C content, and exceptional flavor profile. Carefully packed to protect its delicate skin, it serves as a highly profitable exotic line for fresh markets, as well as a premium input for juicing and food manufacturing.",
        harvestMonths: [7, 8, 9, 11, 12, 1],
      },
      {
        name: "Prickly Pear",
        image: "/images/products/fresh-fruits/prickly-pear.jpg",
        info: "Sweet Egyptian cactus pear harvested at peak ripeness for export.",
        description:
          "Known internationally as the Cactus Pear, Egyptian Prickly Pear is a prized seasonal delicacy harvested from the fertile agro-zones of the Nile Delta and Upper Egypt. Celebrated for its vibrant red-to-golden flesh, high natural sugar content, and unique flavour profile, it is experiencing rapidly growing demand from European specialty retailers, Gulf importers, and premium foodservice operators. Our fruit is hand-harvested at optimal maturity, carefully de-spined and graded for size uniformity, and packed under strict cold-chain protocols to preserve its delicate texture and vivid appearance during export. Available in green and red-skinned varieties depending on the season, it represents a high-value, differentiated exotic offering for buyers seeking to expand their fresh fruit portfolio with distinctive Egyptian produce.",
        harvestMonths: [7, 8, 9, 10],
        varieties: ["Green", "Red"],
        sizes: "12, 15, 18 Pieces Per Carton",
        packing: "3 KG & 5 KG Standard carton",
      },
    ],
  },
  {
    slug: "fresh-vegetables",
    num: "04",
    title: "Fresh Vegetables",
    shortLabel: "Fresh Vegetables",
    image: "/images/veg.jpeg",
    alt: "Fresh vegetables",
    summary:
      "Onions · Garlic · Potatoes · Sweet Potatoes · Tomatoes · Peppers · Cucumbers · Carrots · Broccoli · Cabbage",
    description:
      "A broad vegetable program packed for freshness — onions, garlic, roots, tomatoes, peppers, crucifers, and a wide range of seasonal Egyptian vegetables.",
    products: [
      {
        name: "Onion",
        image: "/images/products/fresh-vegetables/onionss.jpg",
        info: "Yellow and Italian Red onions graded and packed for long shelf life.",
        description:
          "As one of the world's leading exporters, Egypt produces onions of unparalleled quality. Grown in the nutrient-dense soils of the Nile Delta and Upper Egypt, our Red and Yellow Onions are properly cured, machine-graded to precise specifications, and packed to ensure maximum shelf life and absolute minimal spoilage. They are a staple, high-volume commodity relied upon by major importers, wholesalers, and food processors globally.",
        harvestMonths: [4, 5, 6, 7, 8, 9],
        varieties: ["Yellow", "Italian Red Onion"],
        sizes: "40/60, 50/70, 70/90, 80/120 mm",
        productClass: "First class",
        packing: "Mesh bag 10 KG, Mesh bag 25 KG, Wooden box 500 KG, Jumbo bag 1250 KG, Or as client request",
      },
      {
        name: "Garlic",
        image: "/images/products/fresh-vegetables/garlicc.jpg",
        info: "Fresh Egyptian garlic with firm bulbs and strong aroma.",
        description:
          "Renowned globally for its exceptionally pungent aroma, high essential oil content, and firm, bright white bulbs, Egyptian Garlic is a highly sought-after commodity. Cultivated in Upper Egypt, it possesses outstanding keeping quality. We export it in both fresh (green) and properly cured dried formats, meeting the stringent standards of supermarkets, wholesale distributors, and the spice processing industry across Europe and Asia.",
        harvestMonths: [3, 4, 5, 6],
        varieties: ["White Garlic", "Balady Garlic", "Red Garlic", "Chinese Garlic"],
        sizes: "40–50 mm, 50–60 mm, 60+ mm",
      },
      {
        name: "Potatoes",
        image: "/images/products/fresh-vegetables/potatoess.jpg",
        info: "Clean, uniform potatoes supplied for retail and food-service.",
        description:
          "Leveraging Egypt's two annual potato crops, we provide international buyers with a highly reliable, extended year-round supply window. Our potatoes are cultivated in pest-free zones, meticulously machine-washed, and optically graded for absolute uniformity. They are supplied in exact specifications tailored for premium retail displays, the demanding food-service sector, and large-scale industrial crisping and processing markets.",
        harvestMonths: [2, 3, 4, 5],
        varieties: ["Spunta", "Kara", "Diamante", "Hermes", "Rosetta", "Nicola"],
        sizes: "35-38/45, 45-55, 55/75, 75+ (50-100g, 100-150g, 150-250g, 200g and up)",
        productClass: "First class",
        packing: "Mesh bag or plastic box (5kg, 10kg, 15kg), Jumbo Bags or New PP Bags Net (1.250 or 2.5kg), Jumbo Bags or New PP Bags (25 or 1,000pcs), Jumbo Bags or New PP Bags (1 or 50pcs) the pallets, Or open client's request",
      },
      {
        name: "Sweet Potatoes",
        image: "/images/products/fresh-vegetables/sweet-potatoes.jpg",
        info: "Orange-fleshed sweet potatoes packed for freshness and consistency.",
        description:
          "Egyptian Sweet Potatoes are distinguished by their deep-orange, nutrient-rich flesh, high natural sweetness, and exceptionally consistent sizing. Firm, crisp, oval or elongated tubers free from foreign smells. Grown in Upper Egypt and Ismailia, they are meticulously cured and washed. They meet the surging demand in European health-food channels and mainstream retail, providing a highly profitable, reliable root crop available in both conventional and certified organic programs.",
        harvestMonths: [8, 9, 10, 11, 12, 1, 2, 3],
        varieties: ["Egyptian sweet Potatoes (Baladi)"],
        sizes: "300 gm - 600 gm",
        productClass: "First class",
        packing: "CARTON 5KG, CARTON 6KG, mesh BAGS 10 KG, Or according to client request",
      },
      {
        name: "Tomato",
        image: "/images/products/fresh-vegetables/tomatoes.jpg",
        info: "Vine-ripened tomatoes with vibrant color and firm texture.",
        description:
          "Cultivated in the rich agricultural hubs of Beheira and Ismailia, Egyptian Tomatoes are selected for their vibrant red colour, consistent sizing, and highly firm flesh, making them highly resilient to long-distance export transport. Available across a broad seasonal window, we supply multiple varieties tailored specifically for demanding retail programs, wholesale distribution, and industrial food processing.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Cherry Tomatoes", "Cherry Tomatoes on the Vine", "Sun gold Tomatoes", "Baby Plum Tomatoes", "Bar 84", "Vine Ripened Tomatoes", "Plum tomatoes", "Beef Tomatoes", "Silica Tomatoes", "Midi Plum Tomatoes", "R196"],
        sizes: "Length 3 - 8 CM",
        productClass: "First class",
        packing: "Plastic box: 3.5 KG, 7 KG, Carton: 2 KG, 3.5 KG, 5 KG, Or according to client request",
      },
      {
        name: "Cherry Tomato",
        image: "/images/products/fresh-vegetables/Cherry Tomato.jpg",
        info: "Small, sweet cherry tomatoes packed for retail and snacking.",
        description:
          "A specialized offering of small, high-sugar tomatoes grown in Egypt's mild climate. Harvested precisely for vibrant red color and maximum sweetness. Perfect for retail snacking packs and catering.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Organic", "Common", "Bar 84", "Cherry Tomatoes"],
        sizes: "3 - 6 CM",
        productClass: "First class",
        packing: "Plastic box: 2 KG / 2.5 KG, Carton: 2 KG / 3.5 KG, Or as per customer's desire",
      },
      {
        name: "Capsicum (Bell Peppers)",
        image: "/images/products/fresh-vegetables/Capsicum .jpg",
        info: "Colorful peppers in multiple varieties for export programs.",
        description:
          "Grown utilizing advanced protective covers and strategic open-field programs, our Egyptian Peppers deliver brilliant, uniform colouration (Green, Yellow, Orange, Red), thick, crisp walls, and standardized sizing. This ensures a highly reliable, premium year-round supply. They are expertly packed to maintain their firmness and visual appeal, serving as a cornerstone product for major European and Gulf retail supermarket chains.",
        harvestMonths: [1, 2, 3, 4],
        varieties: ["Pencil Type", "Fat Type"],
        sizes: "Small, Medium, Large (Length: 5 - 10 CM)",
        productClass: "First class",
        packing: "Carton 5 KG, Bulk pack 8 KG, Carton 2.50 KG, Or as per customer's desire",
      },
      {
        name: "Egyptian Hot Chili",
        image: "/images/products/fresh-vegetables/Egyptian Hot Chili.jpg",
        info: "Vibrant hot chili peppers for fresh markets and processing.",
        description:
          "Our Egyptian hot chilies are selected for their distinct heat profile, vibrant color, and firm texture. Cultivated for consistent pungency, they are a staple in global spice manufacturing, food service, and fresh retail markets.",
        harvestMonths: [11, 12, 1, 2, 3, 4, 5, 6],
        varieties: ["Green Chili (F60)", "Red Chili"],
        sizes: "Length 8 - 13 CM",
        productClass: "First class",
        packing: "N.W Carton 2.50 KG, Or as per customer's desire",
      },
      {
        name: "Egyptian Cucumber",
        image: "/images/products/fresh-vegetables/cucumbers.jpg",
        info: "Crisp dark green cucumbers packed for cold-chain delivery.",
        description:
          "Thriving in Egypt's mild winter climate, our Cucumbers offer a remarkably crisp texture, vibrant dark-green skin, and perfectly uniform cylindrical sizing. Because they are highly sensitive to temperature fluctuations, we employ a strict, rapid cold-chain protocol from field harvesting directly to the pack house, ensuring absolute freshness and crispness upon arrival at international destinations.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Dark Green"],
        sizes: "Length: 9 - 10 CM",
        productClass: "First class",
        packing: "Carton - Bulk pack 5 KG, Or as per customer's desire",
      },
      {
        name: "Carrots",
        image: "/images/products/fresh-vegetables/carrots.jpg",
        info: "Bright, uniform carrots with excellent crunch and sweetness.",
        description:
          "Grown in the sandy, loamy soils of the Nile Delta, our Egyptian Carrots are mechanically harvested, thoroughly washed, and hydro-cooled. They are distinguished by their vibrant orange colour, excellent structural crunch, and notably high natural sugar content. Graded for perfect uniformity, they are supplied in diverse retail and wholesale packaging formats to major European supermarkets and Gulf distributors.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Orange"],
        sizes: "Length: 15 - 20 CM",
        productClass: "First class",
        packing: "Carton - Bulk pack 8 KG, Or as per customer's desire",
      },
      {
        name: "Egyptian Fresh Broccoli",
        image: "/images/products/fresh-vegetables/broccoli.jpg",
        info: "Tight-headed broccoli crowns packed for premium retail display.",
        description:
          "Egypt's cool-season climate is ideally suited for producing premium broccoli. Our crowns are characterized by their dense, tight heads, deep blue-green colouration, and excellent structural firmness. They are rapidly ice-packed or hydro-cooled immediately post-harvest to halt respiration, making them an ideal, high-quality offering for premium retail programs and specialty wholesale markets across Europe and the Gulf.",
        harvestMonths: [12, 1, 2, 3],
        varieties: ["Egyptian Broccoli"],
        sizes: "1 Piece = 1 KG - 1.75 KG",
        productClass: "First class",
        packing: "Foam Box with ice 4 KG, Or as per customer's desire",
      },
      {
        name: "Cauliflower",
        image: "/images/products/fresh-vegetables/cauliflower.jpg",
        info: "White cauliflower with clean curds and consistent sizing.",
        description:
          "Harvested during the optimal cool season in the Delta Region, our Egyptian Cauliflower features bright, exceptionally compact natural white curds and consistent, standardized calibre. The leaves are carefully trimmed to protect the head during transit. It is a highly reliable winter vegetable commodity, packed to stringent specifications for both large-scale retail and wholesale export programs.",
        harvestMonths: [11, 12, 1, 2],
        varieties: ["Fresh Sultani", "Addam", "ElNazeer", "Ashiri"],
        sizes: "100 - 400 Gm",
        productClass: "First class",
        packing: "Carton 7 KG, Or as event request",
      },
      {
        name: "Egyptian Cabbage",
        image: "/images/products/fresh-vegetables/cabbage.jpg",
        info: "Firm, compact cabbage heads for wholesale and processing.",
        description:
          "Cultivated in the nutrient-rich Nile Delta, our Egyptian Cabbage yields dense, heavy, and exceptionally firm heads that boast an outstanding post-harvest shelf life. Available in robust green, red, and savoy varieties, they are graded for size uniformity. This makes them an incredibly stable and highly economical commodity perfectly suited for long-haul wholesale distribution, the food-service industry, and commercial processing.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Green", "Red"],
        sizes: "1 Piece = 1 - 1.25 KG",
        productClass: "First class",
        packing: "Carton 10 KG, Or as per customer's desire",
      },
      {
        name: "Egyptian Eggplant (Aubergine)",
        image: "/images/products/fresh-vegetables/eggplant.jpg",
        info: "Glossy eggplants with smooth skin and uniform grade.",
        description:
          "Egyptian Eggplant is carefully hand-harvested at optimal maturity to guarantee a deep-purple/red, glossy colouration, firm, seedless flesh, and perfectly smooth skin. We cultivate multiple commercial varieties, including classic globe and long purple types, grading them meticulously to meet the specific culinary and visual requirements of the wholesale, retail, and international food-service sectors.",
        harvestMonths: [11, 12, 1, 2, 3, 4, 5, 6],
        varieties: ["Black", "White", "Long", "Arouse"],
        sizes: "10 - 15 CM",
        productClass: "First class",
        packing: "Wooden / Plastic Boxes 5 KG, Or as per customer's desire",
      },
      {
        name: "Egyptian Okra",
        image: "/images/products/fresh-vegetables/okra.jpg",
        info: "Tender okra pods packed quickly to preserve freshness.",
        description:
          "Recognized as a premium specialty vegetable, Egyptian Okra is harvested highly immature to ensure maximum tenderness and zero woodiness. Because of its high respiration rate, it undergoes immediate, rapid cold-chain packing to preserve its vibrant green colour and delicate texture. It is a highly sought-after product by Gulf importers, European specialty grocers, and international food-service buyers.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        varieties: ["Indian", "Baladi"],
        sizes: "3 - 9 CM",
        productClass: "First class",
        packing: "Carton - Bulk pack 3 KG, Or upon client's request",
      },
      {
        name: "Egyptian Spring Onions",
        image: "/images/products/fresh-vegetables/Egyptian Spring Onions.jpg",
        info: "Fresh spring onions packed in bunches for catering and salad.",
        description:
          "Our fresh Egyptian Spring Onions deliver a crisp bite and aromatic flavor. Grown under optimal conditions, they are meticulously cleaned and bunched according to buyer requirements, ideal for the catering industry, supermarkets, and culinary applications.",
        harvestMonths: [10, 11, 12, 1, 2, 3, 4],
        varieties: ["Giza 6", "Foton"],
        sizes: "Bulb: 8-30mm, Length: 27-38cm (2Gr/2.5Gr/3Gr/4Gr/5Gr/6Gr)",
        productClass: "First class",
        packing: "Carton / Plastic Basket. Bunches: 14 bunch (cooking) or 20 bunch (salad)",
      },
      {
        name: "Fresh Lettuce \"Iceberg\"",
        image: "/images/products/fresh-vegetables/Fresh Lettuce .jpg",
        info: "Crisp Egyptian Iceberg lettuce heads for fresh markets.",
        description:
          "Cultivated during the mild Egyptian winter, our Iceberg Lettuce develops tight, compact heads with exceptional crunch and hydration. We utilize careful harvesting and immediate cooling to maintain its structural integrity all the way to global retail shelves.",
        harvestMonths: [12, 1, 2, 3, 4],
        varieties: ["Egyptian Iceberg Lettuce"],
        sizes: "600 Gm - 1 KG",
        productClass: "First class",
        packing: "Carton 7 KG (8 to 12 Pieces per carton), Or upon client's request",
      },
    ],
  },
  {
    slug: "herbs-spices-dried",
    num: "05",
    title: "Herbs, Spices & Dried Products",
    shortLabel: "Herbs, Spices & Dried",
    image: "/images/herpp.jpg",
    alt: "Herbs and spices",
    summary:
      "Herbs & Spices · Dried Vegetables · Sun-Dried Tomatoes",
    description:
      "Spices, dried vegetables, and sun-dried tomatoes — sourced and processed to international food-grade standards for wholesale and food-industry partners.",
    products: [
      {
        name: "Herbs & Spices",
        image: "/images/products/herbs-spices-dried/herbs-spices.jpg",
        info: "Dried herbs and spices supplied for wholesale and industry use.",
        description:
          "Building on millennia of agricultural history, Egypt remains a premier global source for high-quality spices and dried herbs. Our comprehensive range is thoroughly cleaned, sifted, and processed to strict international food-grade standards. We provide reliable, bulk supply solutions tailored for global spice traders, wholesale distributors, and the commercial food manufacturing industry.",
        harvestMonths: [3, 4, 5, 6, 7, 8],
      },
      {
        name: "Dried Vegetables",
        image: "/images/products/herbs-spices-dried/dried-vegetables.jpg",
        info: "Dehydrated vegetables processed for extended shelf life.",
        description:
          "Utilizing advanced commercial dehydration technology, our dried vegetable range—featuring onion and garlic flakes—delivers an incredibly consistent colour, texture, and nutritional profile. Processed in certified facilities, these highly shelf-stable ingredients offer immense logistical efficiency and are a critical, high-volume input for soup manufacturers, ready-meal producers, and the broader global food processing industry.",
        harvestMonths: [4, 5, 6, 7, 8, 9, 10, 11],
      },
      {
        name: "Sun-Dried Tomatoes",
        image: "/images/products/herbs-spices-dried/sun-dried-tomatoes.jpg",
        info: "Sun-dried tomatoes with concentrated flavor and rich color.",
        description:
          "Produced exclusively from premium Egyptian plum tomatoes and naturally dried under the intense, arid summer sun, our sun-dried tomatoes deliver an extraordinary concentration of umami flavour and a deep, rich red colour. Graded for perfection, they are a high-value, premium ingredient supplied in bulk or retail formats to food manufacturers, specialty distributors, and Mediterranean-focused retail channels globally.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
    ],
  },
  {
    slug: "pulses-grains",
    num: "06",
    title: "Pulses & Grains",
    shortLabel: "Pulses & Grains",
    image: "/images/Puls.jpeg",
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
        description:
          "Our extensive pulses program encompasses major globally traded varieties, including lentils and chickpeas. Sourced both domestically and internationally, they are mechanically cleaned, colour-sorted, and graded to rigorous international food-grade standards. We offer highly consistent, high-volume supply and competitive pricing models, making us a preferred partner for global commodity traders and large-scale food manufacturers.",
        harvestMonths: [3, 4, 5, 6],
      },
      {
        name: "White Beans",
        image: "/images/products/pulses-grains/white-beans.jpg",
        info: "Premium white beans cleaned and graded for export markets.",
        description:
          "A premium staple in global markets, our White Beans are meticulously processed to remove impurities and graded for exceptional uniformity and cooking consistency. Supplied in highly flexible bulk packaging formats, they cater seamlessly to the demands of international retail packing operations, food manufacturers, and large-scale wholesale commodity buyers seeking a reliable, quality-assured supply.",
        harvestMonths: [3, 4, 5],
        varieties: ["White Beans"],
      },
      {
        name: "Grains",
        image: "/images/products/pulses-grains/grains.jpg",
        info: "Grains and cereals supplied according to customer specifications.",
        description:
          "Our comprehensive grains program supplies major traded cereal varieties—from premium Egyptian-origin wheat to globally sourced commodity grains—strictly adhering to customer-defined quality and moisture specifications. We provide end-to-end supply chain management, offering reliable, high-tonnage deliveries essential for international milling operations, food manufacturing facilities, and global commodity trading houses.",
        harvestMonths: [5, 6, 7, 8],
      },
      {
        name: "Agricultural commodities",
        image: "/images/products/pulses-grains/commodities.jpg",
        info: "Additional agricultural commodities sourced to meet trade requirements.",
        description:
          "Our extensive commodity sourcing capabilities extend far beyond our standard listed range. Operating as a comprehensive agricultural trade partner, we work closely with international buyers to fulfill specific, high-volume commodity requirements. By leveraging our deep market knowledge and global network, we manage complex procurement, quality assurance, and export logistics to deliver reliable agricultural trade solutions worldwide.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
