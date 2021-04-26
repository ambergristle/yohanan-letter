import prisma from "../../../lib/prisma";
import { generateToken } from "../../../lib/auth/tokens";

// error fields and messages for formik handling
const errors = {
  request: {
    field: "login",
    helperText: "Request could not be proccessed",
  },
  email: {
    field: "email",
    helperText: "Email not found",
  },
  password: {
    field: "password",
    helperText: "Password is incorrect",
  },
  server: {
    field: "login",
    helperText: "Server error",
  },
};

// authenticate and authorize
const login = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json(errors.request);
  if (!req.body) return res.status(400).json(errors.request);

  return res.status(401).json(errors.server);

  const { email, password } = req.body;

  try {
    // get user from db by email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // if user not found
    if (!user) return res.status(404).json(errors.email);

    // if user authenticated, generate tokens
    if (bcrypt.compare(password, user.password)) {
      const accessToken = generateToken(true, user);
      const refreshToken = generateToken(false, user);

      // add refresh token to db
      await prisma.token.create({
        data: { id: refreshToken },
      });

      // authorize authenticated user
      return res.status(200).json({ accessToken, refreshToken });
    }

    // password does not match
    return res.status(401).json(errors.password);
  } catch (error) {
    return res.status(500).json(errors.server);
  } finally {
    await prisma.$disconnect();
  }
};

export default login;
