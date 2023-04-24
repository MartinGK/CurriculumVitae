import { NavOptions, birthDay } from "@constants";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { motion } from "framer-motion";
import { getYearsOld } from "helpers";
import { useContext } from "react";
import cx from "classnames";

export const AboutMe = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.div
      className={cx("bg-card-1 mx-10 rounded p-5 text-black", {
        "hidden": itemSelected !== NavOptions.ABOUT_ME,
      } )}
      animate={{
        opacity: itemSelected === NavOptions.ABOUT_ME ? 1 : 0,
        x: itemSelected === NavOptions.ABOUT_ME ? 0 : 500,
      }}
    >
      <h1 className="text-3xl">About me</h1>
      <div className="mt-5 flex justify-center">
        <div className="w-5/8">
          <p className="text-sm">
            Hi! I&apos;m Martin, I&apos;m {getYearsOld(birthDay)} years old and
            I&apos;m from Argentina. I&apos;m a frontend developer experienced
            in ReactJS developing web applications. I&apos;m passionate about
            technology and I&apos;m always looking for new challenges. When I
            had to take a fullstack profile I usually used the MERN combo.
            I&apos;m a goal-oriented team player who enjoys learning new tech
            skills and keeping my team and myself up to date with the latest
            trends. I love working in teams and I believe I have the right set
            of soft skills to balance my technical skills and bring value to the
            projects I&apos;m entrusted with.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
