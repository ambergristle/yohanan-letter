import React from "react";

import { Box, Grid, makeStyles } from "@material-ui/core";

import NavButton from "../Nav/NavButton";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  tags: { flexGrow: 1 },
}));

const DesktopMenu = () => {
  const classes = useStyles();
  return (
    <Box width="100%" display={{ xs: "none", sm: "flex" }}>
      <NavButton label="archive" href="/" />
      <Search />
      <Grid container className={classes.tags}></Grid>
      <NavButton label="bio" href="/bio" />
      <NavButton label="contact" href="/contact" />
    </Box>
  );
};

export default DesktopMenu;
