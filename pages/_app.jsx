import { useEffect } from "react";
// import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../components/Layout/Layout";
import theme from "../styles/theme";

import { Provider, useHydrate } from "../utils/store/store";

import "../styles/global.css";
import "react-quill/dist/quill.snow.css";

const App = ({ Component, pageProps }) => {
  // remove server-side jss to avoid styling conflicts
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const store = useHydrate(pageProps.initialZustandState);

  return (
    <ThemeProvider theme={theme}>
      <Provider initialStore={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

// App.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };
