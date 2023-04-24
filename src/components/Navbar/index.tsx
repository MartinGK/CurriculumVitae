import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors, NavOptions } from "@constants";
import { SidebarOptionsContext } from "contexts/SidebarOptionsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    color: colors.white,
    backgroundColor: colors.black,
    "&$selected": {
      color: colors.red,
    },
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
    <BottomNavigation value={itemSelected} onChange={handleChange} classes={classes}>
      {itemSelected}
      <BottomNavigationAction
        label="Profile"
        value={NavOptions.ABOUT_ME}
        classes={classes}
        icon={<FaUser />}
      />
      <BottomNavigationAction
        label="Experiences"
        value={NavOptions.EXPERIENCES}
        classes={classes}
        icon={<MdWork />}
      />
      <BottomNavigationAction
        label="Skills"
        value={NavOptions.SKILLS}
        classes={classes}
        icon={<GiSkills />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
