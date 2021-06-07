import prisma from "../../../utils/prisma/prisma";

const tags = async (req, res) => {
  try {
    const response = await prisma.tag.findMany();

    if (!response) return res.status(404).json([]);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json([]);
  } finally {
    await prisma.$disconnect();
  }
};

export default tags;
