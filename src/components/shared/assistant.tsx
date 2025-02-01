import { getHumeAccessToken } from "@/lib/getHumeAccessToken";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Mic2Icon, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Chat = dynamic(() => import("@/components/shared/chat/chat"), {
  loading: () => <div>Loading...</div>,
});

export default async function Assistant() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error("No access token found");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="fixed bottom-6 animate-bounce right-6 size-16 overflow-hidden rounded-full shadow-lg hover:opacity-80">
          <Image
            width={56}
            height={56}
            priority
            src="/soubi.png"
            alt="Assistant"
            className="size-full object-cover"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] max-w-2xl p-0">
        <DialogTitle className="hidden">Assistant</DialogTitle>
        <Chat accessToken={accessToken} />
      </DialogContent>
    </Dialog>
  );
}
