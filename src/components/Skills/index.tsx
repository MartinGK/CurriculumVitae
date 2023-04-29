import Stars from "components/Stars";
import { navOptionsArray, skills } from "@constants";
import { motion } from "framer-motion";
import { useContext, lazy, Suspense } from "react";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { NavOptions } from "@constants";
import cx from "classnames";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Highlight from "components/Highlight";

const Wordcloud = lazy(() => import("components/WordCloud"));

const Skills = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.article
      className={cx(
        "bg-card-1 flex w-full flex-col items-center rounded px-5 text-xl font-bold text-white",
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
      <div className="fixed z-50 h-16 w-full bg-black py-5">
        <h1 className="border-b-1 border-red px-5 text-3xl">Skills</h1>
      </div>

      <nav aria-label="secondary mailbox folders" className="w-full pt-20">
        <p>
          You can navigate through <Highlight>my stack of skills.</Highlight>
        </p>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Frontend" color="primary" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Backend" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Soft skills" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Testing" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Wordcloud />
      </Suspense>
{/* 
      <div className="my-20 ">
        <ul className="pt-6 font-normal">
          {skills.map((skill) => {
            return (
              <li className="flex " key={skill.text}>
                <span className="bg-grey-7 flex w-60 px-5">{skill.text}</span>
                <div className="flex w-32">
                  <Stars q={skill.value} />
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
      </div> */}
    </motion.article>
  );
};

export default Skills;
