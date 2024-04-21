import { ColumnDef } from "@tanstack/react-table";

export type UserInfo = {
  uid: string;
  name: string;
  boardingPoint: string;
  passStatus: "active" | "expired";
};

export const columns: ColumnDef<UserInfo>[] = [
  {
    header: "User ID",
    accessorKey: "uid",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Boarding Point",
    accessorKey: "boardingPoint",
  },
  {
    header: "Pass Status",
    accessorKey: "passStatus",
  },
];
