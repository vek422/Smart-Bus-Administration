import SideNav from "@/components/SideNav";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ListFilter, Search } from "lucide-react";
import { columns, UserInfo } from "./columns";
import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";

const users: UserInfo[] = (() => {
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      uid: `US0${i}`,
      name: "User",
      boardingPoint: "Shirdi",
      passStatus: "active",
    });
  }
  return data;
})();
export default function Users() {
  return (
    <div className="w-full h-screen bg-muted/40 pl-14">
      <SideNav />
      <header className="flex p-4 w-full justify-between items-center">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Avatar>
          <AvatarFallback>VK</AvatarFallback>
        </Avatar>
      </header>
      <main className="grid grid-cols-4 px-4">
        <div className="col-span-3 flex flex-col gap-2">
          <div className="flex justify-between">
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
          <Card className="p-2">
            <div className="p-4 ">
              <h2 className="text-xl font-semibold">All Users</h2>
            </div>
            <Separator />
            <DataTable columns={columns} data={users} />
          </Card>
        </div>
      </main>
    </div>
  );
}
