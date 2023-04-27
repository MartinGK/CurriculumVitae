import Stars from "components/Stars";
import { skills } from "@constants";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { NavOptions } from "@constants";
import cx from "classnames";
import { Divider } from "@mui/material";

const Skills = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.article
      className={cx(
        "bg-card-1 flex w-full flex-col items-center rounded px-5 text-xl font-bold text-white",
        {
          hidden: itemSelected !== NavOptions.SKILLS,
        }
      )}
      animate={{
        opacity: itemSelected === NavOptions.SKILLS ? 1 : 0,
        x: itemSelected === NavOptions.SKILLS ? 0 : 500,
      }}
    >
    <div className="h-16 fixed py-5 bg-black w-full z-50">
      <h1 className="border-b-1 border-red text-3xl px-5">Skills</h1>
      <Divider className="fixed left-0 w-screen border-red py-1" />
    </div>
      <div className="my-20 ">
        <ul className="pt-6 font-normal">
          {skills.map((skill) => {
            return (
              <li className="flex " key={skill.skill}>
                <span className="bg-grey-7 flex w-60 px-5">{skill.skill}</span>
                <div className="flex w-32">
                  <Stars q={skill.q} />
                </div>
              </li>
            );
          })}

          <li className="flex ">
            <span className="bg-grey-10 flex w-60 items-center px-5">
              English
            </span>
            <span className="text-bold flex w-32 text-base">
              Upper-Intermediate
            </span>
          </li>
        </ul>
      </div>
    </motion.article>
  );
};

export default Skills;
