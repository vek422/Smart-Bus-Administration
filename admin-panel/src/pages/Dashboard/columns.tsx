import { ColumnDef } from "@tanstack/react-table";

export type BusLog = {
  busId: string;
  status: "running" | "arrived" | "not started";
  city: string;
  ETA: string;
  totalUsers: number;
};
export const columns: ColumnDef<BusLog>[] = [
  {
    accessorKey: "busId",
    header: "Bus ID",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "ETA",
    header: "ETA",
  },
  {
    accessorKey: "totalUsers",
    header: "Total Users",
  },
];
