import prisma from "../prisma/prisma";

import { initialValues } from "../constructors/initialValues";

// get newsletter draft
const getDraft = async () => {
  try {
    const response = await prisma.letter.findFirst({
      where: {
        draft: true,
      },
      include: {
        posts: {
          select: {
            id: true,
            draft: true,
            date: true,
            title: true,
            text: true,
            sources: { select: { id: true, title: true, href: true } },
            tags: { select: { id: true, name: true } },
          },
        },
      },
    });

    return JSON.stringify(response || initialValues);
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export default getDraft;
