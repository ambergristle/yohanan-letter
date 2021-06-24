import prisma from "../../../utils/prisma/prisma";

import tryScheduleLetter from "../../../utils/requests/tryScheduleLetter";

import upsertDraft from "../../../utils/constructors/upsertDraft";
import newLetter from "../../../utils/constructors/newLetter";

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
        const archived = await prisma.letter.upsert(upsertDraft(draft, true));
        if (!archived) return res.status(500);

        const singleSends = newLetter(draft);

        const responses = await Promise.all(
          singleSends.map(async (send) => await tryScheduleLetter(send))
        );

        const failed = responses.find((send) => send > 200);
        if (failed) return res.status(failed).end();

        return res.status(200).end();

      // delete draft
      case "DELETE":
        const deleted = await prisma.letter.delete({
          where: { id: draft.id },
        });
        if (!deleted) return res.status(500);
        return res.status(204).end();

      // if none, return error
      default:
        return res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  } finally {
    await prisma.$disconnect();
  }
};

export default drafts;
