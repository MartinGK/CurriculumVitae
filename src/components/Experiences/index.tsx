import { NavOptions, experiences, navOptionsArray } from "@constants";
import { SidebarOptionsContext } from "contexts/sidebarOptionsContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import ExperienceCard from "components/ExperienceCard";

const Experiences = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.div
      className={cx("bg-card-1  px-5 text-white bg-transaprent md:h-[40rem] overflow-scroll z-10 ", {
        "!left-0": itemSelected === NavOptions.EXPERIENCES,
        hidden: itemSelected !== NavOptions.EXPERIENCES,
      })}
      animate={{
        opacity: itemSelected === NavOptions.EXPERIENCES ? 1 : 0,
        x:
          itemSelected === NavOptions.EXPERIENCES
            ? 0
            : navOptionsArray.indexOf(itemSelected) >
              navOptionsArray.indexOf(NavOptions.EXPERIENCES)
              ? -300
              : 300,
      }}
      transition={{ type: "tween", stiffness: 100, bounce: 0 }}
    >
      <div className="my-20 flex px-5">
        <div className="grid w-full gap-4 overflow-auto md:grid-cols-2">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.title}
              title={exp.titleH}
              description={exp.descriptionH}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experiences;
