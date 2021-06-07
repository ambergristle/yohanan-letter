import prisma from "../prisma/prisma";

const getTags = async () => {
  try {
    const response = await prisma.tag.findMany();
    return response || [];
  } catch (error) {
    console.error(error);
    return res.status(500).json([]);
  } finally {
    await prisma.$disconnect();
  }
};

export default getTags;
