import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function BusInformationCard() {
  return (
    //
    <Card className="w-[80%]">
      <CardHeader>
        <CardTitle>Bus Information</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <Label className="text-md">Bus ID</Label>
          <p className="">BS001</p>
        </div>
        <div>
          <Label>Capacity</Label>
        </div>
      </CardContent>
    </Card>
  );
}
