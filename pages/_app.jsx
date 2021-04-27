import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../utils/theme";
import Layout from "../components/Layout/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;

// <ThemeProvider theme={theme}>
//   <Layout>
//     <Component {...pageProps} />
//   </Layout>
// </ThemeProvider>
