import Image from "next/image";
import Stars from "components/Stars";
import { skills } from "@constants";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { NavOptions } from "@constants";
import cx from "classnames";

const Skills = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.article
      className={cx(
        "bg-card-1 flex w-full flex-col items-center rounded py-10 text-xl font-bold text-white",
        {
          hidden: itemSelected !== NavOptions.SKILLS,
        }
      )}
      animate={{
        opacity: itemSelected === NavOptions.SKILLS ? 1 : 0,
        x: itemSelected === NavOptions.SKILLS ? 0 : 500,
      }}
    >
      <Image
        alt="Imagen pendiente"
        src="/images/FotoPerfil.jpg"
        width={200}
        height={200}
        quality={100}
        className="border-red  rounded-full border-4"
      />
      <h2 className="text-2xl">Martin Gainza Koulaksezian</h2>
      <div>
        <ul className="px-10 pt-6 font-normal">
          {skills.map((skill) => {
            return (
              <li className="flex " key={skill.skill}>
                <span className="bg-grey-7 mr-10 flex w-72 justify-center px-5">
                  {skill.skill}
                </span>
                <div className="flex w-32">
                  <Stars q={skill.q} />
                </div>
              </li>
            );
          })}

          <li className="flex ">
            <span className="bg-grey-10 mr-10 flex w-72 items-center justify-center px-5">
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
