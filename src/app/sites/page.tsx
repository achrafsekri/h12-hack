import { db } from "~/server/db";
import { Card } from "~/components/ui/card";
import Image from "next/image";
import AddPost from "~/components/shared/add-post";
import { format } from "date-fns";
import LikeButton from "~/components/LikeButton";
import { auth } from "~/server/auth";
import { Leaderbord } from "~/components/leaderbord";
import { ShareButton } from "~/components/share-button";
import Link from "next/link";
import { getSites } from "~/lib/get-sites";


export default async function FeedPage() {
  const session = await auth();
  const userId = session?.user?.id;
  const sites = await getSites();

  return (
    <main className="container mx-auto mt-20 max-w-7xl py-6">
      <div className="flex items-center justify-between gap-4 px-4">
        <h1 className="text-2xl font-bold capitalize">Monuments of Sbiba</h1>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {sites.map((site) => (
          <Link key={site.id} href={`/sites/${site.id}`}>
            <Card
              key={site.id}
              className="group relative aspect-[1/1.25] cursor-pointer overflow-hidden"
            >
              <ShareButton
                siteId={site.id}
                title={`Selfie ${site.id} at Sbiba`}
              />
              <Image
                src={site.images[0]}
                alt={`Monument ${site.id}`}
                width={200}
                height={200}
                className="h-full w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <p className="text-sm font-medium text-gray-600">
                {format(new Date(), "MMM d, yyyy 'at' h:mm a")}
              </p>
            </Card>
          </Link>
        ))}
        {sites.length === 0 && (
          <div className="col-span-full flex items-center justify-center">
            <p className="text-sm text-gray-500">No selfies found</p>
          </div>
        )}
      </div>
    </main>
  );
}
