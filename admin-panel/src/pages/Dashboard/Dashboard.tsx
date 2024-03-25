import { TooltipProvider } from "../../components/ui/tooltip";
import Nav from "../../components/Nav";
import TimeWidget from "../../components/TimeWidget";
import { socket } from "@/socket";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import DatePicker from "../../components/DatePicker";
import StatCard from "../../components/StatCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import BusDataCard from "../../components/BusDataCard";
import StudentLogCard from "../../components/StudentLogCard";
import { useEffect } from "react";
const routes = [
  "Shirdi",
  "Kopargaon",
  "Rahata",
  "Sangamener",
  "Yeola",
  "Manmad",
  "Yesgaon",
  "Sinner",
  "Rahuri",
  "Kolapewade",
];

export default function DashBoard() {
  console.log(socket);
  socket.emit("chat message", "hello");
  socket.on("chat message", (msg) => {
    console.log("New Message ", msg);
  });
  return (
    <TooltipProvider delayDuration={0}>
      <div className="h-screen flex flex-col gap-2 w-full overflow-hidden">
        <Nav />
        <Tabs defaultValue="overview">
          <div className=" px-2 flex flex-col">
            <div className="flex justify-between items-center ">
              <div className="p-2">
                <h1 className="text-3xl font-semibold">DashBoard</h1>
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="report">Report</TabsTrigger>
                </TabsList>
              </div>
              <div className="gap-2 flex items-center">
                <DatePicker />
                <TimeWidget />
              </div>
            </div>
            <TabsContent
              value="overview"
              className="p-2  overflow-hidden grid grid-cols-3 gap-4"
            >
              <div className="grid grid-rows-3 gap-4">
                <StatCard
                  cardTitle1={"Total Passengers"}
                  cardStat1={4500}
                  cardTitle2={"Active Passengers"}
                  cardStat2={4000}
                />
                <StatCard
                  cardTitle1={"Total Active Passes"}
                  cardStat1={4500}
                  cardTitle2={"Total Tickets"}
                  cardStat2={4000}
                />
                <StatCard
                  cardTitle1={"Total Buses"}
                  cardStat1={4500}
                  cardTitle2={"Running Buses"}
                  cardStat2={4000}
                />
              </div>
              <Card className="">
                <CardHeader>
                  <CardTitle className="text-xl">Bus Log</CardTitle>
                  <CardDescription className="mt-0">
                    Currently Travelling Buses
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 h-[60vh] overflow-scroll  no-scrollbar">
                  {[...new Array(10)].map((i, key) => (
                    <BusDataCard
                      busId={`BS0${key}`}
                      source={routes[key]}
                      destination={routes[9 - key]}
                      startTime={"9:40"}
                    />
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">User Log</CardTitle>
                  <CardDescription className="mt-0">
                    Recent User Activity
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 h-[60vh] overflow-scroll  no-scrollbar">
                  {[...new Array(10)].map((i, key) => (
                    <StudentLogCard
                      studId={"ST01"}
                      location={`Student 0${key}`}
                      time={"9:40"}
                    />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="report">report</TabsContent>
          </div>
        </Tabs>
      </div>
    </TooltipProvider>
  );
}

// <div className="px-2 min-h-full grid gap-4 grid-cols-4">
//                 <Card>
//                   <CardHeader className="flex ">
//                     <CardTitle className="text-sm font-medium flex justify-between">
//                       Total Passengers
//                       <Users />
//                     </CardTitle>
//                     <CardContent className="p-0">
//                       <div className="text-2xl font-bold">45000</div>
//                       <p className="text-xs text-muted-foreground"></p>
//                     </CardContent>
//                   </CardHeader>
//                 </Card>
//                 <Card>
//                   <CardHeader className="flex ">
//                     <CardTitle className="text-sm font-medium flex justify-between">
//                       Active Buses
//                       <Bus />
//                     </CardTitle>
//                     <CardContent className="p-0">
//                       <div className="text-2xl font-bold">50</div>
//                       <p className="text-xs text-muted-foreground"></p>
//                     </CardContent>
//                   </CardHeader>
//                 </Card>
//                 <Card>
//                   <CardHeader className="flex ">
//                     <CardTitle className="text-sm font-medium flex justify-between">
//                       Total Travelled Distance
//                       <Route />
//                     </CardTitle>
//                     <CardContent className="p-0">
//                       <div className=" flex items-end gap-2">
//                         <p className="text-2xl font-bold">9000</p>
//                         <p className=" text-muted-foreground text-sm">in km</p>
//                       </div>
//                       <p className="text-xs text-muted-foreground"></p>
//                     </CardContent>
//                   </CardHeader>
//                 </Card>
//               </div>
//               <div className="grid grid-cols-5 p-2 ">
//                 <Card className="col-span-3 border rounded-md p-4">
//                   <Overview />
//                 </Card>
//               </div>
