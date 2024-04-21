import { ColumnDef } from "@tanstack/react-table";

export type RouteType = {
  id: string;
  destination: string;
  cities: string;
  distance: string;
  totalUsers: number;
  status: "scheduled" | "completed" | "cancelled" | "not scheduled";
  assignedBus: string | undefined;
};

export const columns: ColumnDef<RouteType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "destination",
    header: "Destination",
  },
  {
    accessorKey: "cities",
    header: "Cities",
  },
  {
    accessorKey: "distance",
    header: "Distance",
  },
  {
    accessorKey: "totalUsers",
    header: "Total Users",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "assignedBus",
    header: "Assigned Bus",
  },
];
