"use client";
import { NavOption, NavOptions, NavOptionsIDsValues } from "@constants";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsChat } from "react-icons/bs";
import BottomNavButton from "./BottomNavButton";

const navIcons = {
  "FaUser": <FaUser className="h-6 w-6" />,
  "MdWork": <MdWork className="h-6 w-6" />,
  "GiSkills": <GiSkills className="h-6 w-6" />,
  "BsChat": <BsChat className="h-6 w-6" />,
};

export default function BottomNav() {
  const segment = useSelectedLayoutSegment();
  const itemSelected: NavOptionsIDsValues = NavOptions.getOptionIDBySegment(segment);

  return (
    <nav
      className="!fixed bottom-0 z-10 w-full bg-black text-white md:!hidden flex justify-evenly"
    >
      {NavOptions.options.map((navOpt: NavOption) => {
        return <BottomNavButton
          key={`link to ${navOpt.segment}`}
          href={navOpt.link}
          label={navOpt.title}
          selected={itemSelected === navOpt.id}
          icon={navIcons[navOpt.icon]}
        />;
      })}
    </nav>
  );
};
