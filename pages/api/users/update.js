import bcrypt from "bcrypt";
import prisma from "../../../utils/prisma/prisma";

const update = async (req, res) => {
  const { id, password, ...user } = req.body;
  try {
    // hash password? and update user
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        ...user,
        ...(password && { password: await bcrypt.hash(password, 10) }),
      },
    });

    if (!updatedUser) return res.status(500).end();

    return res.status(201).end();
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

export default update;
