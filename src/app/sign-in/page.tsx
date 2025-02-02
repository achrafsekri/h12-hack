import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "~/components/forms/user-auth-form";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

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
    <div className="h-screen w-screen pt-64 flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back!
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <Suspense>
          <UserAuthForm />
        </Suspense>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Create one now
          </Link>
        </p>
      </div>
    </div>
  );
}
