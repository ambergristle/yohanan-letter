import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

import LogoButton from "./Nav/LogoButton";
import MobileMenu from "./Menu/MobileMenu";
import DesktopMenu from "./Menu/DesktopMenu";

// adjust AppBar styling to accomodate logo, add responsiveness
// switch to grid?
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
}));

// wrap desktop and mobile menus
const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="transparent" className={classes.appbar}>
      <LogoButton />
      <Toolbar className={classes.toolbar}>
        <DesktopMenu />
        <MobileMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
