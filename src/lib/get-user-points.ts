"use server";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

export const getUserPoints = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return 0;
  }
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { points: true },
  });
  return user?.points || 0;
};
