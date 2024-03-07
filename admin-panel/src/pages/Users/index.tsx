import Nav from "@/components/Nav";
import { SideNav } from "@/components/SideNav";
import UserListcard from "@/components/UserListCard";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search, Ticket, UserRoundCheck, Users2 } from "lucide-react";
import UserInformation from "./UserInformationCard";
import { useState } from "react";
export default function Users() {
  const [selected, setSelected] = useState(0);
  const links = [
    {
      title: "All Users",
      label: "",
      icon: Users2,
      onClick: function () {
        setSelected(0);
      },
    },
    {
      title: "Active Users",
      label: "",
      icon: UserRoundCheck,
      onClick: function () {
        setSelected(1);
      },
    },
    {
      title: "Users With Pass",
      label: "",
      icon: Ticket,
      onClick: function () {
        setSelected(2);
      },
    },
    {
      title: "User Approvals",
      label: "",
      icon: Users2,
      onClick: function () {
        setSelected(3);
      },
    },
  ];
  return (
    <div className="max-w-screen max-h-screen overflow-hidden">
      <Nav />
      <div className="flex border h-[90.5vh]">
        <div className="w-2/12">
          <SideNav isCollapsed={false} links={links} selected={selected} />
        </div>
        <div className="w-5/12 border flex flex-col gap-5">
          <h1 className="text-2xl font-semibold px-4 pt-4">
            {links[selected].title}
          </h1>
          <Separator />
          <div className="px-5">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </div>
          {/* <Separator className="w-[80%] mx-auto" /> */}
          <div className="p-2 flex flex-col h-full gap-2 overflow-scroll no-scrollbar">
            {[...new Array(100)].map(() => (
              <UserListcard />
            ))}
          </div>
        </div>
        <div className="w-5/12 border flex flex-col gap-5 items-center p-2 justify-center">
          <UserInformation />
        </div>
      </div>
    </div>
  );
}
