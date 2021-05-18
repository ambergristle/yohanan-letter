import prisma from "../prisma";
import { authorize } from "../../../lib/auth/tokens";
import upsertDraft from "../../../lib/constructors/upsertDraft";

// update, schedule, or delete post
const drafts = async (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const draft = req.body;

  // require id for changes to draft
  if (!id) return res.sendStatus(400);

  try {
    switch (req.method) {
      // update draft on save
      case "PATCH":
        const updated = await prisma.letters.upsert(upsertDraft(draft));
        if (!updated) return res.sendStatus(500);
        break;

      // schedule letter, add draft to archive
      case "POST":
        const newLetter = { draft: false, ...draft };
        const scheduled = await prisma.letters.upsert({
          where: { id: id },
          update: newLetter,
          create: newLetter,
        });
        if (!scheduled) return res.sendStatus(500);

        // // schedule
        break;

      // delete draft
      case "DELETE":
        const deleted = await prisma.letters.delete({
          where: { id: id },
        });
        if (!deleted) return res.sendStatus(500);
        break;

      // if none, return error
      default:
        return res.sendStatus(405);
    }

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  } finally {
    await prisma.$disconnect();
  }
};

// require user to be logged in to access drafts
export default authorize(drafts, false);
