import React from "react";

import { Container } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
