import prisma from "../prisma";
import { authorize } from "../../../lib/auth/tokens";

// delete refresh token
const logout = async (req, res) => {
  if (req.method !== "POST") return res.sendStatus(405);
  if (!req.body) return res.sendStatus(400);

  const { refreshToken } = req.body;

  try {
    // delete refresh token
    await prisma.token.delete({
      where: { id: refreshToken },
    });

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default authorize(logout);
