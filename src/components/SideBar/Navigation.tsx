import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((item, i) => (
      <MenuItem i={i} key={i} Item={item} />
    ))}
  </motion.ul>
);

const itemIds = [FaUser, MdWork, GiSkills];
