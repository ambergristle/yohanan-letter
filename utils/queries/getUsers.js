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
    return response.length > 0 ? response : null;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default getUsers;
