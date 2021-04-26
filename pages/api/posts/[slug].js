import prisma from "../prisma";

const post = async (req, res) => {
  if (req.method !== "GET") return res.sendStatus(405);

  const { postId } = req.body;

  // find post by id? title?
  try {
    await prisma.post.findUnique({
      where: {
        title: title,
      },
    });

    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default post;
