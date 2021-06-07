import Router from "next/router";
import Cookies from "universal-cookie";

import { Box, Grid, makeStyles } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import NavButton from "../Nav/NavButton";
import ActionButton from "../Nav/ActionButton";
import Search from "./Search";

import tryLogout from "../../../utils/requests/tryLogout";

const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  tagFilters: { width: "50%" },
}));

// site navigation, search (regex), filter (posts with tag(s))
const DesktopMenu = () => {
  const { tagFilters } = useStyles();

  const loggedIn = cookies.get("lia");

  return (
    <Box width="100%" display={{ xs: "none", sm: "flex" }}>
      <NavButton label="archive" href="/" />
      <Search />
      <Grid container className={tagFilters}></Grid>
      <NavButton label="bio" href="/bio" />
      <NavButton label="contact" href="/contact" />
      <NavButton label="publish" href="/publish" />
    </Box>
  );
};

export default DesktopMenu;

// <Box ml="5px" display="flex" alignItems="center">
//   {loggedIn ? (
//     <ActionButton label="logout" onClick={tryLogout} />
//   ) : (
//     <ActionButton label="login" onClick={() => Router.push("/login")} />
//   )}
// </Box>
