import Head from "next/head";

import { Box, Container, makeStyles } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
  },
}));

// site template with custom html head
// wrap content in header/footer
const Layout = ({ children }) => {
  const { main } = useStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Yohanan Letter</title>
        <meta name="keywords" content="adam yohanan, law, finance" />
      </Head>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Container maxWidth="lg" className={main}>
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
