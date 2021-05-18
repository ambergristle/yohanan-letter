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
          include: {
            sources: true,
            tags: true,
          },
        },
      },
    });

    return JSON.stringify(response || initialValues);
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export default getDraft;
