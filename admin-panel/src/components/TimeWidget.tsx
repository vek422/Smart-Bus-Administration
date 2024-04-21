import { format } from "date-fns";
import { Card } from "./ui/card";
import { useState, useEffect } from "react";

export default function TimeWidget() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervaleId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervaleId);
  }, []);
  return (
    <>
      <h1 className="text-5xl font-medium text-center">{`${date.getHours()}:${
        date.getMinutes() < 10 ? "0" : ""
      }${date.getMinutes()}`}</h1>
      <h2>{format(date, "EEEE dd MMMM yyyy")}</h2>
    </>
  );
}
