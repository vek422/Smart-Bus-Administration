import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
export default function StatCard({
  cardTitle1,
  cardStat1,
  cardTitle2,
  cardStat2,
}) {
  return (
    <Card className="flex justify-between">
      <div className="w-full border-0 flex items-center justify-center">
        <CardHeader className="flex items-center">
          <CardTitle className="text-sm font-medium flex justify-between">
            {cardTitle1}
          </CardTitle>
          <CardContent className="p-0">
            <div className="text-2xl font-bold">{cardStat1}</div>
            <p className="text-xs text-muted-foreground"></p>
          </CardContent>
        </CardHeader>
      </div>
      <Separator orientation="vertical" className="m-auto h-1/2" />
      <div className="w-full border-0 flex items-center justify-center">
        <CardHeader className="flex items-center">
          <CardTitle className="text-sm font-medium flex justify-between">
            {cardTitle2}
          </CardTitle>

          <CardContent className="p-0">
            <div className="text-2xl font-bold">{cardStat2}</div>
            <p className="text-xs text-muted-foreground"></p>
          </CardContent>
        </CardHeader>
      </div>
    </Card>
  );
}
