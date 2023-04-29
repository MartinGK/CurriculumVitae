"use client";

import { colors, skills } from "@constants";
import { NoSsr } from "@mui/material";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import { TagCloud } from "react-tagcloud";

export const skillsB = [
  { value: "ReactJS", count: 5 },
  { value: "NextJs", count: 5 },
  { value: "Redux", count: 5 },
  { value: "Testing Library", count: 5 },
  { value: "Javascript", count: 5 },
  { value: "CSS3", count: 5 },
  { value: "SASS", count: 5 },
  { value: "TailwindCSS", count: 5 },
  { value: "NodeJS", count: 4 },
  { value: "Express", count: 4 },
  { value: "MongoDB", count: 4 },
  { value: "Jest", count: 3 },
  { value: "Communication", count: 5 },
  { value: "Agile Methodology", count: 5 },
];
const Wordcloud = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const options = {
    colors: [colors.red],
    rotations: 0,
    padding: 5,
    fontWeight: "bold",
    fontFamily: "Audi",
    transitionDuration: 1000,
  };

  return (
    <div className="relative self-start">
      <div style={{ height: 600, width: 300 }} className="absolute left-0">
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={skillsB}
          colorOptions={{
            hue: colors.red,
            luminosity: "dark",
          }}
        />
        {/* <ReactWordcloud options={options} words={skills} /> */}
      </div>
    </div>
  );
};

export default Wordcloud;
