import Image from "next/image";
import { NavOptions, navOptionsArray } from "@constants";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import cx from "classnames";
import Highlight from "components/Highlight";

export const AboutMe = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.div
      className={cx("bg-card-1 px-5 text-black fixed", {
        '!left-0':itemSelected === NavOptions.ABOUT_ME,
        hidden: itemSelected !== NavOptions.ABOUT_ME,
      })}
      animate={{
        opacity: itemSelected === NavOptions.ABOUT_ME ? 1 : 0,
        x: itemSelected === NavOptions.ABOUT_ME ? 0 :  navOptionsArray.indexOf(itemSelected) > navOptionsArray.indexOf(NavOptions.ABOUT_ME) ? -300 : 300,
      }}
      transition={{ type: "tween", stiffness: 100, bounce:0 }}
    >
    <div className="fixed z-50 h-16 w-full bg-black py-5">
      <h1 className="border-b-1 border-red text-3xl">About me</h1>
    </div>
    <div className="my-24 px-5">
      <Image
        alt="Foto perfil"
        src="/images/FotoPerfil.jpg"
        priority={true}
        width={200}
        height={200}
        quality={100}
        className="rounded-full border-4 border-red mx-auto mb-8"
      />
      <div className="mt-5 flex justify-center">
        <div className="w-5/8">
          <p className="text-sm">
            Hi! <Highlight>I&apos;m Martin</Highlight>, I&apos;m from Argentina. I&apos;m <Highlight>an 
            experienced developer in ReactJS.</Highlight> I&apos;m passionate about
            technology and I&apos;m <Highlight>always looking for new challenges.</Highlight> When I
            had to take a fullstack profile I usually used the MERN combo.
             I&apos;m a goal-oriented team player who enjoys learning new tech
            skills and keeping my team and myself up to date with the latest
            trends. I love working in teams and I believe I have the right set
            of soft skills to balance my technical skills and bring value to the
            projects I&apos;m entrusted with.
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutMe;
