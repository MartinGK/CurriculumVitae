"use client";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import BottomNav from "./layout/BottonNav";
import Providers from "./layout/Providers";
import MobileTopTitle from "./layout/MobileTopTitle";
import { NavOptions, NavOptionsIDsValues } from "@constants";
import { useSelectedLayoutSegment } from "next/navigation";
import LayoutSwiper from "./layout/LayoutSwiper";
import DesktopTopNav from "./layout/DesktopTopNav";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.css";
import "../styles/globals.css";

export default function Main({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegment();
  const itemSelected: NavOptionsIDsValues = NavOptions.getOptionIDBySegment(segment);

  return (
    <html lang="en">
      <body>
        <Providers>
          <MobileTopTitle title={NavOptions.getOptionTitleByID(itemSelected)} />
          <div
            className="absolute h-screen overflow-scroll bg-black md:relative md:bg-[#1a1a1a]"
          >
            <main className="bg-background-1 md:border-1 relative flex justify-center bg-transparent md:m-28 md:flex-col"
            >
              <DesktopTopNav itemSelected={itemSelected} />
              <LayoutSwiper itemSelected={itemSelected}>
                {children}
              </LayoutSwiper>
            </main>
          </div>
          <BottomNav itemSelected={itemSelected} />
          <Analytics />
        </Providers >
      </body >
    </html >
  );
}
