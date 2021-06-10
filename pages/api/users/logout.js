import prisma from "../../../utils/prisma/prisma";
import { deleteCookie } from "../../../utils/auth/cookies";

// delete refresh token
const logout = async (req, res) => {
  if (req.method !== "DELETE") return res.status(405).end();
  // extract refresh token
  const refreshToken = req.cookies.jid;

  if (!refreshToken) return res.status(401).end();

  try {
    // delete refresh token
    const deleted = await prisma.token.delete({
      where: { token: refreshToken },
    });

    // deactivate refresh cookie
    deleteCookie(res, "jid", true);
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  } finally {
    await prisma.$disconnect();
  }
};

export default logout;
