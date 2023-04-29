"use client";

import Head from "next/head";
import Skills from "components/Skills";
import Experiences from "components/Experiences";
import AboutMe from "components/AboutMe";
import { SideBar } from "components/SideBar";
import {
  SidebarOptionsContext,
  SidebarOptionsProvider,
} from "contexts/SidebarOptionsContext";
import BottomNav from "components/BottonNav";
import Contact from "components/Contact";
import { Divider, NoSsr } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import { useContext, useEffect } from "react";
import { NavOptions } from "@constants";
import Main from "components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin GK</title>
        <meta name="description" content="Martin Gainza Koulaksezian CV" />
        <link rel="icon" href="/images/FotoPerfil.jpg" />
      </Head>

      <div className="fixed z-50 h-16 w-full bg-transparent py-14">
        <Divider className="fixed left-0 w-screen border-red py-1" />
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
