import SideNav from "@/components/SideNav";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Bus as BusIcon,
  Construction,
  ListFilter,
  ScrollText,
  Search,
} from "lucide-react";
import { DataTable } from "./data-table";
import { BusInfo, columns } from "./columns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TimeWidget from "@/components/TimeWidget";
import { Separator } from "@/components/ui/separator";
const buses: BusInfo[] = (() => {
  const data = [];
  for (let i = 0; i < 95; i++) {
    data.push({
      busId: `BS0${i}`,
      capacity: 50,
      lastRoute: "Shirdi",
      lastDriver: "IDK",
      lastMaintenance: new Date(),
    });
  }
  return data;
})();
export default function Bus() {
  return (
    <div className="w-full flex flex-col h-screen bg-muted/40 pl-14">
      <SideNav />
      <header className="flex p-4 w-full justify-between items-center">
        <h1 className="text-2xl font-semibold">Bus</h1>
        <Avatar>
          <AvatarFallback>VK</AvatarFallback>
        </Avatar>
      </header>

      <div className="grid grid-cols-4 p-4 gap-4">
        <div className="flex flex-col col-span-3 gap-3">
          <div className="flex justify-between">
            {/* top bar with search and filter */}
            <div>
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant={"outline"} className="gap-1">
                <ScrollText className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  View log
                </span>
              </Button>
              <Button variant={"outline"} className="gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </div>
          </div>
          <Card className="p-2">
            <div className="p-2">
              <h1 className="text-xl">Buses</h1>
            </div>
            <Separator className="my-2" />

            <DataTable columns={columns} data={buses} />
          </Card>
        </div>
        <div className="flex gap-4 flex-col">
          <Card className="flex flex-col items-center gap-2 py-4">
            <TimeWidget />
          </Card>
          <Card className="flex flex-col gap-2 p-2 px-4">
            <div className="flex items-center justify-between gap-2">
              <h1 className=" text-xl">Total Buses</h1>
              <BusIcon />
            </div>
            <h1 className="text-2xl font-semibold">50</h1>
          </Card>
          <Card className="flex flex-col gap-2 p-2 px-4">
            <div className="flex items-center justify-between gap-2">
              <h1 className=" text-xl">Under Maintainance</h1>
              <Construction />
            </div>
            <h1 className="text-2xl font-semibold">50</h1>
          </Card>
        </div>
      </div>
    </div>
  );
}
