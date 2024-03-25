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
import { format, formatDistance, differenceInDays } from "date-fns";
import { MoveRight } from "lucide-react";
export default function UserInformation({ userInfo }) {
  if (!userInfo)
    return (
      <div className="">
        <p>Loading....</p>
      </div>
    );
  const calculateDiff = differenceInDays(
    new Date(userInfo?.passInfo?.endDate),
    new Date(userInfo?.passInfo?.startDate)
  );
  const canRenewPass = Boolean(userInfo.passInfo) && calculateDiff < 10;
  console.log(canRenewPass);
  return (
    <Card className="w-[80%]">
      <CardHeader>
        <CardTitle>User Information</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-md">Name</Label>
          <p className="">{userInfo.name}</p>
        </div>
        <div>
          <Label className="text-md">User ID</Label>
          <p className="uppercase">{userInfo.uid}</p>
        </div>
        <div>
          <Label className="text-md">Gender</Label>
          <p>{userInfo.gender}</p>
        </div>
        <div>
          <Label className="text-md">Age</Label>
          <p>{userInfo.age}</p>
        </div>
        {/* <div>
          <Label className="text-md"></Label>
        </div> */}
        <div className="col-span-2">
          <Label className="text-md">Boarding Point</Label>
          <p>{userInfo.boardingPoint}</p>
        </div>
        <div className=" col-span-2">
          <Label className="text-md">Permanant Address</Label>
          <p>{userInfo.pAddress}</p>
        </div>
        <div className="">
          <Label className="text-md">Contact Detail</Label>
          <p>{userInfo.contactNumber}</p>
        </div>
        <div className="">
          <Label className="text-md">Email</Label>
          <p>{userInfo.email}</p>
        </div>
        {userInfo?.passInfo ? (
          <div className="col-span-2 border border-green-600 p-2 rounded-md bg-green-900/25">
            <Label className="text-md">Pass Detail</Label>
            <p className="font-medium text-sm pt-2">Pass ID</p>
            <p className="">{userInfo.passInfo._id}</p>
            <p className=" font-medium text-sm pt-2">Validity</p>
            <div className="flex gap-5">
              <p>{format(new Date(userInfo.passInfo.startDate), "PPP")}</p>
              <MoveRight className=" text-muted-muted" />
              <p>{format(new Date(userInfo.passInfo.endDate), "PPP")}</p>
            </div>
          </div>
        ) : (
          <div>
            <p className="italic text-muted-foreground">No Active Pass</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {Boolean(canRenewPass || Boolean(!userInfo?.passInfo)) && (
          <Button className="w-full" variant={"ghost"}>
            Renew Pass
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
