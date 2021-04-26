import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../utils/theme";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
