import { ColumnDef } from "@tanstack/react-table";

export type BusInfo = {
  busId: string;
  capacity: number;
  lastRoute: string;
  lastDriver: string;
  lastMaintenance: Date;
};
export const columns: ColumnDef<BusInfo>[] = [
  { accessorKey: "busId", header: "Bus ID" },
  { accessorKey: "capacity", header: "Capacity" },
  { accessorKey: "lastRoute", header: "Last Route" },
  { accessorKey: "lastDriver", header: "Last Driver" },
  { accessorKey: "lastMaintenance", header: "Last Maintenance" },
];
