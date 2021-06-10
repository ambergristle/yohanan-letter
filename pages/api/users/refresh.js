import prisma from "../../../utils/prisma/prisma";
import { refreshAccessToken } from "../../../utils/auth/tokens";

// refresh token if valid
const refresh = async (req, res) => {
  if (req.method !== "POST") return res.status(405);
  if (!req.headers.cookies) return res.status(400);

  const refreshToken = req.headers.cookies.jid;

  try {
    // check if refresh token in db
    const refreshTokenExists = await prisma.token.findUnique({
      where: {
        id: refreshToken,
      },
    });

    // return error if user logged out
    if (!refreshTokenExists) return res.status(404);

    // verify refresh token
    const accessToken = refreshAccessToken(refreshToken);

    // if refresh token invalid, return error
    if (!accessToken) return res.status(403);

    res.status(200).json({ token: accessToken });
  } catch (error) {
    console.error(error);
    res.status(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default refresh;
