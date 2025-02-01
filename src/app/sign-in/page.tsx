import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { UserAuthForm } from "~/components/forms/user-auth-form";

export const metadata: Metadata = {
  title: "Connexion | alloFacture",
  description: "Connectez-vous à votre compte alloFacture",
};

export default function LoginPage() {
  return (
    <div className="absolute inset-0 flex h-screen w-screen flex-col items-center justify-center ">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
        )}
      >
        <>
          <ChevronLeft className="mr-2 size-4" />
          Retour
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Bien venue sur alloFacture
          </h1>
          <p className="text-sm text-muted-foreground">
            Saisissez votre adresse E-mail pour vous connecter à votre compte
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
            Pas de compte? Créez-en un maintenant
          </Link>
        </p>
      </div>
    </div>
  );
}
