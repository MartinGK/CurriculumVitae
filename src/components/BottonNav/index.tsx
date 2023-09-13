"use client";

import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsChat } from "react-icons/bs";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors, NavOptions } from "@constants";
import { SidebarOptionsContext } from "contexts/sidebarOptionsContext";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.black,
    "&$selected": {
      color: colors.red,
    },
    color: colors.white,
  },
  selected: {},
}));

function BottomNav() {
  const { itemSelected, setItemSelected } = useContext(SidebarOptionsContext);
  const classes = useStyles();

  const handleChange = (_, newValue) => {
    setItemSelected(newValue);
  };

  return (
    <BottomNavigation
      value={itemSelected}
      onChange={handleChange}
      classes={classes}
      className="!fixed bottom-0 z-10 w-full bg-black text-white md:!hidden"
      showLabels
    >
      <BottomNavigationAction
        value={NavOptions.ABOUT_ME}
        classes={classes}
        color="white"
        icon={<FaUser className="h-6 w-6" />}
      />
      <BottomNavigationAction
        value={NavOptions.EXPERIENCES}
        classes={classes}
        color="white"
        icon={<MdWork className="h-6 w-6" />}
      />
      <BottomNavigationAction
        value={NavOptions.SKILLS}
        classes={classes}
        color="white"
        icon={<GiSkills className="h-6 w-6" />}
      />
      <BottomNavigationAction
        value={NavOptions.CONTACT}
        classes={classes}
        color="white"
        icon={<BsChat className="h-6 w-6" />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
