"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { likeSelfie } from "~/actions/likes";
import { toast } from "sonner";

const LikeButton = ({
  selfieId,
  isLiked: initialIsLiked,
}: {
  selfieId: string;
  isLiked: boolean;
}) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const handleLike = async () => {
    try {
      await likeSelfie(selfieId, isLiked ? "unlike" : "like");
      toast.success(isLiked ? "Unliked selfie" : "Liked selfie");
      setIsLiked(!isLiked);
    } catch (error) {
      console.error(error);
      toast.error("Failed to like/unlike selfie");
    }
  };
  return (
    <Button
      variant="ghost"
      className="absolute right-4 top-4 z-[60] size-10 rounded-full bg-white/80 text-black hover:bg-white"
      onClick={handleLike}
    >
      <HeartIcon
        className={cn("size-6", isLiked && "fill-red-500 stroke-red-500")}
      />
    </Button>
  );
};

export default LikeButton;
