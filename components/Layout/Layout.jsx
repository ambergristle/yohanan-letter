import React from "react";
import Head from "next/head";

import { Container } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Yohanan Letter</title>
        <meta name="keywords" content="adam yohanan, law, finance" />
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
