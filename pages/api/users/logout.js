import prisma from "../../../utils/prisma/prisma";
import { authorize } from "../../../utils/auth/tokens";

// delete refresh token
const logout = async (req, res, refreshToken) => {
  if (req.method !== "DELETE") return res.status(405).end();

  try {
    // delete refresh token
    const deleted = await prisma.token.delete({
      where: { token: refreshToken },
    });
    console.log(deleted);
    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  } finally {
    await prisma.status();
  }
};

export default authorize(logout);
