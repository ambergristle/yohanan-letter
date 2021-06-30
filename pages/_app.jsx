import NextApp from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "../components/Layout/Layout";
import theme from "../styles/theme";

import {
  useStore,
  initializeStore,
  Provider,
  useHydrate,
} from "../utils/store/store";
// import getTags from "../utils/queries/getTags";

import "../styles/global.css";
import "react-quill/dist/quill.snow.css";

const App = ({ Component, pageProps, initialZustandState }) => {
  // remove server-side jss to preclude styling conflicts
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  const store = useHydrate(initialZustandState);

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

// initialize store server-side, populating with initial tags, login state
App.getInitialProps = async (appContext) => {
  // get initial next app props, required to use with _app
  const appProps = await NextApp.getInitialProps(appContext);

  const { req } = appContext.ctx;

  // only return appProps if client-side routing (prevents store from being overwritten)
  const clientSide =
    !req || req.url?.startsWith("/_next/data") || typeof window !== "undefined";
  if (clientSide) {
    return { ...appProps };
  }

  // on first load/refresh, initialize store, get initial state
  const zustandStore = initializeStore();
  const initialZustandState = {
    ...zustandStore.getState(),
  };

  // only import function server-side to avoid prisma error
  // const getTags = { ...(await import("../utils/queries/getTags")) }.default;
  // const tags = await getTags();
  const tags = [];

  // const jid = req.cookies.jid;
  const jid = false;

  // overwrite default store with initial values if query successful
  return {
    initialZustandState: JSON.parse(
      JSON.stringify({
        ...initialZustandState,
        tags,
        ...(jid && { loggedIn: true }),
      })
    ),
    ...appProps,
  };
};

export default App;
