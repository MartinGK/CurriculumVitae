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
    backgroundColor: colors.black,
    color: colors.white,
    flexDirection: "row",
    borderBottomWidth: "0px",
    borderBottom: "3px solid transparent",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    width: "35rem",
    "&$selected": {
      color: colors.red,
      borderColor: colors.red,
      borderBottom: "3px solid",
      width: "fit-content",
      transition: "border-color 1s cubic-bezier(0.22, 0.61, 0.36, 1)",
    },
    "& svg": {
      marginRight: "0.5rem",
    },
  },
});

function TopNav() {
  const { itemSelected, setItemSelected } = useContext(SidebarOptionsContext);


  const handleChange = (_, newValue) => {
    setItemSelected(newValue);
  };

  return (
    <BottomNavigation
      value={itemSelected}
      onChange={handleChange}
      className="!hidden w-full justify-start bg-black text-white md:!flex "
      showLabels
    >
      <StyledBottomNavigationAction
        value={NavOptions.ABOUT_ME}
        label={NavOptions.ABOUT_ME}
        aria-label={NavOptions.ABOUT_ME}
        showLabel={itemSelected !== NavOptions.ABOUT_ME}
        color="white"
        icon={<FaUser className="h-6 w-6" />}
      />
      <StyledBottomNavigationAction
        value={NavOptions.EXPERIENCES}
        label={NavOptions.EXPERIENCES}
        aria-label={NavOptions.EXPERIENCES}
        showLabel={itemSelected !== NavOptions.EXPERIENCES}
        color="white"
        icon={<MdWork className="h-6 w-6" />}
      />
      <StyledBottomNavigationAction
        value={NavOptions.SKILLS}
        label={NavOptions.SKILLS}
        aria-label={NavOptions.SKILLS}
        showLabel={itemSelected !== NavOptions.SKILLS}
        color="white"
        icon={<GiSkills className="h-6 w-6" />}
      />
      <StyledBottomNavigationAction
        value={NavOptions.CONTACT}
        label={NavOptions.CONTACT}
        aria-label={NavOptions.CONTACT}
        showLabel={itemSelected !== NavOptions.CONTACT}
        color="white"
        icon={<BsChat className="h-6 w-6" />}
      />
    </BottomNavigation>
  );
}

export default TopNav;
