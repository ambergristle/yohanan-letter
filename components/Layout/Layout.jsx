import Head from "next/head";

import { Box, Container, Button, makeStyles } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";
import SubscribeForm from "../Forms/SubscribeForm";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
  },
  subscribeButton: {
    position: "fixed",
    bottom: "5%",
    left: "5%",
    color: "rgba(238, 238, 238, 1)",
    backgroundColor: "rgba(50, 130, 184, 1)",
    "&:hover": {
      color: "rgba(50, 130, 184, 1)",
      backgroundColor: "rgba(238, 238, 238, 1)",
    },
  },
}));

// site template with custom html head
// wrap content in header/footer
const Layout = ({ children }) => {
  const { main, subscribeButton } = useStyles();

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
        <Button
          href="https://cdn.forms-content.sg-form.com/b5a15d41-508c-11eb-b248-ea422c4fb1a2"
          target="_blank"
          variant="contained"
          className={subscribeButton}
        >
          subscribe
        </Button>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
