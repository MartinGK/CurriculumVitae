import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsChat } from "react-icons/bs";
import { NavOptions, NavOption } from "@constants";
import TopNavButton from "./TopNavButton";

const navIcons = {
  "FaUser": <FaUser className="h-6 w-6" />,
  "MdWork": <MdWork className="h-6 w-6" />,
  "GiSkills": <GiSkills className="h-6 w-6" />,
  "BsChat": <BsChat className="h-6 w-6" />,
};

export default function TopNav({ itemSelected }) {
  return (
    <nav
      className="!hidden w-min md:!flex flex-row justify-start bg-black text-white border-b-[3px] border-solid border-transparent rounded-t-lg"
    >
      {NavOptions.options.map((navOpt: NavOption) => {
        return <TopNavButton
          key={`link to ${navOpt.segment}`}
          href={navOpt.link}
          label={navOpt.label}
          selected={itemSelected === navOpt.id}
          icon={navIcons[navOpt.icon]}
        />;
      })}
    </nav>
  );
};