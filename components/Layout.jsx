import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Yohanan Letter</title>
        <meta name="keywords" content="adam yohanan, law, finance" />
      </Head>
      // header
      {children}
      // footer
    </>
  );
};

export default Layout;
