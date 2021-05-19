import tryRefresh from "../lib/requests/tryRefresh";
import getDraft from "../lib/queries/getDraft";

import PublisherForm from "../components/Forms/PublisherForm/PublisherForm";

const Publish = ({ draft }) => {
  return <PublisherForm draft={JSON.parse(draft)} />;
};

// check token and get draft server-side
export const getServerSideProps = async ({ req }) => {
  const redirect = { redirect: { destination: "/login", permanent: false } };
  const jid = req.cookies.jid;
  // redirect to login if no refresh token (cookie)
  if (!jid) return redirect;

  // check refreshA token and get access token if valid
  const token = await tryRefresh(jid);
  if (!token) return redirect;

  // pass draft or null to component as prop
  const draft = await getDraft();

  return {
    props: { draft },
  };
};

export default Publish;
