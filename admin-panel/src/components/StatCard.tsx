import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
export default function StatCard({ cardInfo }) {
  return (
    <Card className="flex p-4 flex-col gap-2">
      <div className="flex justify-between items-center gap-2">
        <p className="font-normal  text-lg">{cardInfo.title}</p>
        <cardInfo.icon />
      </div>
      <h1 className="text-2xl font-bold">{cardInfo.stat}</h1>
      <p className="font-light text-muted-foreground">{cardInfo.subtext}</p>
    </Card>
  );
}
