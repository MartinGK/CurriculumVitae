import { NoSsr } from "@mui/material";
import AboutMe from "components/AboutMe";
import Contact from "components/Contact";
import Experiences from "components/Experiences";
import Skills from "components/Skills";
import TopNav from "components/TopNav";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import React, { useContext } from "react";
import { useSwipeable } from "react-swipeable";

export default function Main() {
  const { onSwipedRight, onSwipedLeft } = useContext(SidebarOptionsContext);

  const handlers = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    trackMouse: true,
    preventScrollOnSwipe: false,
    swipeDuration: 2000,
  });

  return (
    <div
      className="absolute h-screen overflow-scroll bg-black md:relative md:bg-[#1a1a1a]"
      {...handlers}
    >
      <main className="bg-background-1 md:border-1 relative flex justify-center bg-transparent md:m-28 md:flex-col">
        <NoSsr>
          <TopNav />
        </NoSsr>
        <div className="hidden md:flex bg-card-1 absolute bg-black px-5 mt-14 pb-20 text-white md:h-[40rem] w-full z-1 md:items-center md:rounded-b-md md:rounded-r-md md:px-0" />
        <AboutMe />
        <Experiences />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
