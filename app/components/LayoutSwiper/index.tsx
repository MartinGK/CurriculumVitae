import { ReactNode, useEffect, useState } from "react";
import { NavOptions, navOptionsArray } from "@constants";
import { motion } from "framer-motion";
import cx from "classnames";

type Props = {
    children: ReactNode;
    itemSelected: string;
}

const navStyles = {
    [NavOptions.ABOUT_ME]: " pb-20 md:rounded-b-md md:rounded-r-md md:px-0 md:h-[40rem] md:items-center z-10 !left-0 flex",
    [NavOptions.EXPERIENCES]: "  md:h-[40rem] overflow-scroll z-10 !left-0",
    [NavOptions.CONTACT]: "z-10 flex flex-col overflow-auto rounded   md:h-[40rem] md:py-5 !left-0",
    [NavOptions.SKILLS]: "flex w-full flex-col items-center rounded text-xl font-bold   md:h-[40rem] z-10 !left-0",

}

export default function LayoutSwiper({ children, itemSelected }: Props) {
    const [prevItemSelected, setPrevItemSelected] = useState('')
    const [test, setTest] = useState('')

    useEffect(() => {
        // if (prevItemSelected) {

        // } else {
        // }
            setPrevItemSelected(itemSelected)
        //     console.log(prevItemSelected)
        // console.log(itemSelected)
    }, [itemSelected])

    return (
        <motion.div
            className={`bg-card-1 bg-transparent px-5 text-white ${navStyles[itemSelected]}`}
            animate={{
                opacity: itemSelected === NavOptions.ABOUT_ME ? 1 : 0,
                x:
                    itemSelected === NavOptions.ABOUT_ME
                        ? 0
                        : navOptionsArray.indexOf(itemSelected) >
                            navOptionsArray.indexOf(NavOptions.ABOUT_ME)
                            ? -300
                            : 300,
            }}
            transition={{ type: "tween", stiffness: 100, bounce: 0 }}>
            {children}
        </motion.div>
    );
}