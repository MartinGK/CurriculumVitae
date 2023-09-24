import type { Metadata } from "next";

export const metadata: Metadata & { google: string } = {
    colorScheme: "dark",
    google: "notranslate",
    manifest: '/manifest.json',
};

