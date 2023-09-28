
"use client";
import { skillsByGroup } from "@constants";
import { MdCircle } from "react-icons/md";
import { RxCircle } from "react-icons/rx";
import WordCloud from "components/WordCloud";

export default function Skills() {
  return (
    <>
      <WordCloud width={500} height={300} showControls />
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
    </>
  );
};