import getToken from "../../utils/queries/getToken";
import getDraft from "../../utils/queries/getDraft";
import getTags from "../../utils/queries/getTags";

import PublisherForm from "../../components/Forms/PublisherForm/PublisherForm";

const Publish = ({ draft, tags }) => {
  return <PublisherForm isDraft={true} draft={JSON.parse(draft)} tags={tags} />;
};

// check token and get draft server-side
export const getServerSideProps = async ({ req }) => {
  const redirect = { redirect: { destination: "/login", permanent: false } };
  const jid = req.cookies.jid;
  // redirect to login if no refresh token (cookie)
  if (!jid) return redirect;

  // check refresh token and get access token if valid
  const token = await getToken(jid);
  if (!token) return redirect;

  // pass draft or null to component as prop
  const draft = await getDraft();
  const tags = await getTags();

  return {
    props: { draft, tags },
  };
};

export default Publish;
