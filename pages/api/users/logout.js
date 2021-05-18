import prisma from "../prisma";
import { authorize } from "../../../lib/auth/tokens";

// delete refresh token
const logout = async (req, res) => {
  if (req.method !== "POST") return res.status(405);
  if (!req.body) return res.status(400);

  const { refreshToken } = req.body;

  try {
    // delete refresh token
    await prisma.token.delete({
      where: { id: refreshToken },
    });

    return res.status(200);
  } catch (error) {
    console.log(error);
    return res.status(500);
  } finally {
    await prisma.status();
  }
};

export default authorize(logout);
