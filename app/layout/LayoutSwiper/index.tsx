
"use client";
import { ReactNode, useEffect, useState } from "react";
import { NavOptions, NavOptionsIDs } from "@constants";
import cx from "classnames";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  itemSelected: string;
}

const navStyles = {
  [NavOptionsIDs.ABOUT_ME]: " pb-20 md:rounded-b-md md:rounded-r-md md:px-0 md:h-[40rem] md:items-center z-10 !left-0 flex",
  [NavOptionsIDs.EXPERIENCES]: "  md:h-[40rem] overflow-auto z-10 !left-0",
  [NavOptionsIDs.CONTACT]: "z-10 flex flex-col overflow-auto rounded  md:h-[40rem] md:py-5 !left-0",
  [NavOptionsIDs.SKILLS]: "flex w-full flex-col items-center rounded text-xl font-bold md:h-[40rem] z-10 !left-0",

};

export default function LayoutSwiper({ children, itemSelected }: Props) {
  const { push } = useRouter();
  const [lastItemSelected, setLastItemSelected] = useState("");

  const onSwipedRight = () => {
    const currentIndex = NavOptions.getOptionByID(itemSelected).position;
    if (currentIndex > 0) {
      push(NavOptions.getOptionByPosition(currentIndex - 1).link);
    }
  };

  const onSwipedLeft = () => {
    const currentIndex = NavOptions.getOptionByID(itemSelected).position;
    if (currentIndex < NavOptions.length - 1) {
      push(NavOptions.getOptionByPosition(currentIndex + 1).link);
    }
  };

  const { ref: sectionRef, ...handlers } = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    trackMouse: true,
    preventScrollOnSwipe: false,
    swipeDuration: 2000,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLastItemSelected(itemSelected);
    }, 150);

    return () => clearInterval(timer);
  }, [itemSelected]);

  return (
    <div
      ref={sectionRef}
      className={cx(
        `bg-card-1 bg-transparent px-5 text-white duration-[0.5s] ${navStyles[itemSelected]}`,
        { "transition-[transform] ": itemSelected !== lastItemSelected },
        {
          "translate-x-80 opacity-0": NavOptions.getOptionPositionByID(itemSelected) >
            NavOptions.getOptionPositionByID(lastItemSelected)
        },
        {
          "-translate-x-80 opacity-0": NavOptions.getOptionPositionByID(itemSelected) <
            NavOptions.getOptionPositionByID(lastItemSelected)
        },
        { "transition-all opacity-1 translate-x-0": itemSelected === lastItemSelected },
      )}
      {...handlers}
    >
      {children}
    </div>
  );
}