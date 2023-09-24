import type { Metadata } from "next";

export const metadata: Metadata & { google: string } = {
  title: "Martin GK",
  description: "Martin Gainza Koulaksezian web page CV",
  colorScheme: "dark",
  google: "notranslate",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/icon.jpeg"
  }
};

