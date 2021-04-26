import Head from "next/head";

import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Yohanan Letter</title>
        <meta name="keywords" content="adam yohanan, law, finance" />
      </Head>
      // header
      <Container>{children}</Container>
      // footer
    </>
  );
};

export default Layout;
