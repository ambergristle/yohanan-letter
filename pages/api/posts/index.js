const posts = async (req, res) => {
  if (req.method !== "GET") return res.sendStatus(405);

  try {
    // get all posts
    return await prisma.post.findMany();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default posts;
