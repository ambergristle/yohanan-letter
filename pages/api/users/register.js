import bcrypt from "bcrypt";
import prisma from "../../../utils/prisma/prisma";

// register new user
const register = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  if (!req.body) return res.status(400).end();

  const { email, password, role } = req.body;

  try {
    // check if email exists
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // deny duplicate email creation
    if (userExists) return res.status(403).end();

    // hash password and create user
    const hash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hash,
        role: role,
      },
    });

    if (!newUser) return res.status(500).end();

    res.status(201).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  } finally {
    await prisma.$disconnect();
  }
};

export default register;
