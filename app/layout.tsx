import type { Metadata } from "next";
import { Anton, Fraunces, Manrope, Noto_Sans_SC } from "next/font/google";
import Providers from "@/components/Providers";
import InitialLoader from "@/components/InitialLoader";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSansSc = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sc",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Egyptian Export Center — Growing Excellence. Delivering Trust Since 1992.",
  description:
    "A vertically integrated Egyptian agricultural house — from grove to global market. Dates, citrus, fresh fruits & vegetables since 1992.",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('hbanna-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('hbanna-locale');if(l==='en'||l==='de'||l==='zh'){document.documentElement.setAttribute('data-locale',l);document.documentElement.lang=l==='zh'?'zh-CN':l;}document.documentElement.classList.add('show-loader');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-locale="en"
      className={`${anton.variable} ${fraunces.variable} ${manrope.variable} ${notoSansSc.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={manrope.className}>
        <InitialLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
