"use client";
import { experiences } from "@constants";
import ExperienceCard from "../components/ExperienceCard";

export default function Experiences() {
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
};