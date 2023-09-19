"use client";

import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsChat } from "react-icons/bs";
import { BottomNavigation, BottomNavigationAction, styled } from "@mui/material";

import { colors, NavOptions } from "@constants";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  root: {
    backgroundColor: colors.red,
    "&$selected": {
      color: colors.white,
    },
      color: colors.white,
    },
    color: colors.white,
});


function BottomNav() {
  const { itemSelected, setItemSelected } = useContext(SidebarOptionsContext);

  const handleChange = (_, newValue: string) => {
    setItemSelected(newValue);
  };

  return (
    <BottomNavigation
      value={itemSelected}
      onChange={handleChange}
      className="!fixed bottom-0 z-10 w-full bg-black text-white md:!hidden"
    >
      <StyledBottomNavigationAction
        value={NavOptions.ABOUT_ME}
        aria-label={NavOptions.ABOUT_ME}
        color="white"
        icon={<FaUser className="h-6 w-6" />}
      />
      <StyledBottomNavigationAction
        value={NavOptions.EXPERIENCES}
        aria-label={NavOptions.EXPERIENCES}
        color="white"
        icon={<MdWork className="h-6 w-6"/>}
      />
      <StyledBottomNavigationAction
        value={NavOptions.SKILLS}
        aria-label={NavOptions.SKILLS}
        color="white"
        icon={<GiSkills className="h-6 w-6" />}
      />
      <StyledBottomNavigationAction
        value={NavOptions.CONTACT}
        aria-label={NavOptions.CONTACT}
        color="white"
        icon={<BsChat className="h-6 w-6" />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
