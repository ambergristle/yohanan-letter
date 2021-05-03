import prisma from "../prisma";
import { refreshAccessToken } from "../../../lib/auth/tokens";

// refresh token if valid
const refresh = async (req, res) => {
  if (req.method !== "POST") return res.sendStatus(405);
  if (!req.headers.cookies) return res.sendStatus(400);

  const refreshToken = req.headers.cookies.jid;
  console.log(refreshToken);

  try {
    // check if refresh token in db
    const refreshTokenExists = await prisma.token.findUnique({
      where: {
        id: refreshToken,
      },
    });

    // return error if user logged out
    if (!refreshTokenExists) return res.sendStatus(404);

    // verify refresh token
    const accessToken = refreshAccessToken(refreshToken);

    // if refresh token invalid, return error
    if (!accessToken) return res.sendStatus(403);

    res.status(200).json({ token: accessToken });
  } catch (error) {
    res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default refresh;
