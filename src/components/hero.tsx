import { Button } from "~/components/ui/button";
import Image from "next/image";
import { Compass } from "lucide-react";

export const Hero = () => {
  return (
    <div className="container mx-auto my-8 flex min-h-[45em] flex-col gap-4 lg:flex-row">
      {/* Left Content */}
      <div className="flex bite flex-1 items-center justify-center rounded-3xl bg-[#f3ff8e] px-8 py-12 lg:px-16">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-black/5 px-4 py-2">
            <span className="text-sm font-medium text-gray-800">
              Kasserine Region
            </span>
          </div>

          <h1 className="mb-6 font-sans text-5xl font-normal tracking-tight sm:text-6xl md:text-7xl">
            Your{" "}
            <Compass className="inline h-12 w-12 animate-[spin_8s_linear_infinite] text-gray-900" />{" "}
            Adventure in{" "}
            <span className="font-serif font-light italic text-gray-900">
              Sbiba
            </span>{" "}
            Starts Here
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Journey through time in the heart of Kasserine, where ancient Roman
            ruins meet Berber traditions in a tapestry of cultural heritage
          </p>

          <div className="mb-14">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-medium tracking-wide transition-transform hover:scale-105"
            >
              Explore Now
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md"
                >
                  <Image
                    src={`https://picsum.photos/40/40?random=${i}`}
                    alt={`Member ${i}`}
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              1.7M+ members of our charity organization
            </span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex-1 overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1200/800?random=main"
            alt="Desert landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating Elements */}
        <div className="relative h-full p-8">
          <div className="absolute right-8 top-8 flex items-center gap-3 rounded-full bg-white/95 p-4 shadow-lg backdrop-blur-sm">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="https://picsum.photos/48/48?random=volunteer"
                alt="Volunteer"
                width={48}
                height={48}
              />
            </div>
            <span className="pr-3 font-medium">We & Our Volunteers</span>
          </div>

          {/* Environmental Issues Tags */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2">
            <Button variant="secondary" className="rounded-full shadow-lg">
              GHG Emissions
            </Button>
          </div>
          <div className="absolute left-1/4 top-1/2">
            <Button variant="secondary" className="rounded-full shadow-lg">
              Ocean Pollution
            </Button>
          </div>
          <div className="absolute right-1/4 top-2/3">
            <Button variant="secondary" className="rounded-full shadow-lg">
              Deforestation
            </Button>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
            <div className="rounded-full bg-white/95 px-6 py-4 shadow-lg backdrop-blur-sm">
              <span className="font-medium">
                Join us in fighting environmental problems
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white/95 shadow-lg backdrop-blur-sm"
              >
                YT
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white/95 shadow-lg backdrop-blur-sm"
              >
                FB
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
