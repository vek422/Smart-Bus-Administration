import { MoveRight } from "lucide-react";
export default function BusDataCard({ busId, source, destination, startTime }) {
  return (
    <div className="flex justify-between border p-1 rounded-sm">
      <p className="font-medium">{busId}</p>
      <div className="flex gap-2">
        <p>{source}</p>
        <MoveRight />
        <p>{destination}</p>
      </div>
      <p>{startTime}</p>
    </div>
  );
}
