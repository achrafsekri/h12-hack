import { Button } from "~/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon, CircleArrowOutUpRight, Compass } from "lucide-react";
import BackgroundShaderClient from "../background-shader-client";
import { ScrollIndicator } from "./scroll-indicator";
import VideoModal from "./video-modal";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="container relative mx-auto flex flex-col gap-4 overflow-hidden pb-6 lg:flex-row">
      {/* Left Content */}
      <div className="bite-br flex flex-1 animate-fade-in-left items-center justify-center overflow-hidden rounded-3xl bg-[#f3ff8e] px-8 py-12 lg:px-16">
        <BackgroundShaderClient className="absolute inset-0 z-[-1] h-screen w-screen brightness-95" />
        <div className="flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 inline-flex animate-fade-in-up-delay-5 items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
            <span className="text-sm font-semibold text-gray-900">
              Kasserine Region
            </span>
            <ArrowUpRightIcon className="h-4 w-4 text-gray-700" />
          </div>

          <h1 className="text-shadow mb-8 animate-fade-in-up-delay-6 font-sans text-7xl font-medium tracking-tight text-white">
            Your{" "}
            <Compass className="inline h-14 w-14 animate-[spin_8s_linear_infinite] text-white" />{" "}
            Journey in{" "}
            <span className="font-serif font-light italic text-white">
              Sbiba
            </span>{" "}
            Starts Here
          </h1>

          <p className="mb-10 max-w-xl animate-fade-in-up-delay-6 text-xl leading-relaxed text-white sm:text-2xl">
            Discover the enchanting blend of Roman heritage and Berber culture
            in the heart of Kasserine
          </p>

          <div className="animate-fade-in-up-delay-7 space-y-6">
            <VideoModal />

            <div className="flex animate-fade-in-up-delay-7 items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-md"
                  >
                    <Image
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                      alt={`Member ${i}`}
                      width={48}
                      height={48}
                    />
                  </div>
                ))}
              </div>
              <span className="text-base font-semibold text-white">
                Visited by 1K+ members
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="bite-bl relative flex-1 animate-fade-in-right overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          {/* <Image
            src="/sb.jpg"
            alt="Desert landscape"
            fill
            className="object-cover"
            priority
          /> */}
          <video
            src="/vid.mp4"
            autoPlay
            loop
            muted
            className="aspect-[1/1.25] object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="relative h-full p-8">
          <div className="absolute right-4 top-4 flex animate-fade-in-up-delay-1 items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
            <Link
              href="/sites"
              className="flex items-center gap-2 pr-1 font-medium"
            >
              Explore Monuments
              <CircleArrowOutUpRight className="size-4" />
            </Link>
          </div>

          {/* Environmental Issues Tags */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 animate-fade-in-up-delay-2">
            <Button variant="secondary" className="rounded-full shadow-lg">
              Epic Architecture
            </Button>
          </div>
          <div className="absolute left-1/4 top-1/2 animate-fade-in-up-delay-3">
            <Button variant="secondary" className="rounded-full shadow-lg">
              Roman heritage
            </Button>
          </div>
          <div className="absolute right-1/4 top-2/3 animate-fade-in-up-delay-4">
            <Button variant="secondary" className="rounded-full shadow-lg">
              Rich history
            </Button>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-2 left-[68px] right-8 flex animate-fade-in-up-delay-4 items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/95 px-6 py-4 text-sm shadow-lg backdrop-blur-sm">
              <CircleArrowOutUpRight className="size-4" /> Discover the legacy
              of Sbiba
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

      {/* Add ScrollIndicator at the bottom */}
      <ScrollIndicator className="absolute bottom-0 left-[52%] animate-fade-in-up-delay-7" />
    </div>
  );
};
