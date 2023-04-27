import {
  Button,
  ButtonProps,
  Divider,
  IconButton,
  TextField,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import cx from "classnames";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";
import { NavOptions } from "@constants";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#f50537"),
  backgroundColor: "#f50537",
  border: "1px solid #f50537",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export default function Contact() {
  const { itemSelected } = useContext(SidebarOptionsContext);

  return (
    <motion.div
      className={cx("bg-card-1 flex flex-col rounded px-5 text-black", {
        hidden: itemSelected !== NavOptions.CONTACT,
      })}
      animate={{
        opacity: itemSelected === NavOptions.CONTACT ? 1 : 0,
        x: itemSelected === NavOptions.CONTACT ? 0 : 500,
      }}
    >
      <div className="fixed z-50 h-16 w-full bg-black py-5">
        <h1 className="border-b-1 border-red text-3xl">Contact</h1>
        <Divider className="fixed left-0 w-screen border-red py-1" />
      </div>
      <div className="my-20 px-5">
        <p className="pb-5 tracking-widest">
          If you have any questions or have a challenge to present to me feel
          free to get in touch at the email address or by sending me a message
          below.
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
        <div className="grid flex-col gap-5  rounded-lg px-2 py-5 shadow-[0_0_10px_1px] shadow-red">
          <h3>Contact me</h3>
          <TextField
            color="primary"
            id="first-name"
            placeholder="First name"
            variant="standard"
            type="text"
          />
          <TextField
            color="primary"
            id="second-name"
            placeholder="Second name"
            variant="standard"
            type="text"
          />
          <TextField
            color="primary"
            id="email"
            placeholder="Email"
            variant="standard"
            type="email"
          />
          <TextField
            color="primary"
            id="message"
            placeholder="Message"
            variant="standard"
            multiline
            rows={4}
          />
          <IconButton
            aria-label="send message"
            color="primary"
            className="w-fit justify-self-end"
          >
            <AiOutlineSend className="ml-2 h-7 w-7 text-red" />
          </IconButton>
        </div>
      </div>
    </motion.div>
  );
}
