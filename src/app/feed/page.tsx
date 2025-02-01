import { db } from "~/server/db";
import { Card } from "~/components/ui/card";
import Image from "next/image";
import AddPost from "~/components/shared/add-post";
import { format } from "date-fns";
import LikeButton from "~/components/LikeButton";
import { auth } from "~/server/auth";
import { Leaderbord } from "~/components/leaderbord";

export default async function FeedPage() {
  const session = await auth();
  const userId = session?.user?.id;
  const selfies = await db.selfie.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  const userLikes = await db.like.findMany({
    where: {
      userId: userId,
    },
  });
  return (
    <main className="container mx-auto mt-20 max-w-7xl py-6">
      <div className="flex items-center justify-between gap-4 px-4">
        <h1 className="text-2xl font-bold capitalize">
          Selfies taken at Sbiba
        </h1>
        <div className="flex items-center gap-2">
          <Leaderbord />
          <AddPost />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {selfies.map((selfie) => (
          <Card
            key={selfie.id}
            className="group relative aspect-[1/1.25] overflow-hidden"
          >
            <LikeButton
              selfieId={selfie.id}
              isLiked={userLikes.some((like) => like.selfieId === selfie.id)}
            />
            <Image
              src={selfie.imageUrl}
              alt={`Selfie ${selfie.id}`}
              width={200}
              height={200}
              className="h-full w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 hidden h-16 w-full items-center justify-between bg-white/80 px-4 group-hover:flex">
              <div className="flex items-center gap-2">
                {selfie.user.image ? (
                  <Image
                    src={selfie.user.image}
                    alt={`User ${selfie.user.id}`}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                ) : (
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                    {selfie.user.email.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <p className="text-sm font-medium text-gray-600">
                {format(selfie.createdAt, "MMM d, yyyy 'at' h:mm a")}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
