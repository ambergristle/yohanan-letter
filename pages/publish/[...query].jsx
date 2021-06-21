import getToken from "../../utils/queries/getToken";
import getLetter from "../../utils/queries/getLetter";
import getTags from "../../utils/queries/getTags";

import PublisherForm from "../../components/Forms/PublisherForm/PublisherForm";

const Edit = ({ letter, tags }) => {
  return (
    <PublisherForm isDraft={false} draft={JSON.parse(letter)} tags={tags} />
  );
};

// get letter server-side
export const getServerSideProps = async ({ req, query }) => {
  const redirect = { redirect: { destination: "/login", permanent: false } };
  const jid = req.cookies.jid;
  // redirect to login if no refresh token (cookie)
  if (!jid) return redirect;

  // check refresh token and get access token if valid
  const token = await getToken(jid);
  if (!token) return redirect;

  const slug = query.query.join("/");

  // pass draft, tags as props or redirect to 404
  const letter = await getLetter(slug);

  const tags = await getTags();

  if (!letter) return { notFound: true };

  return { props: { letter, tags } };
};

export default Edit;
