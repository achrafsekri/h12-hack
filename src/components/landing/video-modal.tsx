import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const VideoModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          size="lg"
          className="group relative rounded-full bg-white px-10 py-6 text-xl font-semibold tracking-wide text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg active:scale-95"
        >
          <span className="flex items-center gap-2">
            Explore Now
            <SparklesIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-transparent max-w-screen-md">
        <video src="/vid.mp4" autoPlay playsInline controls loop muted className="object-cover" />
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
