import bcrypt from "bcrypt";
import prisma from "../prisma";
import authenticateToken from "./tokens";

// register new user
const register = async (req, res) => {
  const { email, password, role } = req.body;
  const auth = req.auth;

  //// check user is authorized to create admin
  if (role === "AUTH" && auth !== "AUTH") return res.sendStatus(401);

  try {
    // check if email exists
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) return res.sendStatus(403);

    // hash password and create user
    const hash = await bcrypt(password, 10);
    await prisma.user.create({
      email: email,
      password: hash,
      role: role,
    });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default authenticateToken(register);
