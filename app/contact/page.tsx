"use client";
import { AiOutlineMail } from "react-icons/ai";
import Highlight from "../components/Highlight";
import ContactBox from "./ContactBox";

export default function Contact() {

  return (
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
  );
};
