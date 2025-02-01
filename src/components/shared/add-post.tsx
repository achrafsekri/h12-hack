"use client";

import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { PlusIcon, SparkleIcon, SparklesIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useImageUpload } from "@/hooks/use-image-upload";
import { ImagePlus, X, Upload, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

const AddPost = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const {
    previewUrl,
    fileName,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  } = useImageUpload({
    onUpload: (url) => console.log(url),
    onFileChange: (file) => setFile(file),
  });

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith("image/")) {
        const fakeEvent = {
          target: {
            files: [file],
          },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        handleFileChange(fakeEvent);
      }
    },
    [handleFileChange],
  );

  const handleUpload = async () => {
    if (!file) return;

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
      const data = await response.json();

      //   Handle successful response here
      const reimagineResponse = await fetch("/api/reimagine", {
        method: "POST",
        body: JSON.stringify({ url: data.url }),
      });
      const reimagineData = await reimagineResponse.json();
      setResult(reimagineData.url);
      //   You might want to handle the response data
    } catch (error) {
      console.error("Error uploading image:", error);
      // You might want to show an error toast here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button effect="shine">
          <SparklesIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
          <span>Reimagine</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle className="flex items-center gap-2">
            <SparklesIcon className="size-6" />
            Reimagine your selfie as you were in sbiba
          </DialogTitle>
        </DialogHeader>
        {!result ? (
          <div className="w-full max-w-md space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Slide or click to upload</h3>
              <p className="text-sm text-muted-foreground">
                Upload your selfie and see how it would look like in sbiba 1000
                years ago (supported formats: JPG, PNG)
              </p>
            </div>

            <Input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            {!previewUrl ? (
              <div
                onClick={handleThumbnailClick}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                  "flex h-64 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted",
                  isDragging && "border-primary/50 bg-primary/5",
                )}
              >
                <div className="rounded-full bg-background p-3 shadow-sm">
                  <ImagePlus className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Click to select</p>
                  <p className="text-xs text-muted-foreground">
                    or drag and drop file here
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="group relative h-64 overflow-hidden rounded-lg border">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={handleThumbnailClick}
                      className="h-9 w-9 p-0"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={handleRemove}
                      className="h-9 w-9 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {fileName && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="truncate">{fileName}</span>
                    <button
                      onClick={handleRemove}
                      className="ml-auto rounded-full p-1 hover:bg-muted"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full max-w-md space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <Image
              src={result}
              alt="Reimagined"
              width={1024}
              height={1024}
              className="object-cover"
            />
          </div>
        )}
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleUpload}
            disabled={!file || isLoading}
          >
            {isLoading ? (
              <>
                <SparklesIcon className="mr-2 h-4 w-4 animate-spin" />
                Reimagining...
              </>
            ) : (
              "Upload"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPost;
