import type { Locale } from "./config";

export type Messages = {
  nav: {
    about: string;
    products: string;
    process: string;
    facilities: string;
    quality: string;
    contact: string;
    logoAlt: string;
    toggleMenu: string;
    themeToLight: string;
    themeToDark: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    lead: string;
    ctaProducts: string;
    ctaPartner: string;
    scroll: string;
  };
  marquee: {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
  };
  metrics: {
    years: string;
    groves: string;
    factories: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body1: string;
    body2: string;
    pill1: string;
    pill2: string;
    pill3: string;
  };
  categories: {
    eyebrow: string;
    title: string;
    viewProducts: string;
    viewAll: string;
  };
  showcase: {
    eyebrow: string;
    title1: string;
    title2: string;
    lead: string;
    f1k: string;
    f1t: string;
    f2k: string;
    f2t: string;
    f3k: string;
    f3t: string;
    f4k: string;
    f4t: string;
    f5k: string;
    f5t: string;
    f6k: string;
    f6t: string;
    loader: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    lead: string;
    s1dept: string;
    s1title: string;
    s1desc: string;
    s2dept: string;
    s2title: string;
    s2desc: string;
    s3dept: string;
    s3title: string;
    s3desc: string;
    s4dept: string;
    s4title: string;
    s4desc: string;
    s5dept: string;
    s5title: string;
    s5desc: string;
  };
  facilities: {
    eyebrow: string;
    title: string;
    s1eyebrow: string;
    s1title: string;
    s1desc: string;
    s2eyebrow: string;
    s2title: string;
    s2desc: string;
    s3eyebrow: string;
    s3title: string;
    s3desc: string;
    s4eyebrow: string;
    s4title: string;
    s4desc: string;
    prev: string;
    next: string;
  };
  certs: {
    eyebrow: string;
    title: string;
    body: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    getInTouch: string;
    download: string;
  };
  footer: {
    blurb: string;
    products: string;
    company: string;
    inquiries: string;
    about: string;
    allProducts: string;
    process: string;
    facilities: string;
    quality: string;
    contact: string;
    openForm: string;
    inquiriesBody: string;
    copyright: string;
    tagline: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    desc: string;
    home: string;
    crumb: string;
    reachTitle: string;
    intro: string;
    emailLabel: string;
    emailNote: string;
    phoneLabel: string;
    phoneNote: string;
    officeLabel: string;
    officeNote: string;
  };
  form: {
    title: string;
    intro: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    inquiry: string;
    message: string;
    selectCountry: string;
    selectInquiry: string;
    submit: string;
    sending: string;
    note: string;
    success: string;
    phName: string;
    phCompany: string;
    phEmail: string;
    phPhone: string;
    phMessage: string;
    inq1: string;
    inq2: string;
    inq3: string;
    inq4: string;
    inq5: string;
  };
  productsPage: {
    eyebrow: string;
    title: string;
    desc: string;
    viewCategory: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaContact: string;
    ctaAbout: string;
  };
  categoryPage: {
    request: string;
    all: string;
    more: string;
    continue: string;
  };
  cats: {
    citrus: string;
    dates: string;
    freshFruits: string;
    freshVegetables: string;
    herbsSpices: string;
    pulsesGrains: string;
  };
};

export const en: Messages = {
  nav: {
    about: "About",
    products: "Products",
    process: "Our Process",
    facilities: "Facilities",
    quality: "Quality",
    contact: "Contact",
    logoAlt: "HBanna Dates — Egyptian Export Center",
    toggleMenu: "Toggle menu",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    language: "Language",
  },
  hero: {
    eyebrow: "Egyptian Grower · Producer · Exporter Since 1992",
    titleBefore: "Growing ",
    titleEm: "Excellence.",
    titleAfter: "Delivering Trust\nSince 1992.",
    lead: "A vertically integrated Egyptian agricultural house — from grove to global market.",
    ctaProducts: "Explore Our Products",
    ctaPartner: "Partner With Us",
    scroll: "Scroll",
  },
  marquee: {
    q1: "Premium Quality",
    q2: "Global Export",
    q3: "Hand Selected",
    q4: "Est. 1992",
  },
  metrics: {
    years: "Years of agricultural excellence since 1992",
    groves: "Of our dates grown & packed in our own factories",
    factories: "Our own modern dates factories",
  },
  about: {
    eyebrow: "Who We Are",
    title: "Quality Starts at the Source.",
    lead: "Since our establishment in 1992, we have been pioneers in the cultivation, production, packing, and export of Dates, Citrus, Fresh Fruits & Vegetables, Herbs & Spices, Pulses, and Grains.",
    body1:
      "Our vertically integrated approach lets us oversee every step — from cultivation and harvesting to packing and delivery — ensuring consistent quality, freshness, and reliability throughout the supply chain.",
    body2:
      "We combine generations of agricultural experience with modern farming techniques, advanced production methods, and strict quality control.",
    pill1: "Vertically integrated",
    pill2: "Own groves & factories",
    pill3: "Export-ready quality",
  },
  categories: {
    eyebrow: "What We Grow & Export",
    title: "A Full Range of Premium Egyptian Produce.",
    viewProducts: "View products",
    viewAll: "View All Products",
  },
  showcase: {
    eyebrow: "Signature Harvest",
    title1: "Quality You Can See.",
    title2: "Standards You Can Trust.",
    lead: "From Egyptian groves to export-ready fruit — selected for freshness, consistency, and presentation that buyers can trust.",
    f1k: "Quality",
    f1t: "Premium Quality",
    f2k: "Freshness",
    f2t: "Fresh & Consistent",
    f3k: "Selection",
    f3t: "Hand Selected",
    f4k: "Export",
    f4t: "Global Export",
    f5k: "Packing",
    f5t: "Export-Ready Packing",
    f6k: "Heritage",
    f6t: "Est. 1992",
    loader: "Preparing harvest…",
  },
  journey: {
    eyebrow: "From Grove to Global Market",
    title: "Fully Traced, Farm to Port",
    lead: "Every shipment is tracked from our Egyptian groves through harvest, packing, quality control, and export dispatch.",
    s1dept: "01 — Origin",
    s1title: "Farm",
    s1desc: "Cultivation across fertile Egyptian lands with careful seasonal planning.",
    s2dept: "02 — Field",
    s2title: "Harvest",
    s2desc: "Picked at peak maturity to protect flavor, color, and shelf life.",
    s3dept: "03 — Facility",
    s3title: "Packing",
    s3desc: "Sorted and packed in modern houses for export-ready presentation.",
    s4dept: "04 — Assurance",
    s4title: "Quality",
    s4desc: "Inspected against international food-safety and grading standards.",
    s5dept: "05 — Dispatch",
    s5title: "Export",
    s5desc: "Cold-chain logistics coordinated for reliable global delivery.",
  },
  facilities: {
    eyebrow: "Our Infrastructure",
    title: "Built for Scale. Engineered for Freshness.",
    s1eyebrow: "01 — Processing",
    s1title: "Two Modern Dates Factories",
    s1desc:
      "Purpose-built facilities for processing and packing premium Egyptian dates with export-ready consistency.",
    s2eyebrow: "02 — Packing",
    s2title: "Dedicated Citrus Packing House",
    s2desc:
      "State-of-the-art packing infrastructure ensuring freshness and integrity from grove to port.",
    s3eyebrow: "03 — Cultivation",
    s3title: "Premium Agricultural Lands",
    s3desc:
      "Vast cultivated fields across Egypt’s most fertile regions, managed for quality at every harvest.",
    s4eyebrow: "04 — Storage",
    s4title: "Advanced Storage Facilities",
    s4desc:
      "Climate-controlled storage maintaining optimal conditions to protect freshness before shipment.",
    prev: "Previous facility",
    next: "Next facility",
  },
  certs: {
    eyebrow: "Quality & Food Safety",
    title: "Certified to International Standards.",
    body: "Our operations follow rigorous quality systems so buyers receive consistent, export-ready produce with confidence.",
  },
  cta: {
    eyebrow: "Global Partnership",
    title: "Let's Build a Lasting Partnership.",
    body: "Trusted by wholesalers, retailers, and supermarket chains across international markets — reliability, flexibility, and quality since 1992.",
    getInTouch: "Get in Touch",
    download: "Download Company Profile",
  },
  footer: {
    blurb:
      "A leading Egyptian grower, producer, and exporter of premium agricultural products since 1992.",
    products: "Products",
    company: "Company",
    inquiries: "Trade Inquiries",
    about: "About Us",
    allProducts: "All Products",
    process: "Our Process",
    facilities: "Facilities",
    quality: "Quality & Certifications",
    contact: "Contact Us",
    openForm: "Open Contact Form",
    inquiriesBody:
      "Ready to discuss volumes, specs, or shipping? Reach our export desk directly.",
    copyright: "© 2026 Egyptian Export Center (HBanna). All rights reserved.",
    tagline: "Growing Excellence. Delivering Trust Since 1992.",
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Let's Start a Conversation.",
    desc: "Whether you're exploring new suppliers or ready to place an order, our export desk is here with clear answers and export-ready support.",
    home: "Home",
    crumb: "Contact Us",
    reachTitle: "Reach Out Directly.",
    intro:
      "Our trade desk works across time zones to serve global markets. Prefer email or phone? Use the details below — we typically reply within 1–2 business days.",
    emailLabel: "Email",
    emailNote: "Product and export inquiries",
    phoneLabel: "Phone",
    phoneNote: "Sun–Thu, 9:00–17:00 Cairo",
    officeLabel: "Office",
    officeNote: "Global logistics coordination",
  },
  form: {
    title: "Start Your Inquiry.",
    intro:
      "Share a few details and our export team will follow up with availability, pricing, and logistics options.",
    name: "Full Name",
    company: "Company Name",
    email: "Email Address",
    phone: "Phone Number",
    country: "Country",
    inquiry: "Inquiry Type",
    message: "Your Message",
    selectCountry: "Select country",
    selectInquiry: "Select inquiry type",
    submit: "Send Message",
    sending: "Sending...",
    note: "Response within 1–2 business days",
    success:
      "Thank you. Your inquiry has been received — we will be in touch shortly.",
    phName: "Jane Cooper",
    phCompany: "Company Ltd.",
    phEmail: "you@company.com",
    phPhone: "+20 100 000 0000",
    phMessage:
      "Tell us about the products, volumes, and destination market…",
    inq1: "Product Inquiry",
    inq2: "Export Partnership",
    inq3: "Logistics Information",
    inq4: "Quality Assurance",
    inq5: "General Inquiry",
  },
  productsPage: {
    eyebrow: "Our Products",
    title: "Premium Egyptian Agricultural Products.",
    desc: "Browse our export categories — citrus, dates, fresh produce, herbs, spices, pulses, and grains.",
    viewCategory: "View category",
    ctaEyebrow: "Trade Inquiries",
    ctaTitle: "Need volumes, specs, or shipping support?",
    ctaContact: "Contact Export Desk",
    ctaAbout: "About HBanna",
  },
  categoryPage: {
    request: "Request Availability",
    all: "All Categories",
    more: "More Categories",
    continue: "Continue exploring our range",
  },
  cats: {
    citrus: "Citrus",
    dates: "Dates",
    freshFruits: "Fresh Fruits",
    freshVegetables: "Fresh Vegetables",
    herbsSpices: "Herbs & Spices",
    pulsesGrains: "Pulses & Grains",
  },
};

export const de: Messages = {
  nav: {
    about: "Über uns",
    products: "Produkte",
    process: "Unser Prozess",
    facilities: "Anlagen",
    quality: "Qualität",
    contact: "Kontakt",
    logoAlt: "HBanna Dates — Ägyptisches Exportzentrum",
    toggleMenu: "Menü öffnen",
    themeToLight: "Zum hellen Modus wechseln",
    themeToDark: "Zum dunklen Modus wechseln",
    language: "Sprache",
  },
  hero: {
    eyebrow: "Ägyptischer Erzeuger · Produzent · Exporteur seit 1992",
    titleBefore: "Wachsende ",
    titleEm: "Exzellenz.",
    titleAfter: "Vertrauen liefern\nseit 1992.",
    lead: "Ein vertikal integriertes ägyptisches Agrarunternehmen — vom Hain zum Weltmarkt.",
    ctaProducts: "Unsere Produkte entdecken",
    ctaPartner: "Partner werden",
    scroll: "Scrollen",
  },
  marquee: {
    q1: "Premium-Qualität",
    q2: "Globaler Export",
    q3: "Handverlesen",
    q4: "Seit 1992",
  },
  metrics: {
    years: "Jahre landwirtschaftliche Exzellenz seit 1992",
    groves: "Unserer Datteln aus eigenen Fabriken",
    factories: "Eigene moderne Dattelfabriken",
  },
  about: {
    eyebrow: "Wer wir sind",
    title: "Qualität beginnt an der Quelle.",
    lead: "Seit unserer Gründung 1992 sind wir Vorreiter im Anbau, in der Produktion, Verpackung und im Export von Datteln, Zitrusfrüchten, frischem Obst & Gemüse, Kräutern & Gewürzen sowie Hülsenfrüchten und Getreide.",
    body1:
      "Durch unsere vertikal integrierte Struktur begleiten wir jeden Schritt — von Anbau und Ernte bis Verpackung und Lieferung — für gleichbleibende Qualität, Frische und Zuverlässigkeit.",
    body2:
      "Wir verbinden Generationen landwirtschaftlicher Erfahrung mit modernen Anbaumethoden, fortschrittlicher Produktion und strenger Qualitätskontrolle.",
    pill1: "Vertikal integriert",
    pill2: "Eigene Haine & Fabriken",
    pill3: "Exportfertige Qualität",
  },
  categories: {
    eyebrow: "Was wir anbauen & exportieren",
    title: "Ein volles Sortiment premiumägyptischer Erzeugnisse.",
    viewProducts: "Produkte ansehen",
    viewAll: "Alle Produkte",
  },
  showcase: {
    eyebrow: "Signature Harvest",
    title1: "Qualität, die man sieht.",
    title2: "Standards, denen man vertraut.",
    lead: "Von ägyptischen Hainen zu exportfertiger Frucht — ausgewählt auf Frische, Konsistenz und Präsentation.",
    f1k: "Qualität",
    f1t: "Premium-Qualität",
    f2k: "Frische",
    f2t: "Frisch & konstant",
    f3k: "Auswahl",
    f3t: "Handverlesen",
    f4k: "Export",
    f4t: "Globaler Export",
    f5k: "Verpackung",
    f5t: "Exportfertige Packung",
    f6k: "Heritage",
    f6t: "Seit 1992",
    loader: "Ernte wird vorbereitet…",
  },
  journey: {
    eyebrow: "Vom Hain zum Weltmarkt",
    title: "Voll rückverfolgbar, Farm bis Hafen",
    lead: "Jede Sendung wird von unseren ägyptischen Hainen über Ernte, Packung, Qualität und Export verfolgt.",
    s1dept: "01 — Herkunft",
    s1title: "Farm",
    s1desc: "Anbau auf fruchtbaren ägyptischen Flächen mit sorgfältiger Saisonplanung.",
    s2dept: "02 — Feld",
    s2title: "Ernte",
    s2desc: "Geerntet zur optimalen Reife für Geschmack, Farbe und Haltbarkeit.",
    s3dept: "03 — Anlage",
    s3title: "Packung",
    s3desc: "Sortiert und verpackt in modernen Häusern für exportfertige Präsentation.",
    s4dept: "04 — Sicherung",
    s4title: "Qualität",
    s4desc: "Geprüft nach internationalen Lebensmittelsicherheits- und Klassifizierungsstandards.",
    s5dept: "05 — Versand",
    s5title: "Export",
    s5desc: "Kühlkettenlogistik für zuverlässige globale Lieferung.",
  },
  facilities: {
    eyebrow: "Unsere Infrastruktur",
    title: "Gebaut für Skalierung. Entwickelt für Frische.",
    s1eyebrow: "01 — Verarbeitung",
    s1title: "Zwei moderne Dattelfabriken",
    s1desc:
      "Zweckgebaute Anlagen zur Verarbeitung und Verpackung premiumägyptischer Datteln mit exportfertiger Konsistenz.",
    s2eyebrow: "02 — Packung",
    s2title: "Eigenes Zitrus-Packhaus",
    s2desc:
      "Modernste Packinfrastruktur für Frische und Integrität vom Hain bis zum Hafen.",
    s3eyebrow: "03 — Anbau",
    s3title: "Premium-Agrarflächen",
    s3desc:
      "Weite Anbauflächen in Ägyptens fruchtbarsten Regionen — Qualität bei jeder Ernte.",
    s4eyebrow: "04 — Lagerung",
    s4title: "Moderne Lageranlagen",
    s4desc:
      "Klimatisierte Lagerung für optimale Bedingungen und Frische vor dem Versand.",
    prev: "Vorherige Anlage",
    next: "Nächste Anlage",
  },
  certs: {
    eyebrow: "Qualität & Lebensmittelsicherheit",
    title: "Nach internationalen Standards zertifiziert.",
    body: "Unsere Prozesse folgen strengen Qualitätssystemen — für konsistente, exportfertige Ware mit Vertrauen.",
  },
  cta: {
    eyebrow: "Globale Partnerschaft",
    title: "Lassen Sie uns eine dauerhafte Partnerschaft aufbauen.",
    body: "Vertraut von Großhändlern, Einzelhändlern und Supermarktketten weltweit — Zuverlässigkeit, Flexibilität und Qualität seit 1992.",
    getInTouch: "Kontakt aufnehmen",
    download: "Unternehmensprofil laden",
  },
  footer: {
    blurb:
      "Ein führender ägyptischer Erzeuger, Produzent und Exporteur premium landwirtschaftlicher Produkte seit 1992.",
    products: "Produkte",
    company: "Unternehmen",
    inquiries: "Handelsanfragen",
    about: "Über uns",
    allProducts: "Alle Produkte",
    process: "Unser Prozess",
    facilities: "Anlagen",
    quality: "Qualität & Zertifizierungen",
    contact: "Kontakt",
    openForm: "Kontaktformular öffnen",
    inquiriesBody:
      "Bereit für Mengen, Spezifikationen oder Versand? Sprechen Sie direkt mit unserem Exportteam.",
    copyright: "© 2026 Egyptian Export Center (HBanna). Alle Rechte vorbehalten.",
    tagline: "Wachsende Exzellenz. Vertrauen seit 1992.",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns sprechen.",
    desc: "Ob Sie neue Lieferanten prüfen oder bestellen möchten — unser Exportteam antwortet klar und exportfertig.",
    home: "Start",
    crumb: "Kontakt",
    reachTitle: "Direkt erreichen.",
    intro:
      "Unser Handelsteam arbeitet über Zeitzonen hinweg. Per E-Mail oder Telefon — Antwort meist in 1–2 Werktagen.",
    emailLabel: "E-Mail",
    emailNote: "Produkt- und Exportanfragen",
    phoneLabel: "Telefon",
    phoneNote: "So–Do, 9:00–17:00 Kairo",
    officeLabel: "Büro",
    officeNote: "Globale Logistikkoordination",
  },
  form: {
    title: "Anfrage starten.",
    intro:
      "Teilen Sie uns Details mit — unser Exportteam meldet sich zu Verfügbarkeit, Preisen und Logistik.",
    name: "Vollständiger Name",
    company: "Firmenname",
    email: "E-Mail-Adresse",
    phone: "Telefonnummer",
    country: "Land",
    inquiry: "Anfrageart",
    message: "Ihre Nachricht",
    selectCountry: "Land wählen",
    selectInquiry: "Anfrageart wählen",
    submit: "Nachricht senden",
    sending: "Wird gesendet...",
    note: "Antwort innerhalb von 1–2 Werktagen",
    success:
      "Danke. Ihre Anfrage ist eingegangen — wir melden uns in Kürze.",
    phName: "Jane Cooper",
    phCompany: "Firma GmbH",
    phEmail: "sie@firma.com",
    phPhone: "+20 100 000 0000",
    phMessage:
      "Erzählen Sie uns von Produkten, Mengen und Zielmarkt…",
    inq1: "Produktanfrage",
    inq2: "Exportpartnerschaft",
    inq3: "Logistikinformationen",
    inq4: "Qualitätssicherung",
    inq5: "Allgemeine Anfrage",
  },
  productsPage: {
    eyebrow: "Unsere Produkte",
    title: "Premium ägyptische Agrarprodukte.",
    desc: "Entdecken Sie unsere Exportkategorien — Zitrus, Datteln, frische Ware, Kräuter, Gewürze, Hülsenfrüchte und Getreide.",
    viewCategory: "Kategorie ansehen",
    ctaEyebrow: "Handelsanfragen",
    ctaTitle: "Brauchen Sie Mengen, Specs oder Versandunterstützung?",
    ctaContact: "Export-Desk kontaktieren",
    ctaAbout: "Über HBanna",
  },
  categoryPage: {
    request: "Verfügbarkeit anfragen",
    all: "Alle Kategorien",
    more: "Weitere Kategorien",
    continue: "Sortiment weiter entdecken",
  },
  cats: {
    citrus: "Zitrusfrüchte",
    dates: "Datteln",
    freshFruits: "Frischobst",
    freshVegetables: "Frischgemüse",
    herbsSpices: "Kräuter & Gewürze",
    pulsesGrains: "Hülsenfrüchte & Getreide",
  },
};

export const zh: Messages = {
  nav: {
    about: "关于我们",
    products: "产品",
    process: "我们的流程",
    facilities: "设施",
    quality: "品质",
    contact: "联系",
    logoAlt: "HBanna Dates — 埃及出口中心",
    toggleMenu: "打开菜单",
    themeToLight: "切换到浅色模式",
    themeToDark: "切换到深色模式",
    language: "语言",
  },
  hero: {
    eyebrow: "埃及种植商 · 生产商 · 出口商 · 始于1992",
    titleBefore: "成就",
    titleEm: "卓越。",
    titleAfter: "传递信任\n始于1992。",
    lead: "垂直整合的埃及农业企业——从果园到全球市场。",
    ctaProducts: "浏览我们的产品",
    ctaPartner: "成为合作伙伴",
    scroll: "向下滚动",
  },
  marquee: {
    q1: "优质品质",
    q2: "全球出口",
    q3: "精选甄别",
    q4: "始于1992",
  },
  metrics: {
    years: "自1992年以来的农业卓越历程",
    groves: "自有工厂种植与包装的椰枣",
    factories: "自有现代化椰枣工厂",
  },
  about: {
    eyebrow: "我们是谁",
    title: "品质始于源头。",
    lead: "自1992年成立以来，我们一直是椰枣、柑橘、新鲜果蔬、香草香料以及豆类谷物的种植、生产、包装与出口先锋。",
    body1:
      "垂直整合模式让我们把控每一步——从种植采收到包装配送——确保供应链全程品质、新鲜与可靠。",
    body2:
      "我们将世代农业经验与现代种植技术、先进生产方法及严格质量控制相结合。",
    pill1: "垂直整合",
    pill2: "自有果园与工厂",
    pill3: "出口级品质",
  },
  categories: {
    eyebrow: "我们种植与出口的产品",
    title: "全系列优质埃及农产品。",
    viewProducts: "查看产品",
    viewAll: "查看全部产品",
  },
  showcase: {
    eyebrow: "招牌收获",
    title1: "看得见的品质。",
    title2: "值得信赖的标准。",
    lead: "从埃及果园到出口级鲜果——以新鲜、稳定与呈现力精选，赢得买家信任。",
    f1k: "品质",
    f1t: "优质品质",
    f2k: "新鲜",
    f2t: "新鲜稳定",
    f3k: "甄选",
    f3t: "人工精选",
    f4k: "出口",
    f4t: "全球出口",
    f5k: "包装",
    f5t: "出口级包装",
    f6k: "传承",
    f6t: "始于1992",
    loader: "正在准备收获展示…",
  },
  journey: {
    eyebrow: "从果园到全球市场",
    title: "全程追溯，从农场到港口",
    lead: "每批货物都从埃及果园经采收、包装、质检到出口发运全程追踪。",
    s1dept: "01 — 产地",
    s1title: "农场",
    s1desc: "在肥沃的埃及土地上精心规划季节性种植。",
    s2dept: "02 — 田间",
    s2title: "采收",
    s2desc: "在最佳成熟度采收，保护风味、色泽与货架期。",
    s3dept: "03 — 工厂",
    s3title: "包装",
    s3desc: "在现代化包装厂分拣包装，呈现出口级外观。",
    s4dept: "04 — 保障",
    s4title: "质检",
    s4desc: "按国际食品安全与分级标准检验。",
    s5dept: "05 — 发运",
    s5title: "出口",
    s5desc: "冷链物流协调，确保可靠的全球交付。",
  },
  facilities: {
    eyebrow: "我们的基础设施",
    title: "为规模而建。为新鲜而设计。",
    s1eyebrow: "01 — 加工",
    s1title: "两座现代化椰枣工厂",
    s1desc: "专为加工包装优质埃及椰枣而建，保证出口级一致性。",
    s2eyebrow: "02 — 包装",
    s2title: "专业柑橘包装厂",
    s2desc: "先进包装设施，确保从果园到港口的新鲜与完整。",
    s3eyebrow: "03 — 种植",
    s3title: "优质农业用地",
    s3desc: "覆盖埃及最肥沃地区的广阔种植田，每季严控品质。",
    s4eyebrow: "04 — 仓储",
    s4title: "先进仓储设施",
    s4desc: "温控仓储保持最佳条件，装运前守护新鲜。",
    prev: "上一个设施",
    next: "下一个设施",
  },
  certs: {
    eyebrow: "品质与食品安全",
    title: "符合国际标准认证。",
    body: "我们严格执行质量体系，让买家安心获得稳定的出口级产品。",
  },
  cta: {
    eyebrow: "全球合作",
    title: "让我们建立长久伙伴关系。",
    body: "深受国际批发商、零售商与连锁超市信赖——自1992年以来的可靠、灵活与品质。",
    getInTouch: "联系我们",
    download: "下载公司简介",
  },
  footer: {
    blurb: "自1992年以来领先的埃及优质农产品种植、生产与出口企业。",
    products: "产品",
    company: "公司",
    inquiries: "贸易咨询",
    about: "关于我们",
    allProducts: "全部产品",
    process: "我们的流程",
    facilities: "设施",
    quality: "品质与认证",
    contact: "联系我们",
    openForm: "打开联系表单",
    inquiriesBody: "需要讨论数量、规格或运输？请直接联系我们的出口团队。",
    copyright: "© 2026 Egyptian Export Center (HBanna). 保留所有权利。",
    tagline: "成就卓越。传递信任。始于1992。",
  },
  contact: {
    eyebrow: "取得联系",
    title: "让我们开始对话。",
    desc: "无论您在寻找新供应商还是准备下单，我们的出口团队都会提供清晰、专业的支持。",
    home: "首页",
    crumb: "联系我们",
    reachTitle: "直接联系。",
    intro:
      "我们的贸易团队跨时区服务全球市场。可通过邮件或电话联系——通常在1–2个工作日内回复。",
    emailLabel: "邮箱",
    emailNote: "产品与出口咨询",
    phoneLabel: "电话",
    phoneNote: "周日–周四，开罗时间 9:00–17:00",
    officeLabel: "办公室",
    officeNote: "全球物流协调",
  },
  form: {
    title: "开始询盘。",
    intro: "留下几个细节，我们的出口团队将跟进供应、价格与物流方案。",
    name: "姓名",
    company: "公司名称",
    email: "电子邮箱",
    phone: "电话号码",
    country: "国家",
    inquiry: "询盘类型",
    message: "您的留言",
    selectCountry: "选择国家",
    selectInquiry: "选择询盘类型",
    submit: "发送消息",
    sending: "发送中...",
    note: "通常在1–2个工作日内回复",
    success: "感谢您。我们已收到您的询盘——将尽快与您联系。",
    phName: "张伟",
    phCompany: "公司名称",
    phEmail: "you@company.com",
    phPhone: "+20 100 000 0000",
    phMessage: "请告诉我们产品、数量与目的市场…",
    inq1: "产品询盘",
    inq2: "出口合作",
    inq3: "物流信息",
    inq4: "质量保障",
    inq5: "一般咨询",
  },
  productsPage: {
    eyebrow: "我们的产品",
    title: "优质埃及农产品。",
    desc: "浏览出口品类——柑橘、椰枣、新鲜果蔬、香草香料、豆类与谷物。",
    viewCategory: "查看品类",
    ctaEyebrow: "贸易咨询",
    ctaTitle: "需要数量、规格或运输支持？",
    ctaContact: "联系出口团队",
    ctaAbout: "关于 HBanna",
  },
  categoryPage: {
    request: "询价供应",
    all: "全部品类",
    more: "更多品类",
    continue: "继续浏览我们的产品线",
  },
  cats: {
    citrus: "柑橘",
    dates: "椰枣",
    freshFruits: "新鲜水果",
    freshVegetables: "新鲜蔬菜",
    herbsSpices: "香草与香料",
    pulsesGrains: "豆类与谷物",
  },
};

export const dictionaries: Record<Locale, Messages> = {
  en,
  de,
  zh,
};
