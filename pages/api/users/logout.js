import prisma from "../prisma";
import { authorize } from "../../../utils/auth/tokens";

// delete refresh token
const logout = async (req, res) => {
  if (req.method !== "DELETE") return res.status(405);

  const jid = req.cookies.jid;
  // return error if no refresh token (cookie)
  if (!jid) return res.status(400);

  try {
    // delete refresh token
    await prisma.token.delete({
      where: { id: jid },
    });

    return res.status(200);
  } catch (error) {
    console.error(error);
    return res.status(500);
  } finally {
    await prisma.status();
  }
};

export default authorize(logout);
