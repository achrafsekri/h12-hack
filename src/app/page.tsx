import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
        <div className="container px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="space-y-4">
              <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                welcome to a{" "}
                <span className="font-serif italic text-[#ff6b6b]">calmer</span> internet
              </h1>
              <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Beautifully designed, privacy-focused, and packed with features.
                We care about your experience, not your data.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/sites">Get Started →</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="/feed">Explore Feed</Link>
              </Button>
            </div>

            <div className="mt-12">
              <Button variant="secondary" className="rounded-full" asChild>
                <Link href="/sites">Beta is now available! →</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
