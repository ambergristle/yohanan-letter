import React from "react";

import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    textAlign: "center",
  },
}));

const LogoButton = () => {
  const classes = useStyles();

  return (
    <Box className={classes.logo}>
      <Typography variant="h4" color="textSecondary">
        The Yohanan Letter
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        No Ads. No Fees. No Bullshit.
      </Typography>
    </Box>
  );
};

export default LogoButton;
