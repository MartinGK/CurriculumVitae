import AboutMe from "components/AboutMe";
import Contact from "components/Contact";
import Experiences from "components/Experiences";
import Skills from "components/Skills";
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
    <div className="absolute h-screen overflow-scroll" {...handlers}>
      <main className="bg-background-1 flex justify-center relative">
        <AboutMe />
        <Experiences />
        <Skills />
        <Contact />
      </main>
   </div>
  );
}
