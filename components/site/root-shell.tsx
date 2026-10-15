import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

import { meta, type Locale } from "@/lib/content";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const viewport: Viewport = { themeColor: "#02183f" };

export function metadataFor(lang: Locale): Metadata {
  return {
    title: meta.title[lang],
    description: meta.description[lang],
    openGraph: {
      title: meta.title[lang],
      description: meta.description[lang],
      locale: lang === "sv" ? "sv_SE" : "en_GB",
      type: "profile",
    },
  };
}

export function RootShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang} className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
