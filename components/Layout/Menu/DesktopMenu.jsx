import Router from "next/router";

import { Box, Grid, makeStyles } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import NavButton from "../Nav/NavButton";
import ActionButton from "../Nav/ActionButton";
import Search from "./Search";
import Filter from "./Filter";

import { useStore } from "../../../utils/store/store";

import tryLogout from "../../../utils/requests/tryLogout";

// site navigation, search (regex), filter (posts with tag(s))
const DesktopMenu = () => {
  const { loggedIn, filter } = useStore();

  return (
    <Box width="100%" display={{ xs: "none", sm: "flex" }}>
      <NavButton label="archive" href="/" />
      <Search />
      <Filter />
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
