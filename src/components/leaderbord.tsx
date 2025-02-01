"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trophy } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function Leaderbord() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-1" variant="outline">
          <Trophy className="size-4" />
          Leaderbord
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Leaderbord</DialogTitle>
          <DialogDescription>
            See who is leading the leaderboard.
          </DialogDescription>
        </DialogHeader>

        <div className="">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead className="text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>shadcn</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">12,345</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="@jaredpalmer"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <span>jaredpalmer</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">11,987</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="@shuding_"
                      />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <span>shuding_</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">10,654</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">4</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <span>maxleiter</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">9,876</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">5</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="@samselikoff"
                      />
                      <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                    <span>samselikoff</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">8,765</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
