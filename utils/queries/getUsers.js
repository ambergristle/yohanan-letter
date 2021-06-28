import prisma from "../prisma/prisma";

// get all users
const getUsers = async () => {
  try {
    const response = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    if (!response) return null;

    const users = response.map((user) => ({ password: "", ...user }));

    return users.length > 0 ? users : null;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default getUsers;
