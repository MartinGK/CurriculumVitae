import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import BottomNav from "./layout/BottonNav";
import Providers from "./layout/Providers";
import MobileTopTitle from "./layout/MobileTopTitle";
import LayoutSwiper from "./layout/LayoutSwiper";
import DesktopTopNav from "./layout/DesktopTopNav";
import { Metadata } from "next";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Martin GK",
  description: "Martin GK online cv",
  themeColor: "#000", 
  icons: [
    {
      url: "/images/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      url: "/images/icon-256x256.png",
      sizes: "256x256",
      type: "image/png"
    },
    {
      url: "/images/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      url: "/images/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ]
};

export default function Main({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MobileTopTitle />
          <div
            className="absolute h-screen overflow-scroll bg-black md:relative md:bg-[#1a1a1a]"
          >
            <main className="bg-background-1 md:border-1 relative flex justify-center bg-transparent md:m-28 md:flex-col"
            >
              <DesktopTopNav />
              <LayoutSwiper >
                {children}
              </LayoutSwiper>
            </main>
          </div>
          <BottomNav />
          <Analytics />
        </Providers >
      </body >
    </html >
  );
}
