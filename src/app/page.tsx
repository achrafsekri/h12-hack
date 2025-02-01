import { Hero } from "~/components/landing/hero";
import { TextRotateComponent } from "~/components/landing/text-rotate";
import { TimeLineHistory } from "~/components/landing/time-line-history";
import { TextReveal } from "~/components/ui/text-reveal";

export default function HomePage() {
  return (
    <main className="mx-auto mt-24 max-w-7xl">
      <Hero />
      <TextRotateComponent />
      <TextReveal text="Where ancient Berber wisdom meets Roman grandeur, Sbiba is a living museum of Mediterranean civilizations ✧" />
      <TimeLineHistory />
    </main>
  );
}
