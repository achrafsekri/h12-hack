"use server";

import { revalidatePath } from "next/cache";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export const shareIncrement = async (type: "selfie" | "site", id: string) => {
  console.log("shareIncrement", type, id);
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return;
  }

  await db.user.update({
    where: { id: userId },
    data: {
      points: { increment: 1 },
    },
  });
  revalidatePath("/sites");
  const selfie =
    type === "selfie" && (await db.selfie.findUnique({ where: { id } }));

  if (!selfie) {
    return;
  }

  await db.user.update({
    where: { id: selfie.userId },
    data: {
      points: { increment: 1 },
    },
  });

  revalidatePath("/feed");
};
