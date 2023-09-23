
import { ReactNode, useEffect, useRef, useState } from "react";
import { NavOptions, NavOptionsIDs } from "@constants";
import { motion } from "framer-motion";
import cx from "classnames";
import { useSwipeable } from "react-swipeable";
import { redirect } from "next/navigation";

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
    const sectionContent = useRef();
    const [lastItemSelected, setLastItemSelected] = useState('');

    const onSwipedRight = () => {
        const currentIndex = NavOptions.getOptionByID(itemSelected).position;
        if (currentIndex > 0) {
            redirect(`/${NavOptions.getOptionByPosition(currentIndex - 1).segment}`)
        }
    }

    const onSwipedLeft = () => {
        const currentIndex = NavOptions.getOptionByID(itemSelected).position;
        if (currentIndex < NavOptions.length - 1) {
            redirect(`/${NavOptions.getOptionByPosition(currentIndex + 1).segment}`)
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft,
        onSwipedRight,
        trackMouse: true,
        preventScrollOnSwipe: false,
        swipeDuration: 2000,
    });

    // useEffect(() => {
    //     if (sectionContent && sectionContent.current) {
    //         sectionContent.current.scrollIntoView();
    //     }
    // }, [itemSelected]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLastItemSelected(itemSelected);
        }, 300)

        return () => clearInterval(timer)
    }, [itemSelected]);


    return (
        <div
            // ref={sectionContent}
            className={cx(
                `bg-card-1 bg-transparent px-5 text-white duration-[1s] ${navStyles[itemSelected]}`,
                { 'transition-[transform] ': itemSelected !== lastItemSelected },
                {
                    '-translate-x-80 opacity-0': NavOptions.getOptionPositionByID(itemSelected) >
                        NavOptions.getOptionPositionByID(lastItemSelected)
                }, {
                'translate-x-80 opacity-0': NavOptions.getOptionPositionByID(itemSelected) <
                NavOptions.getOptionPositionByID(lastItemSelected)
            },
                { 'transition-all opacity-1 translate-x-0': itemSelected === lastItemSelected },
            )}
            // transition={{ type: "tween", stiffness: 100, bounce: 0 }}
            {...handlers}
        >
            {children}
        </div>
    );
}