import { PrismaClient } from "@prisma/client";

// use one prisma client across app
const prisma = new PrismaClient();
export default prisma;
