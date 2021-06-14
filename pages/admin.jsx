import jwt from "jsonwebtoken";
import getToken from "../utils/queries/getToken";
import getUsers from "../utils/queries/getUsers";

import UserForm from "../components/Forms/UserForm/UserForm";

const Admin = ({ users }) => {
  return <UserForm users={users} />;
};

export const getServerSideProps = async ({ req }) => {
  const redirect = { redirect: { destination: "/login", permanent: false } };
  const jid = req.cookies.jid;

  // redirect to login if no refresh token (cookie)
  if (!jid) return redirect;

  // check refresh token and get access token if valid
  const token = await getToken(jid);
  if (!token) return redirect;

  const { role } = jwt.decode(token);
  if (role !== "ADMIN") return redirect;

  const users = await getUsers();

  return {
    props: { users },
  };
};

export default Admin;
