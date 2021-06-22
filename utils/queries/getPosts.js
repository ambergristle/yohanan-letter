import prisma from "../prisma/prisma";

// get post(s) that match path (year/month/day/topic)
const getPosts = async (slug) => {
  try {
    const response = await prisma.post.findMany({
      where: {
        slug: { startsWith: slug },
        draft: false,
      },
      include: {
        sources: true,
        tags: true,
      },
    });

    if (!response) return null;
    return JSON.stringify(response);
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default getPosts;
