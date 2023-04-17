import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen bg-footer-1">
      <div className="mx-15 flex justify-center pt-2 text-3xl">
        <AiFillGithub className="text-white " />
        <BsStackOverflow className="mx-20 text-orange-500" />
        <AiFillLinkedin className="text-blue-600" />
      </div>
      <div className="mx-15 flex justify-center py-2 text-3xl">
        <span className="flex justify-center text-base">
          MartinGK © Copyright 2023
        </span>
        <span className="px-5 text-base  flex justify-center">
          -
        </span>
        <a className="flex justify-center text-base text-blue-700" href="MartinKoulak@outlook.com">MartinKoulak@outlook.com</a>
      </div>
    </footer>
  );
};

export default Footer;
