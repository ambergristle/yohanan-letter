import prisma from "../prisma/prisma";

const getPosts = async (slug) => {
  try {
    const response = await prisma.post.findMany({
      where: {
        slug: {
          startsWith: slug,
        },
      },
      include: {
        sources: true,
        tags: true,
      },
    });
    return JSON.stringify(response);
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export default getPosts;
