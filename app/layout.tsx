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
  description: "Martin GK online cv"
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
