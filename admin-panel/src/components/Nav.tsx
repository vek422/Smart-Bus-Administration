import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import ToggleThemeButton from "./ui/ToggleThemeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="w-full border-b flex justify-between items-center top-0 border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-14">
      <div className="flex items-center w-4/12 gap-10">
        <h3 className="text-lg font-semibold">Logo</h3>
        <NavigationMenu className="p-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Users</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-6 w-[400px]">
                  <ListItem href="/users" title="View Users">
                    Information about Users, Pass Details, Travel Logs
                  </ListItem>
                  <ListItem href="/users/add" title="Add Users">
                    Add New Users, Approve User Requests
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Buses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-6 w-[400px]">
                  <ListItem href="/buses" title="View Buses">
                    Information About Buses,
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Routes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-6 w-[400px]">
                  <ListItem href="/users" title="View Users">
                    Information about Users, Pass Details, Travel Logs
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Profile Section */}
      <div className="flex gap-5 items-center">
        <ToggleThemeButton rounded />
        <Avatar>
          <AvatarImage />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
