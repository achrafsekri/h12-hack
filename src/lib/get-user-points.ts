"use server";

import { auth } from "~/server/auth";
import { db } from "~/server/db";

export const getUserPoints = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return 0;
  }
  const points = await db.selfie.findMany({
    where: { userId },
    select: { points: true },
  });
  return points.reduce((acc, curr) => acc + curr.points, 0);
};
