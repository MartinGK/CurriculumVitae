"use client";

import React, { useContext } from "react";
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
    flexDirection: "row",
    borderBottomWidth: "0px",
    borderBottom: "3px solid transparent",
    // borderColor: "transparent",
    borderTopLeftRadius:"0.5rem",
    borderTopRightRadius:"0.5rem",
    width:'35rem',
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
    color: colors.white,
  },
  selected: {},
}));

const classes = useStyles();


function TopNav() {
  const { itemSelected, setItemSelected } = useContext(SidebarOptionsContext);


  const handleChange = (event, newValue) => {
    setItemSelected(newValue);
  };

  return (
    <BottomNavigation
      value={itemSelected}
      onChange={handleChange}
      classes={classes}
      className="hidden w-full justify-start bg-black text-white md:flex "
      showLabels
    >
      <BottomNavigationAction
        value={NavOptions.ABOUT_ME}
        label={"About me"}
        showLabel={itemSelected !== NavOptions.ABOUT_ME}
        classes={classes}
        color="white"
        icon={<FaUser className="h-6 w-6" />}
      />
      <BottomNavigationAction
        value={NavOptions.EXPERIENCES}
        label={"Experiences"}
        showLabel={itemSelected !== NavOptions.EXPERIENCES}
        classes={classes}
        color="white"
        icon={<MdWork className="h-6 w-6" />}
      />
      <BottomNavigationAction
        value={NavOptions.SKILLS}
        label={"Skills"}
        showLabel={itemSelected !== NavOptions.SKILLS}
        classes={classes}
        color="white"
        icon={<GiSkills className="h-6 w-6" />}
      />
      <BottomNavigationAction
        value={NavOptions.CONTACT}
        label={"Contact"}
        showLabel={itemSelected !== NavOptions.CONTACT}
        classes={classes}
        color="white"
        icon={<BsChat className="h-6 w-6" />}
      />
    </BottomNavigation>
  );
}



export default TopNav;
