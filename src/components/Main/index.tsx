import { colors } from "@constants";
import { Divider, NoSsr } from "@mui/material";
import AboutMe from "components/AboutMe";
import Contact from "components/Contact";
import Experiences from "components/Experiences";
import Skills from "components/Skills";
import TopNav from "components/TopNav";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import React, { useContext, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    borderColor: colors.red,
  },
}));

export default function Main() {
  const { onSwipedRight, onSwipedLeft } = useContext(SidebarOptionsContext);
  const { itemSelected } = useContext(SidebarOptionsContext);
  const classes = useStyles();

  const handlers = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    trackMouse: true,
    preventScrollOnSwipe: false,
    swipeDuration: 2000,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemSelected]);

  return (
    <>
      <div className="h-18 !fixed z-20 w-full bg-black pt-6 md:!hidden">
        <h1 className="pl-8 text-3xl">{itemSelected}</h1>
        <Divider className="left-0 w-full !border-red py-1" classes={classes} />
      </div>
      <div
        className="absolute h-screen overflow-scroll bg-black md:relative md:bg-[#1a1a1a]"
        {...handlers}
      >
        <main className="bg-background-1 md:border-1 relative flex justify-center bg-transparent md:m-28 md:flex-col">
          <NoSsr>
            <TopNav />
          </NoSsr>
          <div className="bg-card-1 z-1 absolute mt-14 hidden w-full bg-black px-5 pb-20 text-white md:flex md:h-[40rem] md:items-center md:rounded-b-md md:rounded-r-md md:px-0" />
          <AboutMe />
          <Experiences />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}
