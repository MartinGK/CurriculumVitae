import Pill from "components/Pill";
import { NavOptions, experiences } from "@constants";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import ExperienceCard from "components/ExperienceCard";

const Experiences = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.div
      className={cx("bg-card-1 rounded p-5 text-black", {
        hidden: itemSelected !== NavOptions.EXPERIENCES,
      })}
      animate={{
        opacity: itemSelected === NavOptions.EXPERIENCES ? 1 : 0,
        x: itemSelected === NavOptions.EXPERIENCES ? 0 : 500,
      }}
    >
      <h1 className="text-3xl">Experiences</h1>
      <div className="mt-5 flex">
        <div className="w-full grid gap-4">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </div>

      {/* Separar en porcentajes act (javascript) estilado y   */}
    </motion.div>
  );
};

export default Experiences;
