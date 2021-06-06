import { Box, Typography, makeStyles } from "@material-ui/core";

import LogoutButton from "./LogoutButton";

const useStyles = makeStyles((theme) => ({
  logo: {
    textAlign: "center",
  },
  logout: {
    position: "absolute",
    top: "10%",
    right: "0",
  },
}));

// enable use of logo as link; handle centering
const LogoButton = () => {
  const classes = useStyles();

  return (
    <Box className={classes.logo}>
      <Typography variant="h4" color="textSecondary">
        The Yohanan Letter
        <LogoutButton className={classes.logout} />
      </Typography>

      <Typography variant="subtitle2" color="textSecondary">
        No Ads. No Fees. No Bullshit.
      </Typography>
    </Box>
  );
};

export default LogoButton;
