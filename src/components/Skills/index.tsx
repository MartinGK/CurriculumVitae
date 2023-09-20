import { navOptionsArray, skillsByGroup } from "@constants";
import { motion } from "framer-motion";
import { useContext, } from "react";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { NavOptions } from "@constants";
import cx from "classnames";
import { MdCircle } from "react-icons/md";
import { RxCircle } from "react-icons/rx";
import { observer } from "mobx-react-lite";

export default observer(function Skills() {
  const sidebarOptions = useContext(SidebarOptionsContext);
  const { itemSelected } = sidebarOptions;
  
  return (
    <motion.article
      className={cx(
        "bg-card-1 flex w-full flex-col items-center rounded px-5 text-xl font-bold text-white bg-transparent md:h-[40rem] z-10",
        {
          "!left-0": itemSelected === NavOptions.SKILLS,
          hidden: itemSelected !== NavOptions.SKILLS,
        }
      )}
      animate={{
        opacity: itemSelected === NavOptions.SKILLS ? 1 : 0,
        x:
          itemSelected === NavOptions.SKILLS
            ? 0
            : navOptionsArray.indexOf(itemSelected) >
              navOptionsArray.indexOf(NavOptions.SKILLS)
              ? -300
              : 300,
      }}
      transition={{ type: "tween", stiffness: 100, bounce: 0 }}
    >
      <div className="w-full pt-20 pl-4 grid grid-cols-2 md:grid-cols-3 pb-20 md:py-5">
        {Object.keys(skillsByGroup).map((group) => {
          return (
            <ul className="flex text-base w-full" key={group}>
              <li className="flex flex-col w-full pt-4">
                <span className="flex  items-center w-full">
                  <MdCircle className="h-3 w-3 text-red mr-2" />
                  {group}
                </span>
                <ul>
                  {skillsByGroup[group].map((skill) => {
                    return (
                      <li className="flex items-center pl-5" key={skill.name}>
                        <RxCircle className="h-2 w-2 text-red mr-2" /> {skill.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          );
        })}
      </div>
    </motion.article>
  );
});