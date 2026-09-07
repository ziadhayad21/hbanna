export type CategoryProduct = {
  name: string;
  image: string;
  info?: string;
  // Rich modal fields
  description?: string;
  harvestMonths?: number[]; // 1=Jan ... 12=Dec
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
        description:
          "Sourced from the fertile, nutrient-rich soils of Egypt's Nile Delta, our premium Navel Oranges are renowned for their exceptional natural sweetness, vibrant colouration, and consistent sizing. Carefully cultivated without seeds, these oranges offer an outstanding yield and robust shelf life, making them the optimal choice for high-end retail displays and extensive wholesale programs across Europe, the Gulf, and Asia. Strict quality controls ensure every shipment meets rigorous international export standards.",
        harvestMonths: [11, 12, 1, 2, 3, 4],
      },
      {
        name: "Valencia Oranges",
        image: "/images/products/citrus/valencia-oranges.jpg",
        info: "Juicy Valencia oranges ideal for fresh consumption and juicing.",
        description:
          "Recognized as Egypt's premier juicing orange, our Valencia Oranges are prized for their exceptionally high juice content, deep golden-orange hue, and extended late-season availability. Grown across the Nile Delta and Upper Egypt, they deliver a perfectly balanced sweet-tart flavour profile that remains stable during processing. This makes them an indispensable commodity for both fresh-market distribution and the global food-service and beverage manufacturing sectors.",
        harvestMonths: [3, 4, 5, 6],
      },
      {
        name: "Baladi Oranges",
        image: "/images/products/citrus/baladi-oranges.jpg",
        info: "Traditional Egyptian baladi oranges with rich, authentic flavor.",
        description:
          "Representing Egypt's rich agricultural heritage, Baladi Oranges are cultivated using time-honoured farming traditions in the Beheira and Giza regions. They offer a highly complex, intensely aromatic flavour profile that is deeply beloved in regional markets. These oranges cater directly to discerning international buyers and specialty importers seeking authentic, robust citrus with a distinct geographic identity.",
        harvestMonths: [12, 1, 2, 3],
      },
      {
        name: "Sweet Oranges",
        image: "/images/products/citrus/sweet-oranges.jpg",
        info: "Naturally sweet oranges packed for retail and wholesale programs.",
        description:
          "Our Sweet Oranges are meticulously selected to guarantee natural Brix levels consistently above 10°, delivering outstanding sweetness with minimal acidity. Cultivated in the Nile Delta, they are packed under rigorous export protocols to preserve their firm texture and vibrant appearance. These oranges are highly sought after by retail, food-service, and wholesale buyers across multiple international markets for their universal consumer appeal.",
        harvestMonths: [11, 12, 1, 2],
      },
      {
        name: "Shamouti",
        image: "/images/products/citrus/shamouti.jpg",
        info: "Premium Shamouti oranges prized for balance and shelf life.",
        description:
          "A premium niche citrus variety, the Shamouti orange is celebrated globally for its deeply aromatic peel, perfectly balanced sweetness, and exceptional post-harvest shelf life. Grown in Northern Egypt, it features a distinctive oval shape and near-seedless interior. The Shamouti commands premium positioning in specialist retail, boutique groceries, and gourmet food channels requiring superior visual and sensory characteristics.",
        harvestMonths: [1, 2, 3, 4],
      },
      {
        name: "Blood Oranges",
        image: "/images/products/citrus/blood-oranges.jpg",
        info: "Deep-hued blood oranges with distinctive flavor and visual appeal.",
        description:
          "Grown in the cooler micro-climates of Upper Egypt, our Blood Oranges develop intense anthocyanin pigmentation, resulting in their signature ruby-red interior and complex, berry-like flavour notes. These highly visual, premium fruits are expertly sorted and packed to maintain their striking appearance, making them ideal for high-end retail, luxury hospitality, and specialty food buyers seeking differentiated citrus offerings.",
        harvestMonths: [12, 1, 2, 3],
      },
      {
        name: "Mandarins",
        image: "/images/products/citrus/mandarins.jpg",
        info: "Easy-to-peel mandarins selected for sweetness and uniform grade.",
        description:
          "Our Egyptian Mandarins are hand-selected for uniform calibre, vibrant orange colouration, and an effortless easy-peel skin. Sourced from the Nile Delta, they are highly regarded for their juicy, seedless segments and kid-friendly appeal. Packed and cooled swiftly to maintain peak freshness, they are the cornerstone of retail snacking programs and widespread wholesale distribution networks across the Gulf, Europe, and Asia.",
        harvestMonths: [10, 11, 12, 1],
      },
      {
        name: "Murcott Mandarins",
        image: "/images/products/citrus/murcott-mandarins.jpg",
        info: "Murcott mandarins with rich flavor and smooth, thin skin.",
        description:
          "The Murcott Mandarin is a premium, late-season variety renowned for its remarkably thin, deep-orange skin and a rich, intensely sweet flavour profile that surpasses standard mandarins. Cultivated with precision in the Nile Delta, this variety is increasingly demanded by upscale European and Gulf retail buyers looking to extend their high-quality citrus offerings well into the spring season.",
        harvestMonths: [1, 2, 3],
      },
      {
        name: "Easy Peelers",
        image: "/images/products/citrus/easy-peelers.jpg",
        info: "Convenient easy-peel citrus varieties for retail-ready packs.",
        description:
          "Representing a category of consumer-favourite, primarily seedless citrus, our Easy Peelers are designed specifically for on-the-go snacking and maximum retail shelf impact. Grown in the Nile Delta, they are meticulously graded for size and skin integrity. We supply these in various retail-ready formats to minimise store-level handling, providing European and Scandinavian supermarkets with a highly reliable, high-turnover commodity.",
        harvestMonths: [10, 11, 12],
      },
      {
        name: "Lemons",
        image: "/images/products/citrus/lemons.jpg",
        info: "Bright Egyptian lemons with high juice content and firm peel.",
        description:
          "Egyptian Lemons are highly prized on the global market for their exceptional juice yield, robustly firm texture, and bright, unblemished yellow skin. Cultivated in Ismailia and the Nile Delta, they offer a sharp, classic acidity that is essential for culinary applications. They are widely distributed to the food manufacturing, fresh market, and hospitality sectors across Europe and the Gulf, boasting an extended shelf life.",
        harvestMonths: [10, 11, 12, 1, 2, 3, 4, 5, 6],
      },
      {
        name: "Limes",
        image: "/images/products/citrus/limes.jpg",
        info: "Vibrant limes supplied for fresh market and food-service use.",
        description:
          "Our premium Egyptian Limes deliver excellent, piercing acidity, vibrant green colouration, and highly consistent sizing. Carefully harvested to avoid skin damage, they are an indispensable ingredient for the global food-service industry and fresh markets. Their high juice content and aromatic zest make them a preferred choice for food manufacturing customers and beverage producers requiring superior citrus inputs.",
        harvestMonths: [6, 7, 8, 9, 10],
      },
      {
        name: "Grapefruit",
        image: "/images/products/citrus/grapefruit.jpg",
        info: "Large, firm grapefruits packed for long-distance export.",
        description:
          "Grown under optimal climatic conditions in the Nile Delta, our Egyptian Grapefruit delivers a consistently large calibre, exceptionally firm texture, and a beautiful blush or pale interior depending on the variety. They are expertly packed to ensure excellent shelf life and structural integrity, making them perfectly suited to rigorous, long-haul export programs destined for demanding markets in Europe, Russia, and the Gulf.",
        harvestMonths: [11, 12, 1, 2, 3, 4],
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
      "Medjool · Semi-Dry & Dry Dates · Fresh Barhi Dates · Fresh Dates · Premium Egyptian date varieties",
    description:
      "Processed in our own modern dates factories — semi-dry, dry, Medjool, fresh Barhi, and a wide range of premium Egyptian date varieties and date-based products.",
    products: [
      {
        name: "Semi-Dry Dates",
        image: "/images/products/dates/semi-dry-dates.jpg",
        info: "Semi-dry dates processed for balanced moisture and extended shelf life.",
        description:
          "Sourced from the fertile regions of Upper Egypt and the Delta, our Semi-Dry Dates are meticulously processed in our modern, climate-controlled factories. We achieve the ideal moisture balance to deliver an exceptional, chewy texture, deep flavour, and outstanding shelf stability. These dates are a highly versatile commodity, perfectly suited for both premium retail packaging and large-scale wholesale distribution across global markets.",
        harvestMonths: [8, 9, 10],
      },
      {
        name: "Dry Dates",
        image: "/images/products/dates/dry-dates.jpg",
        info: "Fully dried dates ideal for snacking, baking, and industrial use.",
        description:
          "Fully dehydrated and processed to rigorous international food-grade standards, our Dry Dates offer unparalleled shelf life and commercial versatility. They maintain a robust, concentrated sweetness that is highly valued by the food manufacturing industry. These dates are the ideal ingredient for commercial baking, confectionery, energy bars, and as a staple dried fruit for long-distance export and retail snacking programs.",
        harvestMonths: [9, 10, 11],
      },
      {
        name: "Medjool Dates",
        image: "/images/products/dates/medjool-dates.jpg",
        info: "Large, premium Medjool dates with soft texture and rich sweetness.",
        description:
          "Internationally recognized as the 'king of dates,' our Medjool Dates are cultivated in Southern Egypt under strict agronomic protocols. They are hand-sorted to guarantee exceptional jumbo sizing, a soft, melt-in-the-mouth caramel texture, and rich natural sweetness. Positioned as a luxury agricultural product, they are the definitive choice for premium retail, exclusive gifting sectors, and high-end hospitality buyers.",
        harvestMonths: [9, 10],
      },
      {
        name: "Fresh Barhi Dates",
        image: "/images/products/dates/fresh-barhi-dates.jpg",
        info: "Fresh Barhi dates harvested at peak ripeness from our own factories.",
        description:
          "A highly anticipated seasonal delicacy, our Fresh Barhi Dates are harvested precisely at the Khalal (yellow, crunchy) stage or the fully ripe Tamar stage. Processed directly in our own facilities to ensure immediate cold-chain integrity, they offer a unique buttery, crisp sweetness. They are supplied in limited, highly sought-after quantities directly to premium importers in the Gulf and Europe.",
        harvestMonths: [8, 9],
      },
      {
        name: "Fresh Dates",
        image: "/images/products/dates/fresh-dates.jpg",
        info: "Fresh Egyptian dates packed for markets that demand soft, moist fruit.",
        description:
          "Freshly harvested Egyptian dates are packed with meticulous care to cater to markets that specifically demand soft, moist, and highly flavourful fruit. With multiple regional varieties available across the harvest season, we provide tailored sorting and rapid cold-chain logistics to ensure the fruit arrives at international destinations maintaining its delicate texture and peak freshness.",
        harvestMonths: [8, 9, 10, 11],
      },
      {
        name: "Premium Egyptian date varieties",
        image: "/images/products/dates/premium-varieties.jpg",
        info: "A curated range of premium Egyptian date cultivars for export.",
        description:
          "Capitalizing on Egypt's extraordinary diversity of date cultivars, we curate and export a highly specialized selection of premium, heritage varieties. These unique dates offer distinct flavour profiles, textures, and appearances, catering to discerning buyers, boutique brands, and specialty importers who seek to differentiate their product lines beyond the standard mainstream date offerings.",
        harvestMonths: [8, 9, 10, 11],
      },
      {
        name: "Date-based products",
        image: "/images/products/dates/date-products.jpg",
        info: "Value-added date products processed to customer specifications.",
        description:
          "Our comprehensive range of value-added date products—including pure date paste, rich date syrup, date powder, and precision-chopped dates—is processed entirely within our own Egyptian factories. Adhering to the strictest international food-grade standards (BRC, HACCP), these products serve as premium, natural sweetening and texturizing ingredients for the global food manufacturing, baking, and foodservice industries.",
        harvestMonths: [8, 9, 10, 11, 12],
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
        name: "Grapes",
        image: "/images/products/fresh-fruits/grapes.jpg",
        info: "Table grapes selected at peak ripeness for export markets.",
        description:
          "Cultivated in the established vineyards of Beheira and Fayoum, Egypt's table grapes are globally celebrated for their exceptionally large berry size, crisp, snappy texture, and perfectly balanced sweetness. Harvested at peak maturity, they undergo rapid pre-cooling and are packed utilizing advanced SO₂ padding to ensure maximum shelf life and strict compliance with European and Asian phytosanitary import standards.",
        harvestMonths: [6, 7, 8, 9],
      },
      {
        name: "Pomegranates",
        image: "/images/products/fresh-fruits/pomegranates.jpg",
        info: "Jewel-toned Egyptian pomegranates with exceptional shelf life.",
        description:
          "Grown in the sun-drenched regions of Minya and Sohag, our Egyptian Pomegranates are prized for their deep ruby-red arils, exceptionally high juice yield, and remarkable post-harvest durability. Hand-picked and meticulously graded, they represent a premium export commodity, highly valued by international supermarkets and wholesale distributors for their stunning visual appeal and robust transit performance.",
        harvestMonths: [9, 10, 11, 12],
      },
      {
        name: "Mangoes",
        image: "/images/products/fresh-fruits/mangoes.jpg",
        info: "A seasonal signature — sweet, aromatic Egyptian mangoes.",
        description:
          "A true hallmark of the Egyptian summer, our Mangoes are cultivated along the fertile Nile corridor. They are fiercely sought after for their fibre-free, buttery flesh, intense tropical aroma, and extraordinary natural sweetness. Harvested at precise maturity indices, they are expertly handled to prevent bruising, ensuring they arrive at premium European and Gulf markets in flawless, ready-to-eat condition.",
        harvestMonths: [6, 7, 8, 9],
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
        harvestMonths: [4, 5, 6, 7],
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
        name: "Other seasonal Egyptian fruits",
        image: "/images/products/fresh-fruits/seasonal-fruits.jpg",
        info: "Additional varieties sourced seasonally to meet buyer requirements.",
        description:
          "Complementing our core fruit portfolio, HBanna expertly sources a broad spectrum of specialty seasonal Egyptian fruits, including fresh figs, prickly pears, and loquats. Leveraging our extensive grower network, we tailor our procurement to meet specific, bespoke buyer requirements, providing flexible volume, precise scheduling, and stringent quality control for niche and exotic market segments.",
        harvestMonths: [4, 5, 6, 7, 8, 9, 10],
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
        name: "Red & Yellow Onions",
        image: "/images/products/fresh-vegetables/onions.jpg",
        info: "Red and yellow onions graded and packed for long shelf life.",
        description:
          "As one of the world's leading exporters, Egypt produces onions of unparalleled quality. Grown in the nutrient-dense soils of the Nile Delta and Upper Egypt, our Red and Yellow Onions are properly cured, machine-graded to precise specifications, and packed to ensure maximum shelf life and absolute minimal spoilage. They are a staple, high-volume commodity relied upon by major importers, wholesalers, and food processors globally.",
        harvestMonths: [2, 3, 4, 5, 6],
      },
      {
        name: "Garlic",
        image: "/images/products/fresh-vegetables/garlic.jpg",
        info: "Fresh Egyptian garlic with firm bulbs and strong aroma.",
        description:
          "Renowned globally for its exceptionally pungent aroma, high essential oil content, and firm, bright white bulbs, Egyptian Garlic is a highly sought-after commodity. Cultivated in Upper Egypt, it possesses outstanding keeping quality. We export it in both fresh (green) and properly cured dried formats, meeting the stringent standards of supermarkets, wholesale distributors, and the spice processing industry across Europe and Asia.",
        harvestMonths: [3, 4, 5, 6],
      },
      {
        name: "Potatoes",
        image: "/images/products/fresh-vegetables/potatoes.jpg",
        info: "Clean, uniform potatoes supplied for retail and food-service.",
        description:
          "Leveraging Egypt's two annual potato crops, we provide international buyers with a highly reliable, extended year-round supply window. Our potatoes are cultivated in pest-free zones, meticulously machine-washed, and optically graded for absolute uniformity. They are supplied in exact specifications tailored for premium retail displays, the demanding food-service sector, and large-scale industrial crisping and processing markets.",
        harvestMonths: [2, 3, 4, 5, 10, 11],
      },
      {
        name: "Sweet Potatoes",
        image: "/images/products/fresh-vegetables/sweet-potatoes.jpg",
        info: "Orange-fleshed sweet potatoes packed for freshness and consistency.",
        description:
          "Egyptian Sweet Potatoes are distinguished by their deep-orange, nutrient-rich flesh, high natural sweetness, and exceptionally consistent sizing. Grown in Upper Egypt and Ismailia, they are meticulously cured and washed. They meet the surging demand in European health-food channels and mainstream retail, providing a highly profitable, reliable root crop available in both conventional and certified organic programs.",
        harvestMonths: [9, 10, 11, 12, 1, 2],
      },
      {
        name: "Tomatoes",
        image: "/images/products/fresh-vegetables/tomatoes.jpg",
        info: "Vine-ripened tomatoes with vibrant color and firm texture.",
        description:
          "Cultivated in the rich agricultural hubs of Beheira and Ismailia, Egyptian Tomatoes are selected for their vibrant red colour, consistent sizing, and highly firm flesh, making them highly resilient to long-distance export transport. Available across a broad seasonal window, we supply multiple varieties—including beefsteak, cherry, and plum—tailored specifically for demanding retail programs, wholesale distribution, and industrial food processing.",
        harvestMonths: [11, 12, 1, 2, 3, 4, 5],
      },
      {
        name: "Peppers",
        image: "/images/products/fresh-vegetables/peppers.jpg",
        info: "Colorful peppers in multiple varieties for export programs.",
        description:
          "Grown utilizing advanced protective covers and strategic open-field programs, our Egyptian Peppers deliver brilliant, uniform colouration, thick, crisp walls, and standardized sizing. This ensures a highly reliable, premium year-round supply. They are expertly packed to maintain their firmness and visual appeal, serving as a cornerstone product for major European and Gulf retail supermarket chains.",
        harvestMonths: [11, 12, 1, 2, 3, 4, 5],
      },
      {
        name: "Cucumbers",
        image: "/images/products/fresh-vegetables/cucumbers.jpg",
        info: "Crisp cucumbers harvested fresh and packed for cold-chain delivery.",
        description:
          "Thriving in Egypt's mild winter climate, our Cucumbers offer a remarkably crisp texture, vibrant dark-green skin, and perfectly uniform cylindrical sizing. Because they are highly sensitive to temperature fluctuations, we employ a strict, rapid cold-chain protocol from field harvesting directly to the pack house, ensuring absolute freshness and crispness upon arrival at international destinations.",
        harvestMonths: [11, 12, 1, 2, 3, 4],
      },
      {
        name: "Carrots",
        image: "/images/products/fresh-vegetables/carrots.jpg",
        info: "Bright, uniform carrots with excellent crunch and sweetness.",
        description:
          "Grown in the sandy, loamy soils of the Nile Delta, our Egyptian Carrots are mechanically harvested, thoroughly washed, and hydro-cooled. They are distinguished by their vibrant orange colour, excellent structural crunch, and notably high natural sugar content. Graded for perfect uniformity, they are supplied in diverse retail and wholesale packaging formats to major European supermarkets and Gulf distributors.",
        harvestMonths: [11, 12, 1, 2, 3, 4],
      },
      {
        name: "Broccoli",
        image: "/images/products/fresh-vegetables/broccoli.jpg",
        info: "Tight-headed broccoli crowns packed for premium retail display.",
        description:
          "Egypt's cool-season climate is ideally suited for producing premium broccoli. Our crowns are characterized by their dense, tight heads, deep blue-green colouration, and excellent structural firmness. They are rapidly ice-packed or hydro-cooled immediately post-harvest to halt respiration, making them an ideal, high-quality offering for premium retail programs and specialty wholesale markets across Europe and the Gulf.",
        harvestMonths: [11, 12, 1, 2, 3],
      },
      {
        name: "Cauliflower",
        image: "/images/products/fresh-vegetables/cauliflower.jpg",
        info: "White cauliflower with clean curds and consistent sizing.",
        description:
          "Harvested during the optimal cool season in the Delta Region, our Egyptian Cauliflower features bright, exceptionally compact white curds and consistent, standardized calibre. The leaves are carefully trimmed to protect the head during transit. It is a highly reliable winter vegetable commodity, packed to stringent specifications for both large-scale retail and wholesale export programs.",
        harvestMonths: [11, 12, 1, 2, 3],
      },
      {
        name: "Cabbage",
        image: "/images/products/fresh-vegetables/cabbage.jpg",
        info: "Firm, compact cabbage heads for wholesale and processing.",
        description:
          "Cultivated in the nutrient-rich Nile Delta, our Egyptian Cabbage yields dense, heavy, and exceptionally firm heads that boast an outstanding post-harvest shelf life. Available in robust green, red, and savoy varieties, they are graded for size uniformity. This makes them an incredibly stable and highly economical commodity perfectly suited for long-haul wholesale distribution, the food-service industry, and commercial processing.",
        harvestMonths: [11, 12, 1, 2, 3, 4],
      },
      {
        name: "Eggplant",
        image: "/images/products/fresh-vegetables/eggplant.jpg",
        info: "Glossy eggplants with smooth skin and uniform grade.",
        description:
          "Egyptian Eggplant is carefully hand-harvested at optimal maturity to guarantee a deep-purple, glossy colouration, firm, seedless flesh, and perfectly smooth skin. We cultivate multiple commercial varieties, including classic globe and long purple types, grading them meticulously to meet the specific culinary and visual requirements of the wholesale, retail, and international food-service sectors.",
        harvestMonths: [3, 4, 5, 6, 10, 11, 12],
      },
      {
        name: "Okra",
        image: "/images/products/fresh-vegetables/okra.jpg",
        info: "Tender okra pods packed quickly to preserve freshness.",
        description:
          "Recognized as a premium specialty vegetable, Egyptian Okra is harvested highly immature to ensure maximum tenderness and zero woodiness. Because of its high respiration rate, it undergoes immediate, rapid cold-chain packing to preserve its vibrant green colour and delicate texture. It is a highly sought-after product by Gulf importers, European specialty grocers, and international food-service buyers.",
        harvestMonths: [5, 6, 7, 8, 9, 10],
      },
      {
        name: "Seasonal vegetables",
        image: "/images/products/fresh-vegetables/seasonal-vegetables.jpg",
        info: "Additional seasonal vegetables sourced to meet buyer requirements.",
        description:
          "Beyond our core year-round vegetable range, HBanna actively sources and supplies a wide array of specialized seasonal vegetables, including zucchini, green beans, and leeks. We work closely with our agricultural partners to meet precise buyer specifications, managing the entire procurement, grading, and logistics process to ensure consistent quality and reliable delivery for highly specific market demands.",
        harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
      "Fresh Herbs · Herbs & Spices · Dried Vegetables · Sun-Dried Tomatoes · Selected agricultural ingredients",
    description:
      "Fresh herbs, spices, dried vegetables, sun-dried tomatoes, and selected agricultural ingredients for wholesale and food-industry partners.",
    products: [
      {
        name: "Fresh Herbs",
        image: "/images/products/herbs-spices-dried/fresh-herbs.jpg",
        info: "Aromatic fresh herbs packed for retail and food-service partners.",
        description:
          "Grown in Egypt's ideal, temperate conditions, our fresh herb program encompasses a wide range of highly aromatic varieties including basil, mint, and dill. They are harvested in the cool of the morning and immediately subjected to rigorous cold-chain packing protocols to prevent wilting. We supply these premium herbs to retail supermarkets, high-end hospitality, and food-service partners worldwide, ensuring maximum essential oil retention and visual freshness.",
        harvestMonths: [10, 11, 12, 1, 2, 3, 4, 5],
      },
      {
        name: "Herbs & Spices",
        image: "/images/products/herbs-spices-dried/herbs-spices.jpg",
        info: "Dried herbs and spices supplied for wholesale and industry use.",
        description:
          "Building on millennia of agricultural history, Egypt remains a premier global source for high-quality spices and dried herbs. Our comprehensive range—including cumin, coriander, and chamomile—is thoroughly cleaned, sifted, and processed to strict international food-grade standards. We provide reliable, bulk supply solutions tailored for global spice traders, wholesale distributors, and the commercial food manufacturing industry.",
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
        harvestMonths: [6, 7, 8, 9],
      },
      {
        name: "Selected agricultural ingredients",
        image: "/images/products/herbs-spices-dried/ingredients.jpg",
        info: "Specialty agricultural ingredients sourced to customer specifications.",
        description:
          "HBanna acts as a trusted procurement partner for specialized agricultural ingredients, sourcing niche botanicals such as hibiscus, carob, and moringa. We expertly navigate the Egyptian agricultural landscape to supply food manufacturers, nutraceutical companies, and ingredient buyers worldwide, ensuring all products meet exacting quality, purity, and certification specifications.",
        harvestMonths: [4, 5, 6, 7, 8, 9, 10],
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
        name: "Beans",
        image: "/images/products/pulses-grains/beans.jpg",
        info: "Dried beans supplied in volumes tailored to buyer requirements.",
        description:
          "As a major global producer, Egypt offers an exceptional supply of dried beans, particularly Faba (Foul) beans. Our comprehensive range is meticulously processed to remove impurities and graded to ensure uniform cooking times. Supplied in highly flexible bulk packaging formats, they cater seamlessly to the demands of international retail packing operations, food manufacturers, and large-scale wholesale commodity buyers.",
        harvestMonths: [3, 4, 5],
      },
      {
        name: "Legumes",
        image: "/images/products/pulses-grains/legumes.jpg",
        info: "A broad range of legumes sourced for food-industry partners.",
        description:
          "HBanna's legume portfolio, featuring high-demand items like lupins and sesame, provides the global food industry with a highly reliable, quality-assured source of essential plant-based proteins. We manage strict quality control throughout the supply chain and offer custom sourcing capabilities to meet specific variety, origin, or processing requirements for specialized food manufacturing applications.",
        harvestMonths: [4, 5, 6, 7],
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
