import prisma from "../prisma";
import generateToken from "./tokens";

// authenticate and authorize
export default login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // get user from db by email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // if user not found
    if (!user) return res.sendStatus(404);

    // if user authenticated, generate tokens
    if (bcrypt.compare(password, user.password)) {
      const accessToken = generateToken(true, user);
      const refreshToken = generateToken(false, user);

      // add refresh token to db
      await prisma.token.create({
        data: { id: refreshToken },
      });

      return res.status(200).json({ accessToken, refreshToken });
    }

    return res.sendStatus(401);
  } catch (error) {
    return res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};
