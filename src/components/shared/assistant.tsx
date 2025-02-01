import { getHumeAccessToken } from "@/lib/getHumeAccessToken";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <Button
          className="fixed bottom-6 right-6 flex items-center gap-1.5 rounded-full shadow-lg"
          size="lg"
        >
          <Phone className="size-4" />
          <span>Assistant</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] max-w-2xl p-0">
        <Chat accessToken={accessToken} />
      </DialogContent>
    </Dialog>
  );
}
