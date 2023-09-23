"use client";
import { useRef, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import BottomNav from "../app/components/BottonNav";
import Providers from "./Providers";
import Divider from "./components/Divider";
import TopNav from "../app/components/TopNav";
import { NavOptions, NavOptionsIDsValues } from "@constants";
import { useSelectedLayoutSegment } from "next/navigation";
import LayoutSwiper from "./LayoutSwiper";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.css";
import "../styles/globals.css";

export default function Main({ children }: { children: ReactNode }) {
  const mainRef = useRef(null);
  const segment = useSelectedLayoutSegment();
  const itemSelected: NavOptionsIDsValues = NavOptions.getOptionIDBySegment(segment);

  return (
    <html lang="en">
      <body>
        <Providers>
          <ToastContainer
            toastClassName="!bg-[#1c1c1c] "
            bodyClassName="!bg-[#1c1c1c] !font-red"
            hideProgressBar
          />
          <Head>
            <title>Martin GK</title>
            <meta name="description" content="Martin Gainza Koulaksezian CV" />
            <meta name="google" content="notranslate" />
            <link rel="icon" href="/images/icon.jpg" />
          </Head>

          <div className="h-18 !fixed z-20 w-full bg-black pt-6 md:!hidden">
            <h1 className="pb-2 pl-8 text-3xl">{NavOptions.getOptionTitleByID(itemSelected)}</h1>
            <Divider />
          </div>
          <div
            className="absolute h-screen overflow-scroll bg-black md:relative md:bg-[#1a1a1a]"
          >
            <main
              className="bg-background-1 md:border-1 relative flex justify-center bg-transparent md:m-28 md:flex-col"
              ref={mainRef}
            >
              <LayoutSwiper itemSelected={itemSelected}>
                <TopNav itemSelected={itemSelected} />
                <div className="bg-card-1 z-1 absolute mt-14 hidden w-full bg-black px-5 pb-20 text-white md:flex md:h-[40rem] md:items-center md:rounded-b-md md:rounded-r-md md:px-0" />
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
