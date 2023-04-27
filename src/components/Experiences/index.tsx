import { NavOptions, experiences } from "@constants";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import ExperienceCard from "components/ExperienceCard";
import { Divider } from "@mui/material";

const Experiences = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.div
      className={cx("bg-card-1 px-5 text-black", {
        hidden: itemSelected !== NavOptions.EXPERIENCES,
      })}
      animate={{
        opacity: itemSelected === NavOptions.EXPERIENCES ? 1 : 0,
        x: itemSelected === NavOptions.EXPERIENCES ? 0 : 500,
      }}
    >
      <div className="h-16 fixed py-5 bg-black w-full z-50">
        <h1 className="border-b-1 border-red text-3xl">Experiences</h1>
        <Divider className="fixed left-0 w-screen border-red py-1" />
      </div>
      <div className="my-20 flex px-5">
        <div className="grid w-full gap-4">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.title}
              title={exp.titleH}
              description={exp.descriptionH}
            />
          ))}
        </div>
      </div>

      {/* Separar en porcentajes act (javascript) estilado y   */}
    </motion.div>
  );
};

export default Experiences;
