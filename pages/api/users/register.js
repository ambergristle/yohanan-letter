import bcrypt from "bcrypt";
import prisma from "../prisma";
import { authorize } from "../../../utils/auth/tokens";

// register new user
const register = async (req, res) => {
  if (req.method !== "POST") return res.status(405);
  if (!req.body) return res.status(400);

  const { email, password, role } = req.body;

  try {
    // check if email exists
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // deny duplicate email creation
    if (userExists) return res.status(403);

    // hash password and create user
    const hash = await bcrypt.hash(password, 10);
    await prisma.user.create({
      email: email,
      password: hash,
      role: role,
    });

    res.status(201);
  } catch (error) {
    console.error(error);
    return res.status(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default authorize(register, true);
