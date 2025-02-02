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
import { type User } from "@prisma/client";

export function Leaderbord({ topUsers }: { topUsers: User[] }) {
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
              {topUsers.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback>
                          {user.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{user.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
