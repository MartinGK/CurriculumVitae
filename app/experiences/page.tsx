'use client'
import { NavOptions, experiences, navOptionsArray } from "@constants";
import { motion } from "framer-motion";
import cx from "classnames";
import ExperienceCard from "../components/ExperienceCard";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { SidebarOptionsContext } from "contexts/sidebarOptionsContext";

export default observer(function Experiences() {

  return (
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
  );
});