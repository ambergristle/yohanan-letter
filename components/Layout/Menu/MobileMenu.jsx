import { useState, useRef, useEffect } from "react";

import {
  Box,
  Popper,
  Paper,
  MenuList,
  ClickAwayListener,
  Grow,
  IconButton,
} from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import Search from "./Search";
import NavMenuItem from "../Nav/NavMenuItem";

// site navigation, search (regex); popup mobile menu
const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuAnchorRef = useRef(null);
  const menuWasOpen = useRef(menuOpen);

  // toggle menu visibility
  const handleMenuOpen = () => {
    setMenuOpen((menuWasOpen) => !menuWasOpen);
  };
  const handleMenuClose = (event) => {
    if (menuAnchorRef.current && menuAnchorRef.current.contains(event.target)) {
      return;
    }
    setMenuOpen(false);
  };

  // track menu open state
  useEffect(() => {
    if (menuWasOpen.current === true && menuOpen === false) {
      menuAnchorRef.current.focus();
    }
    menuWasOpen.current = menuOpen;
  }, [menuOpen]);

  return (
    <Box display={{ xs: "flex", sm: "none" }}>
      <Search />
      <IconButton
        ref={menuAnchorRef}
        aria-label="show more"
        aria-controls={menuOpen ? "show-mobile-menu" : undefined}
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <MoreVertIcon color="secondary" />
      </IconButton>
      <Popper
        open={menuOpen}
        anchorEl={menuAnchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <ClickAwayListener onClickAway={handleMenuClose}>
              <Paper>
                <MenuList autoFocusItem={menuOpen} id="menu-list-grow">
                  <NavMenuItem label="archive" href="/" />
                  <NavMenuItem label="bio" href="/bio" />
                  <NavMenuItem label="contact" href="/contact" />
                </MenuList>
              </Paper>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default MobileMenu;
