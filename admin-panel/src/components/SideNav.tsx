import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { TooltipProvider } from "./ui/tooltip";

export function SideNav({ links, isCollapsed, selected }) {
  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) => (
            <Button
              variant={index == selected ? "default" : "ghost"}
              onClick={() => link.onClick()}
              key={index}
              className={cn("justify-start", "text-md")}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span className={cn("ml-auto")}>{link.label}</span>
              )}
            </Button>
          ))}
        </nav>
      </div>
    </TooltipProvider>
  );
}
