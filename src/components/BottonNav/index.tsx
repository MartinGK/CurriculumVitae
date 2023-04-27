import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsChat } from "react-icons/bs";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors, NavOptions } from "@constants";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.black,
    "&$selected": {
      color: colors.red,
    },
    color: "white",
  },
  BottomNavigation: {
    color: colors.white,
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: colors.black,
  },
  selected: {},
}));

function BottomNav() {
  const { itemSelected, setSelectedItem } = useContext(SidebarOptionsContext);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setSelectedItem(newValue);
  };

  return (
    <BottomNavigation
      value={itemSelected}
      onChange={handleChange}
      classes={classes}
      className="fixed bottom-0 w-full bg-black text-white"
      showLabels
    >
      {itemSelected}
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
