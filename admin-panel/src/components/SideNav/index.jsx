import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bus, Route, Users2, Home, Settings } from "lucide-react";
import ToggleThemeButton from "@/components/ui/ToggleThemeButton";

const NavLinksData = [
  {
    title: "Home",
    icon: Home,

    path: "/",
  },
  {
    title: "Bus",
    icon: Bus,

    path: "/bus",
  },
  {
    title: "Route",
    icon: Route,

    path: "/route",
  },
  {
    title: "User",
    icon: Users2,

    path: "/user",
  },
];
export default function SideNav() {
  const currentPath = useLocation().pathname;
  return (
    <TooltipProvider>
      <aside className="fixed h-screen flex flex-col items-center w-14 py-2 justify-between left-0 bg-background">
        <nav className="flex flex-col items-center gap-4 px-2 ">
          {NavLinksData.map((navLink, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  to={navLink.path}
                  className={`flex h-9 w-9 items-center ${
                    navLink.path.toLowerCase() === currentPath
                      ? "bg-accent"
                      : ""
                  }  p-2 justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                >
                  <navLink.icon className="h-5 w-5" />
                  <span className="sr-only">{navLink.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{navLink.title}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <ToggleThemeButton rounded />
      </aside>
    </TooltipProvider>
  );
}
