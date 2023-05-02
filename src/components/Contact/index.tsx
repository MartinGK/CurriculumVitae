import { motion } from "framer-motion";
import React, { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import cx from "classnames";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { NavOptions, navOptionsArray } from "@constants";
import Highlight from "components/Highlight";
import ContactBox from "./ContactBox";

export default function Contact() {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.div
      className={cx("bg-card-1 flex flex-col rounded px-5 text-white bg-transparent md:h-[40rem] overflow-auto md:py-5 z-10", {
        "!left-0": itemSelected === NavOptions.CONTACT,
        hidden: itemSelected !== NavOptions.CONTACT,
      })}
      animate={{
        opacity: itemSelected === NavOptions.CONTACT ? 1 : 0,
        x:
          itemSelected === NavOptions.CONTACT
            ? 0
            : navOptionsArray.indexOf(itemSelected) >
              navOptionsArray.indexOf(NavOptions.CONTACT)
            ? -300
            : 300,
      }}
      transition={{ type: "tween", stiffness: 100, bounce: 0 }}
    >
      <div className="fixed z-50 h-16 w-full bg-black py-5 md:hidden">
        <h1 className="border-b-1 border-red text-3xl">Contact</h1>
      </div>
      <div className="my-20 px-5 md:my-0 md:py-5">
        <p className="pb-5 tracking-widest">
          <Highlight>If you have</Highlight> any questions or have{" "}
          <Highlight>a challenge</Highlight> to present to me feel free to{" "}
          <Highlight>get in touch</Highlight> at the email address or by sending
          me a message below.
        </p>
        <div className="flex w-full justify-between">
          <a
            href="mailto:MartinKoulak@outlook.com"
            className="flex items-center justify-start pb-5"
          >
            <AiOutlineMail className="mr-2 h-5 w-5 text-red " />{" "}
            MartinKoulak@outlook.com
          </a>
        </div>
        <ContactBox />
      </div>
    </motion.div>
  );
}
