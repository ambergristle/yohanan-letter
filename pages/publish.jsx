import tryRefresh from "../lib/auth/tryRefresh";
import getDraft from "../lib/queries/getDraft";
import { initialValues } from "../lib/initialValues";

import PublisherForm from "../components/Forms/PublisherForm/PublisherForm";

const Publish = ({ draft }) => {
  // return <PublisherForm draft={draft} />;
  return <div>{JSON.stringify(draft)}</div>;
};

// check token and get draft server-side
export const getServerSideProps = async ({ req }) => {
  const redirect = { redirect: { destination: "/login", permanent: false } };
  const jid = req.cookies.jid;
  // redirect to login if no refresh token (cookie)
  if (!jid) return redirect;

  // check refresh token and get access token if valid
  const token = await tryRefresh(jid);
  if (!token) return redirect;

  // pass draft or null to component as prop
  const draft = (await getDraft()) || initialValues;

  return {
    props: { draft },
  };
};

export default Publish;
