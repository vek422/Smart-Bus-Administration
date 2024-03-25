import { Card } from "./ui/card";

export default function UserListcard({ userinfo, handleOnClick }) {
  return (
    <Card
      className="rounded-md p-2 w-full cursor-pointer hover:bg-muted"
      onClick={handleOnClick}
    >
      <div className="grid grid-cols-5">
        <p className="font-medium uppercase">{userinfo.uid}</p>
        <p className="col-span-2">{userinfo.name}</p>
        <p className="capitalize">{userinfo.boardingPoint}</p>
        <p className="">
          {userinfo?.passInfo ? userinfo.passInfo.expiryDate : "No Active Pass"}
        </p>
      </div>
    </Card>
  );
}
