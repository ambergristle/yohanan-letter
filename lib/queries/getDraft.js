import prisma from "../prisma/prisma";

// get newsletter draft
const getDraft = async () => {
  try {
    const response = await prisma.letters.findUnique({
      where: {
        draft: true,
      },
      include: {
        posts: {
          include: {
            sources: true,
            tags: true,
          },
        },
      },
    });
    console.log(response);

    if (!response) return false;
    return JSON.stringify(response);
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export default getDraft;
