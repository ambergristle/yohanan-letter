import prisma from "../../../lib/prisma/prisma";
import { authorize } from "../../../lib/auth/tokens";
import upsertDraft from "../../../lib/constructors/upsertDraft";

// update, schedule, or delete post
const drafts = async (req, res) => {
  if (!req.body) return res.status(400).end();
  const draft = req.body;

  // require id for changes to draft
  if (!draft.id) return res.status(400).end();

  try {
    switch (req.method) {
      // update draft on save
      case "PATCH":
        const updated = await prisma.letter.upsert(upsertDraft(draft));
        if (!updated) return res.status(500).end();
        return res.status(201).end();

      // schedule letter, add draft to archive
      case "POST":
        const newLetter = { draft: false, ...draft };
        const scheduled = await prisma.letter.upsert({
          where: { id: id },
          update: newLetter,
          create: newLetter,
        });
        if (!scheduled) return res.status(500);
        // // schedule
        return res.status(200).end();

      // delete draft
      case "DELETE":
        const deleted = await prisma.letter.delete({
          where: { id: id },
        });
        if (!deleted) return res.status(500);
        return res.status(204).end();

      // if none, return error
      default:
        return res.status(405).end();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  } finally {
    await prisma.$disconnect();
  }
};

// require user to be logged in to access drafts
export default authorize(drafts, false);
