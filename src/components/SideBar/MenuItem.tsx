import { motion } from "framer-motion";
import { useContext } from "react";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, Item }) => {
  const { itemSelected, setSelectedItem } = useContext(SidebarOptionsContext);

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="icon-placeholder flex h-12 items-center justify-center bg-secondary-1"
      >
        <Item className="h-8 w-8  text-primary-1" />
      </div>
      <div className="text-placeholder" />
    </motion.li>
  );
};
