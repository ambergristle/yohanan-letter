import { AppBar, Toolbar, Box, makeStyles } from "@material-ui/core";

import LogoButton from "./Nav/LogoButton";
import MobileMenu from "./Menu/MobileMenu";
import DesktopMenu from "./Menu/DesktopMenu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
    backgroundColor: "rgba(34, 34, 34, 1)",
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  toolbar: { justifyContent: "space-around" },
  mobileMenu: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopMenu: {
    width: "100%",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="transparent" className={classes.appbar}>
      <LogoButton />
      <Toolbar className={classes.toolbar}>
        <Box className={classes.desktopMenu}>
          <DesktopMenu />
        </Box>
        <Box className={classes.mobileMenu}>
          <MobileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
