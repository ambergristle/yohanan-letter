import Head from "next/head";

import { Box, Container } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

// site template with custom html head
// wrap content in header/footer
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Yohanan Letter</title>
        <meta name="keywords" content="adam yohanan, law, finance" />
      </Head>
      <Box minHeight="100vh">
        <Header />
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </>
  );
};

export default Layout;
