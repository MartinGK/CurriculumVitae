import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsChat } from "react-icons/bs";
import { NavOptions } from "@constants";
import TopNavButton from "./TopNavButton";

const navLinks = {
  [NavOptions.ABOUT_ME]: '/about-me',
  [NavOptions.EXPERIENCES]: '/experiences',
  [NavOptions.SKILLS]: '/skills',
  [NavOptions.CONTACT]: '/contact',
}

const navIcons = {
  [NavOptions.ABOUT_ME]: <FaUser className="h-6 w-6" />,
  [NavOptions.EXPERIENCES]: <MdWork className="h-6 w-6" />,
  [NavOptions.SKILLS]: <GiSkills className="h-6 w-6" />,
  [NavOptions.CONTACT]: <BsChat className="h-6 w-6" />,
}

export default function TopNav({ itemSelected }) {
  return (
    <nav
      className="!hidden w-min md:!flex flex-row justify-start bg-black text-white border-b-[3px] border-solid border-transparent rounded-t-lg"
    >
      {Object.keys(navLinks).map(linkKey => {
        return <TopNavButton
          key={`link to ${linkKey}`}
          href={navLinks[linkKey]}
          label={linkKey}
          selected={itemSelected === linkKey}
          icon={navIcons[linkKey]}
        />
      })}
    </nav>
  );
};