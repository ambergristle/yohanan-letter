// import tryRefresh from "../lib/auth/tryRefresh";

import PublisherForm from "../components/Forms/PublisherForm/PublisherForm";

const Publish = ({ draft }) => {
  return <PublisherForm />;
};

// // check token and get draft server-side
// export const getServerSideProps = async ({ req }) => {
//   const redirect = { redirect: { destination: "/login", permanent: false } };
//   const jid = req.cookies.jid;
//   // redirect to login if no refresh token (cookie)
//   if (!jid) return redirect;
//
//   // check refresh token and get access token if valid
//   const token = await tryRefresh(jid);
//   if (!token) return redirect;
//
//   const draft = "hi";
//   // pass draft or null to component as prop
//   // const draft = (await getDraft()) || null;
//
//   return {
//     props: { draft },
//   };
// };

export default Publish;
