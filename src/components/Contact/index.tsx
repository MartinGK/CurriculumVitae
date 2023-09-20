import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import cx from "classnames";
import { NavOptions, navOptionsArray } from "@constants";
import Highlight from "components/Highlight";
import ContactBox from "./ContactBox";
import { observer } from "mobx-react-lite";
import { SidebarOptions } from "store/sidebarOptions";

type ContactProps = {
  sidebarOptions: SidebarOptions
}

export default observer(function Contact({ sidebarOptions }: ContactProps) {
  const { itemSelected } = sidebarOptions;

  return (
    <motion.div
      className={cx(
        "bg-card-1 z-10 flex flex-col overflow-auto rounded bg-transparent px-5 text-white md:h-[40rem] md:py-5",
        {
          "!left-0": itemSelected === NavOptions.CONTACT,
          hidden: itemSelected !== NavOptions.CONTACT,
        }
      )}
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
});
