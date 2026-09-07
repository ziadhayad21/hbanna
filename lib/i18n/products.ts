import { productCategories, ProductCategory, CategoryProduct } from "../products";
import type { Locale } from "./config";
import { productTranslationsDe } from "./products-de";
import { productTranslationsZh } from "./products-zh";

const deTranslations: Record<string, Partial<ProductCategory>> = {
  citrus: {
    title: "Zitrusfrüchte",
    shortLabel: "Zitrusfrüchte",
    summary: "Navel-, Valencia- & Baladi-Orangen · Blutorangen · Mandarinen · Murcott · Easy Peelers · Zitronen · Limetten · Grapefruit",
    description: "Premium ägyptische Zitrusfrüchte, die auf unseren Plantagen angebaut und für globale Märkte verpackt werden — von klassischen Navel- und Valencia-Orangen bis hin zu Easy Peelern, Zitronen, Limetten und Grapefruit."
  },
  dates: {
    title: "Datteln",
    shortLabel: "Datteln",
    summary: "Halbtrockene Datteln · Trockene Datteln · Medjool · Frische Barhi · Premium-Sorten · Dattelprodukte",
    description: "Ein umfassendes Sortiment an ägyptischen Datteln, das in hochmodernen Anlagen angebaut und verarbeitet wird. Wir bieten halbtrockene, trockene, frische (Barhi) Sorten und die geschätzten Medjool-Datteln an."
  },
  "fresh-fruits": {
    title: "Frischobst",
    shortLabel: "Frischobst",
    summary: "Trauben · Granatäpfel · Mangos · Erdbeeren · Pfirsiche · Aprikosen · Melonen · Wassermelonen · Guave",
    description: "Saisonale Frischfrüchte wie Trauben, Granatäpfel, Mangos und Erdbeeren, die im optimalen Reifestadium geerntet und schnell exportiert werden, um Frische zu garantieren."
  },
  "fresh-vegetables": {
    title: "Frischgemüse",
    shortLabel: "Frischgemüse",
    summary: "Zwiebeln · Knoblauch · Kartoffeln · Süßkartoffeln · Tomaten · Paprika · Gurken · Karotten · Brokkoli · Aubergine · Artischocken · Kohl",
    description: "Unsere Feldgemüse, einschließlich Zwiebeln, Knoblauch, Kartoffeln und Tomaten, werden nach strengen globalen Sicherheitsstandards (Global GAP) für den internationalen Groß- und Einzelhandel angebaut."
  },
  "herbs-spices": {
    title: "Kräuter & Gewürze",
    shortLabel: "Kräuter & Gewürze",
    summary: "Basilikum · Minze · Koriander · Petersilie · Dill · Majoran · Kreuzkümmel · Fenchel · Anis · Kümmel · Kamille · Ringelblume · Hibiskus",
    description: "Premium Kräuter und Gewürze aus den Nil-Oasen. Von aromatischem Basilikum und Minze bis hin zu Kreuzkümmel, Koriander und Kamille – verarbeitet unter hygienischen Bedingungen für globale Käufer."
  },
  "pulses-grains": {
    title: "Hülsenfrüchte & Getreide",
    shortLabel: "Hülsenfrüchte & Getreide",
    summary: "Ackerbohnen · Weiße Bohnen · Linsen · Kichererbsen · Lupinen · Sesam · Erdnüsse · Ägyptischer Reis",
    description: "Hochwertige ägyptische Hülsenfrüchte und Getreide. Wir exportieren proteinreiche weiße Bohnen, Ackerbohnen, Linsen und den berühmten ägyptischen Kurzkornreis für globale Lebensmittelindustriezweige."
  }
};

const zhTranslations: Record<string, Partial<ProductCategory>> = {
  citrus: {
    title: "柑橘",
    shortLabel: "柑橘",
    summary: "脐橙、夏橙和本地橙 · 血橙 · 橘子 · 茂谷柑 · 易剥皮柑橘 · 柠檬 · 青柠 · 葡萄柚",
    description: "优质的埃及柑橘，在我们的果园种植并为全球市场包装——从经典的脐橙和夏橙，到易剥皮柑橘、柠檬、青柠和葡萄柚。"
  },
  dates: {
    title: "椰枣",
    shortLabel: "椰枣",
    summary: "半干椰枣 · 干椰枣 · 帝王椰枣 · 新鲜 Barhi · 优质品种 · 椰枣衍生产品",
    description: "在最先进的设施中种植和加工的全面埃及椰枣系列。我们提供半干、干、新鲜（Barhi）品种和备受推崇的帝王椰枣。"
  },
  "fresh-fruits": {
    title: "新鲜水果",
    shortLabel: "新鲜水果",
    summary: "葡萄 · 石榴 · 芒果 · 草莓 · 桃子 · 杏 · 甜瓜 · 西瓜 · 番石榴",
    description: "季节性新鲜水果，如葡萄、石榴、芒果和草莓，在最佳成熟期收获并迅速出口以确保新鲜度。"
  },
  "fresh-vegetables": {
    title: "新鲜蔬菜",
    shortLabel: "新鲜蔬菜",
    summary: "洋葱 · 大蒜 · 土豆 · 红薯 · 西红柿 · 辣椒 · 黄瓜 · 胡萝卜 · 西兰花 · 茄子 · 洋蓟 · 卷心菜",
    description: "我们的田间蔬菜，包括洋葱、大蒜、土豆和西红柿，按照严格的全球安全标准（Global GAP）种植，面向国际批发和零售市场。"
  },
  "herbs-spices": {
    title: "香草与香料",
    shortLabel: "香草与香料",
    summary: "罗勒 · 薄荷 · 芫荽 · 欧芹 · 莳萝 · 马郁兰 · 孜然 · 茴香 · 大茴香 · 葛缕子 · 洋甘菊 · 金盏花 · 木槿花",
    description: "来自尼罗河绿洲的优质香草和香料。从芳香的罗勒和薄荷到孜然、芫荽和洋甘菊——在卫生条件下加工，供应给全球买家。"
  },
  "pulses-grains": {
    title: "豆类与谷物",
    shortLabel: "豆类与谷物",
    summary: "蚕豆 · 白芸豆 · 扁豆 · 鹰嘴豆 · 羽扇豆 · 芝麻 · 花生 · 埃及大米",
    description: "高品质的埃及豆类和谷物。我们出口富含蛋白质的白芸豆、蚕豆、扁豆以及著名的埃及短粒大米，面向全球食品工业。"
  }
};

function translateProductList(
  products: CategoryProduct[],
  translations: Record<string, { name: string; info: string; description: string }>
): CategoryProduct[] {
  return products.map((p) => {
    const t = translations[p.name];
    if (t) {
      return {
        ...p,
        name: t.name,
        info: t.info,
        description: t.description,
      };
    }
    return p;
  });
}

export function getTranslatedProducts(locale: Locale): ProductCategory[] {
  if (locale === "en") return productCategories;

  const translations = locale === "de" ? deTranslations : zhTranslations;
  const productTrans = locale === "de" ? productTranslationsDe : productTranslationsZh;

  return productCategories.map(cat => {
    const t = translations[cat.slug];
    const translatedProducts = translateProductList(cat.products, productTrans);
    
    if (!t) {
      return { ...cat, products: translatedProducts };
    }
    
    return {
      ...cat,
      title: t.title || cat.title,
      shortLabel: t.shortLabel || cat.shortLabel,
      summary: t.summary || cat.summary,
      description: t.description || cat.description,
      products: translatedProducts,
    };
  });
}
