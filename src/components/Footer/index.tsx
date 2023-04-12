import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-black w-screen">
      <div className="mx-15 flex justify-center text-4xl">
        <AiFillGithub className="text-white " />
        <BsStackOverflow className="mx-20 text-orange-500" />
        <AiFillLinkedin className="text-blue-600" />
      </div>
      <span className="flex justify-center pt-5 text-base">
        MartinGK © Copyright 2023
      </span>
    </footer>
  );
};

export default Footer;
