import SideNav from "@/components/SideNav";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarCheck, MapPinned, Search } from "lucide-react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const routes: RouteType[] = (() => {
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      id: `RT0${i}`,
      destination: "Shirdi",
      cities: "Nashik, Pune, Mumbai",
      distance: "200km",
      totalUsers: 50,
      status: "scheduled",
      assignedBus: "BS01",
    });
  }
  return data;
})();
export default function Route() {
  return (
    <div className="w-full flex flex-col h-screen bg-muted/40 pl-14">
      <SideNav />
      <header className="flex p-4 w-full gap-5">
        <h1 className="text-2xl font-semibold">Route</h1>
      </header>

      <main className="p-4 grid gap-4 grid-cols-4 h-full">
        <div className="flex flex-col h-full gap-4">
          <Card className="flex flex-col p-4">
            <div className="flex items-center justify-between">
              <h1 className="font-medium">Total Cities</h1>
              <MapPinned />
            </div>
            <p className="text-lg">50</p>
          </Card>
          <Card className="flex flex-col p-4">
            <div className="flex items-center justify-between">
              <h1 className="font-medium">Scheduled Routes</h1>
              <CalendarCheck />
            </div>
            <p className="text-lg">50</p>
          </Card>
        </div>
        <Card className="flex flex-col gap-2 col-span-3 h-full m-0 p-2">
          <div className="flex items-center justify-between gap-4 ">
            <div className="flex gap-4 ">
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
              <Badge
                variant="destructiveOutline"
                className="max-h-min cursor-pointer"
              >
                20 routes are not schedule
              </Badge>
            </div>
            <div className="">
              <Button variant="default" className="w-32">
                Add Route
              </Button>
            </div>
          </div>
          <DataTable columns={columns} data={routes} />
        </Card>
      </main>
    </div>
  );
}
