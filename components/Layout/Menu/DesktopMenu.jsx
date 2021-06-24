import Router from "next/router";
import { useState, useEffect } from "react";

import { Box, Grid, makeStyles } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import NavButton from "../Nav/NavButton";
import ActionButton from "../Nav/ActionButton";
import Search from "./Search";
import Filter from "./Filter";

import { useStore } from "../../../utils/store/store";

import tryLogoutUser from "../../../utils/requests/tryLogoutUser";

// site navigation, search (regex), filter (posts with tag(s))
const DesktopMenu = () => {
  const [loggedIn, setLoggedIn] = useStore((state) => [
    state.loggedIn,
    state.setLoggedIn,
  ]);

  const logIn = () => Router.push("/login");
  const logOut = () => tryLogoutUser(setLoggedIn);

  return (
    <Box width="100%" display={{ xs: "none", sm: "flex" }}>
      <NavButton label="archive" href="/" />
      <Search />
      <Filter />
      <NavButton label="bio" href="/bio" />
      <NavButton label="contact" href="/contact" />
      <Box ml="5px" display="flex" alignItems="center">
        <ActionButton
          label={loggedIn ? "logout" : "login"}
          onClick={loggedIn ? logOut : logIn}
        />
      </Box>
    </Box>
  );
};

export default DesktopMenu;

// <Box ml="5px" display="flex" alignItems="center">
//   {loggedIn ? (
//     <ActionButton label="logout" onClick={tryLogoutUser} />
//   ) : (
//     <ActionButton label="login" onClick={() => Router.push("/login")} />
//   )}
// </Box>
