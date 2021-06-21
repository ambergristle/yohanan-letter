import prisma from "../prisma/prisma";
// 210621030544_made_slugs_unique
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
    console.error(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export default getLetter;
