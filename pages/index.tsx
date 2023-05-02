"use client";

import Head from "next/head";
import BottomNav from "components/BottonNav";
import {  NoSsr } from "@mui/material";
import Main from "components/Main";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Martin GK</title>
        <meta name="description" content="Martin Gainza Koulaksezian CV" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/images/icon.jpg" />
      </Head>
      <Main />
      <NoSsr>
        <BottomNav />
      </NoSsr>
    </>
  );
}