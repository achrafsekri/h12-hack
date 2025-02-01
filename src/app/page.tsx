import { Hero } from "~/components/landing/hero";
import { TextRotateComponent } from "~/components/landing/text-rotate";
import { TextRotate } from "~/components/ui/text-rotate";
export default function HomePage() {
  return (
    <main className="mx-auto mt-24 max-w-7xl">
      <Hero />
      <TextRotateComponent />
    </main>
  );
}
