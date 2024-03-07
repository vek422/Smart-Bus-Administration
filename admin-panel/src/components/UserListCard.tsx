import { Card } from "./ui/card";

export default function UserListcard() {
  return (
    <Card className="rounded-md p-2 cursor-pointer hover:bg-muted">
      <div className="grid grid-cols-4  place-items-center">
        <p className="font-medium">ST001</p>
        <p className="">Vedant Kotkar</p>
        <p className="">Age</p>
        <p className="">Gender</p>
      </div>
    </Card>
  );
}
