import prisma from "../../../utils/prisma/prisma";

const update = async (req, res) => {
  const { id, ...user } = req.body;
  try {
    const updatedUser = prisma.user.update({
      where: { id: id },
      data: user,
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
