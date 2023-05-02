"use client";

import Head from "next/head";
import { SidebarOptionsProvider } from "contexts/SidebarOptionsContext";
import BottomNav from "components/BottonNav";
import { Divider, NoSsr } from "@mui/material";
import Main from "components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin GK</title>
        <meta name="description" content="Martin Gainza Koulaksezian CV" />
        <link rel="icon" href="/images/icon.jpg" />
      </Head>

      <ToastContainer
        toastClassName="!bg-[#1c1c1c] "
        bodyClassName="!bg-[#1c1c1c] !font-red"
        hideProgressBar
        progressClassName="!bg-red"
      />
      <div className="fixed z-50 h-16 w-full bg-transparent py-14 md:hidden">
        <Divider className="fixed left-0 w-full border-red py-1" />
      </div>
      <SidebarOptionsProvider>
        {/* <SideBar /> */}
        <Main />
        <NoSsr>
          <BottomNav />
        </NoSsr>
      </SidebarOptionsProvider>
    </>
  );
}
