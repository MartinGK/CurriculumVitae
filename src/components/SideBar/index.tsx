import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

import { useDimensions } from "helpers/useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const SideBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="align-center fixed z-50 flex h-full w-12 flex-col bg-black"
    >
      <div className="background" variants={sidebar} />
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation />
      {/* <div className="flex h-10 w-full items-center justify-center border-b-2 border-primary-1"> */}
      {/* <GiHamburgerMenu className="pointer" /> */}
      {/* </div> */}
    </motion.nav>
  );
};
