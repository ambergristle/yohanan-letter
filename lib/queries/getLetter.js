import prisma from "../prisma/prisma";

// get newsletter draft
const getLetter = async (slug) => {
  try {
    const response = await prisma.letter.findUnique({
      where: {
        slug: slug,
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

    if (!response) return false;
    return JSON.stringify(response);
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export default getLetter;
