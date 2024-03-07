import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { MoveRight } from "lucide-react";
export default function UserInformation() {
  return (
    <Card className="w-[80%]">
      <CardHeader>
        <CardTitle>User Information</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-md">Name</Label>
          <p className="">Vedant Eknath Kotkar</p>
        </div>
        <div>
          <Label className="text-md">User ID</Label>
          <p>STUD001</p>
        </div>
        <div>
          <Label className="text-md">Gender</Label>
          <p>Male</p>
        </div>
        <div>
          <Label className="text-md">Age</Label>
          <p>24</p>
        </div>
        <div>
          <Label className="text-md"></Label>
        </div>
        <div className="col-span-2">
          <Label className="text-md">Boarding Point</Label>
          <p>Shirdi</p>
        </div>
        <div className=" col-span-2">
          <Label className="text-md">Permanant Address</Label>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            perferendis, amet ea velit nostrum debitis corporis
          </p>
        </div>
        <div className="">
          <Label className="text-md">Contact Detail</Label>
          <p>721901312</p>
        </div>
        <div className="">
          <Label className="text-md">Email</Label>
          <p>vedantkotkar111@gmail.com</p>
        </div>
        <div className="col-span-2 border p-2 rounded-md ">
          <Label className="text-md">Pass Detail</Label>
          <p className="font-medium text-sm pt-2">Pass ID</p>
          <p className="">PS0001</p>
          <p className=" font-medium text-sm pt-2">Validity</p>
          <div className="flex gap-5">
            <p>{format(new Date(2024, 12, 3), "PPP")}</p>
            <MoveRight className=" text-muted-muted" />
            <p>{format(new Date(2024, 4, 2), "PPP")}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={"ghost"}>
          Renew Pass
        </Button>
      </CardFooter>
    </Card>
  );
}
