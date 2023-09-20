import { colors } from "@constants";
import { Divider, NoSsr } from "@mui/material";
import AboutMe from "components/AboutMe";
import Loader from "components/Loader";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { observer } from "mobx-react-lite";
import React, { Suspense, lazy, useContext, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const Contact = lazy(() => import("components/Contact"));
const Experiences = lazy(() => import("components/Experiences"));
const Skills = lazy(() => import("components/Skills"));
const TopNav = lazy(() => import("components/TopNav"));

export default observer(function Main() {
  const sidebarOptions = useContext(SidebarOptionsContext)
  const { onSwipedRight, onSwipedLeft, itemSelected } = sidebarOptions;
  const mainRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    trackMouse: true,
    preventScrollOnSwipe: false,
    swipeDuration: 2000,
  });

  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, [itemSelected]);

  return (
    <>
      <div className="h-18 !fixed z-20 w-full bg-black pt-6 md:!hidden">
        <h1 className="pb-2 pl-8 text-3xl">{itemSelected}</h1>
        <Divider className="left-0 w-full" color={colors.red} />
      </div>
      <div
        className="absolute h-screen overflow-scroll bg-black md:relative md:bg-[#1a1a1a]"
        {...handlers}
      >
        <main
          className="bg-background-1 md:border-1 relative flex justify-center bg-transparent md:m-28 md:flex-col"
          ref={mainRef}
        >
          <NoSsr>
            <Suspense fallback={<Loader />}>
              <TopNav />
            </Suspense>
          </NoSsr>
          <div className="bg-card-1 z-1 absolute mt-14 hidden w-full bg-black px-5 pb-20 text-white md:flex md:h-[40rem] md:items-center md:rounded-b-md md:rounded-r-md md:px-0" />
          <AboutMe />
          <Suspense fallback={<Loader />}>
            <Experiences />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </>
  );
});
