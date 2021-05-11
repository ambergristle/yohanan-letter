import axios from "axios";
import prisma from "../prisma/prisma";
import { refreshAccessToken } from "./tokens";

const tryRefresh = async (jid) => {
  try {
    // check if refresh token in db
    const refreshTokenExists = await prisma.token.findUnique({
      where: { token: jid },
    });

    if (!refreshTokenExists) return false;

    // return token or false (if refresh invalid)
    return refreshAccessToken(jid);
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export default tryRefresh;