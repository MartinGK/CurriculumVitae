import Image from "next/image";
import { NavOptions, navOptionsArray } from "@constants";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import cx from "classnames";
import Highlight from "components/Highlight";
import { BsGithub, BsStackOverflow, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

export const AboutMe = () => {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.div
      className={cx(
        "bg-card-1 bg-transparent px-5 pb-20 text-white md:rounded-b-md md:rounded-r-md md:px-0 md:h-[40rem] md:items-center z-10",
        {
          "!left-0": itemSelected === NavOptions.ABOUT_ME,
          hidden: itemSelected !== NavOptions.ABOUT_ME,
          flex: itemSelected === NavOptions.ABOUT_ME,
        }
      )}
      animate={{
        opacity: itemSelected === NavOptions.ABOUT_ME ? 1 : 0,
        x:
          itemSelected === NavOptions.ABOUT_ME
            ? 0
            : navOptionsArray.indexOf(itemSelected) >
              navOptionsArray.indexOf(NavOptions.ABOUT_ME)
              ? -300
              : 300,
      }}
      transition={{ type: "tween", stiffness: 100, bounce: 0 }}
    >
      <div className="overflow-auto px-5 pt-24 md:flex md:px-5 w-full md:pt-16">
        <div className="md:w-1/4">
          <Image
            alt="Foto perfil"
            src="/images/FotoPerfil.jpg"
            priority={true}
            width={300}
            height={300}
            quality={100}
            className="mx-auto mb-8 rounded-full border-4 border-red"
          />

          <div className="justify-between hidden md:flex">
            <Link href="https://github.com/MartinGK" target="__blank">
              <BsGithub className="ml-4 h-8 w-8 text-red" />
            </Link>
            <Link
              href="https://stackoverflow.com/users/12172697/martin-gainza-koulaksezian"
              target="__blank"
            >
              <BsStackOverflow className="h-8 w-8 text-red" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/martin-gainza-koulaksezian/"
              target="__blank"
            >
              <BsLinkedin className="mr-4 h-8 w-8 text-red" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:w-3/4 md:px-5">
          <div className="flex justify-center pt-5 md:px-5">
            <div className="w-5/8">
              <p className="text-base md:text-xl">
                Hi! <Highlight>I&apos;m Martin</Highlight>, I&apos;m from
                Argentina. I&apos;m{" "}
                <Highlight>an experienced developer in ReactJS.</Highlight>{" "}
                I&apos;m passionate about technology and I&apos;m{" "}
                <Highlight>always looking for new challenges.</Highlight> When I
                had to take a fullstack profile I usually used the MERN combo.
                I&apos;m a goal-oriented team player who enjoys learning new
                tech skills and keeping my team and myself up to date with the
                latest trends. I love working in teams and I believe I have the
                right set of soft skills to balance my technical skills and
                bring value to the projects I&apos;m entrusted with.
              </p>
            </div>
          </div>
          <div className="flex justify-between pb-2 pt-10 md:hidden">
            <Link href="https://github.com/MartinGK" target="__blank">
              <BsGithub className="ml-4 h-8 w-8 text-red" />
            </Link>
            <Link
              href="https://stackoverflow.com/users/12172697/martin-gainza-koulaksezian"
              target="__blank"
            >
              <BsStackOverflow className="h-8 w-8 text-red" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/martin-gainza-koulaksezian/"
              target="__blank"
            >
              <BsLinkedin className="mr-4 h-8 w-8 text-red" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
