import prisma from "../prisma";
import { authorize } from "../../../lib/auth/tokens";

const update = async (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const { post } = req.body;

  try {
    switch (req.method) {
      // update post
      case "PATCH":
        await prisma.post.update({
          where: { id: post.id },
          data: post,
        });
        break;

      // delete post
      case "DELETE":
        await prisma.post.delete({
          where: { id: post.id },
        });
        break;

      // if neither patch nor delete, returnr error
      default:
        return res.sendStatus(405);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};

export default authorize(update, true);
