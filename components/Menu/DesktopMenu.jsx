import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import NavButton from "../Nav/NavButton";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  tags: { flexGrow: 1 },
}));

const DesktopMenu = () => {
  const classes = useStyles();
  return (
    <>
      <NavButton label="archive" href="/" />
      <Search />
      <Grid container className={classes.tags}></Grid>
      <NavButton label="bio" href="/bio" />
      <NavButton label="contact" href="/contact" />
    </>
  );
};

export default DesktopMenu;
