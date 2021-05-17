import prisma from "../prisma";
import { authorize } from "../../../lib/auth/tokens";

const publish = async (req, res) => {};

export default authorize(publish, false);
