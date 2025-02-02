import { Button } from "~/components/ui/button";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  CircleArrowOutUpRight,
  Compass,
  SparklesIcon,
} from "lucide-react";
import BackgroundShaderClient from "../background-shader-client";
import { ScrollIndicator } from "./scroll-indicator";
import VideoModal from "./video-modal";

export const Hero = () => {
  return (
    <div className="container relative mx-auto flex flex-col gap-4 overflow-hidden pb-6 lg:flex-row">
      {/* Left Content */}
      <div className="bite-br animate-fade-in-left flex flex-1 items-center justify-center overflow-hidden rounded-3xl bg-[#f3ff8e] px-8 py-12 lg:px-16">
        <BackgroundShaderClient className="absolute inset-0 z-[-1] h-screen w-screen brightness-95" />
        <div className="flex max-w-3xl flex-col items-center text-center">
          <div className="animate-fade-in-up-delay-5 mb-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
            <span className="text-sm font-semibold text-gray-900">
              Kasserine Region
            </span>
            <ArrowUpRightIcon className="h-4 w-4 text-gray-700" />
          </div>

          <h1 className="animate-fade-in-up-delay-6 mb-8 font-sans text-7xl font-medium tracking-tight text-white">
            Your{" "}
            <Compass className="inline h-14 w-14 animate-[spin_8s_linear_infinite] text-white" />{" "}
            Journey in{" "}
            <span className="font-serif font-light italic text-white">
              Sbiba
            </span>{" "}
            Starts Here
          </h1>

          <p className="animate-fade-in-up-delay-6 mb-10 max-w-xl text-xl leading-relaxed text-white sm:text-2xl">
            Discover the enchanting blend of Roman heritage and Berber culture
            in the heart of Kasserine
          </p>

          <div className="animate-fade-in-up-delay-7 mb-12">
            <VideoModal />
          </div>

          <div className="animate-fade-in-up-delay-7 flex items-center gap-4">
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

      {/* Right Content */}
      <div className="bite-bl animate-fade-in-right relative flex-1 overflow-hidden rounded-3xl">
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
          <div className="animate-fade-in-up-delay-1 absolute right-4 top-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Volunteer"
                width={48}
                height={48}
              />
            </div>
            <span className="flex items-center gap-2 pr-1 font-medium">
              We & Our Volunteers
              <CircleArrowOutUpRight className="size-4" />
            </span>
          </div>

          {/* Environmental Issues Tags */}
          <div className="animate-fade-in-up-delay-2 absolute left-1/2 top-1/3 -translate-x-1/2">
            <Button variant="secondary" className="rounded-full shadow-lg">
              Epic Architecture
            </Button>
          </div>
          <div className="animate-fade-in-up-delay-3 absolute left-1/4 top-1/2">
            <Button variant="secondary" className="rounded-full shadow-lg">
              Roman heritage
            </Button>
          </div>
          <div className="animate-fade-in-up-delay-4 absolute right-1/4 top-2/3">
            <Button variant="secondary" className="rounded-full shadow-lg">
              Rich history
            </Button>
          </div>

          {/* Bottom Info */}
          <div className="animate-fade-in-up-delay-4 absolute bottom-2 left-[68px] right-8 flex items-center justify-between">
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
      <ScrollIndicator className="animate-fade-in-up-delay-7 absolute bottom-0 left-[52%]" />
    </div>
  );
};
