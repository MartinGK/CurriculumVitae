import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest & { google: string } {
  return {
    "google": "notranslate",
    "theme_color": "#000",
    "background_color": "#1A1A1A",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
    "name": "Martin GK",
    "short_name": "Martin GK",
    "description": "Martin Gainza Koulaksezian web page CV with PWA",
    "icons": [
      {
        "src": "/images/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/images/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/images/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/images/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  };
}
