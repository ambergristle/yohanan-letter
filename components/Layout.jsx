import Head from "next/head";

import { Container } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Yohanan Letter</title>
        <meta name="keywords" content="adam yohanan, law, finance" />
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer component="footer" />
    </>
  );
};

export default Layout;
