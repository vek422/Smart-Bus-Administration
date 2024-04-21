import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";

export default function BusRow({ busID, status, city, eta, totalUsers }) {
  return (
    <TableRow>
      <TableCell>{busID}</TableCell>
      <TableCell>
        <Badge variant={"outline"}>{status}</Badge>
      </TableCell>
      <TableCell>{city}</TableCell>
      <TableCell>{eta}</TableCell>
      <TableCell>{totalUsers}</TableCell>
    </TableRow>
  );
}
