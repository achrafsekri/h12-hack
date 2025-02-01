import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { Sun, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="fixed left-1/2 right-auto top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 rounded-full bg-background/80 backdrop-blur-sm">
      <div className="animate-fade-in-up-delay-8 container grid h-14 grid-cols-3 items-center px-4">
        {/* Left Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-1">
            <NavigationMenuItem></NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/sites" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Sites
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/feed" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Feed
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Center Logo */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="border-gradient-1 flex items-center space-x-2 rounded-full border border-[#FF6B6B] bg-muted px-4 py-2"
          >
            <span className="px-4 font-serif text-xl font-light">
              Sbiba Heritage
            </span>
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center justify-end gap-4">
          <Button variant="link" className="" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button
            variant="secondary"
            className="flex items-center gap-1 bg-muted"
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
