import tryRefresh from "../lib/auth/tryRefresh";

import Publisher from "../components/Publisher/Publisher";

const Publish = ({ draft }) => {
  return <Publisher draft={draft} />;
};

// check token and get draft server-side
export const getServerSideProps = async ({ req }) => {
  const jid = req.cookies.jid;
  // redirect to login if no refresh token (cookie)
  if (!jid) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }

  // check refresh token and get access token if valid
  const token = await tryRefresh(jid);

  console.log("at", token);

  const draft = "hi";
  // pass draft or null to component as prop
  // const draft = (await getDraft()) || null;

  return {
    props: { draft },
  };
};

export default Publish;
