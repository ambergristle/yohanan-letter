import prisma from "../prisma";
import refreshToken from "./tokens";

// refresh token if valid
export default refresh = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    // check if refresh token in db
    const refreshTokenExists = await prisma.token.findUnique({
      where: {
        id: refreshToken,
      },
    });

    if (!refreshTokenExists) return res.sendStatus(403);

    // verify refresh token
    const accessToken = refreshToken(refreshToken);

    if (!accessToken) return res.sendStatus(403);

    res.status(200).json({ token: accessToken });
  } catch (error) {
    res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};
