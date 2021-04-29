import React from "react";
import Link from "next/link";

import { MenuItem } from "@material-ui/core";

const NavMenuItem = ({ label, href }) => {
  return (
    <Link href={href} passHref>
      <MenuItem>{label}</MenuItem>
    </Link>
  );
};

export default NavMenuItem;
