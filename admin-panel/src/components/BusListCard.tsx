import { CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

export default function BusListCard() {
  return (
    <Card className="rounded-md p-2 cursor-pointer hover:bg-muted flex items-center">
      <CheckCircle />
      <div className="grid grid-cols-4  place-items-center w-full">
        <p className="font-medium">BUS ID</p>
        <p className="">Driver</p>
        <p className="">Location</p>
        <p className="">Capacity</p>
      </div>
    </Card>
  );
}
