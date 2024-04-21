import SideNav from "@/components/SideNav";
import StatCard from "@/components/StatCard";
import TimeWidget from "@/components/TimeWidget";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Bus, ExternalLink, ListFilter, Search, Users2 } from "lucide-react";
const cardInfo = [
  {
    title: "Active Users",
    stat: "100",
    subtext: "Users Travelling Today",
    icon: Users2,
  },
  {
    title: "Active Buses",
    stat: "50",
    subtext: "Buses Travelling Today",
    icon: Bus,
  },
];
const busLog: BusData[] = (() => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      busId: `BS0${i}`,
      status: "Running",
      city: "Shirdi",
      ETA: "2hrs",
      totalUsers: "100",
    });
  }
  return data;
})();

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full flex-col bg-muted/60 overflow-hidden">
      <SideNav />
      <div className="flex flex-col sm:gap-4 sm:p-4 sm:pl-14">
        <header className="px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">DashBoard</h1>
          <Avatar>
            <AvatarFallback>VK</AvatarFallback>
          </Avatar>
        </header>
        <header className="grid grid-cols-4 px-4 h-32 gap-4">
          {cardInfo.map((card, index) => (
            <StatCard key={index} cardInfo={card} />
          ))}
          <div></div>
          <Card className="flex items-center justify-center flex-col gap-5">
            <TimeWidget />
          </Card>
        </header>
        <main className="p-4 w-3/4 flex flex-col gap-4 ">
          <div className="w-full flex justify-between   items-center">
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
            <Button variant={"outline"} className="gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </div>
          <Card className="p-4 h-[60vh]">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-medium text-base">Active Buses</h1>
                <p className="text-muted-foreground font-light text-sm">
                  Buses Currently Traveling
                </p>
              </div>
              <Button variant={"outline"} className="flex items-center gap-1">
                <p>View All</p>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <DataTable columns={columns} data={busLog} />
          </Card>
        </main>
      </div>
    </div>
  );
}
