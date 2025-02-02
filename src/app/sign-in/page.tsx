import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "~/components/forms/user-auth-form";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { LockKeyhole, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Connexion | sbibaHeritage",
  description: "Sign in to sbibaHeritage",
};

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <div className="bg-dot-pattern relative mt-20 min-h-screen w-full flex-col items-center justify-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      <div className="relative mx-auto flex w-full flex-col items-center justify-center px-6 py-16 sm:px-8">
        <div className="mb-12 flex flex-col items-center">
          <div className="relative">
            <div className="bg-gradient absolute -inset-1 animate-ping rounded-full opacity-30" />
            <div className="relative rounded-full bg-background p-4 shadow-lg">
              <LockKeyhole className="text-gradient h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[400px] space-y-8">
          <div className="flex flex-col space-y-3 text-center">
            <h1 className="text-gradient text-4xl font-bold tracking-tighter">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border bg-secondary/30 p-4">
            <Sparkles className="text-gradient h-5 w-5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              We use magic links - no password needed! If you&apos;re new,
              we&apos;ll create an account for you automatically.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-lg">
            <Suspense>
              <UserAuthForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
