import { differenceInDays } from "date-fns";

export const isPassValid = (passInfo) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // set the time to 00:00:00.000
  const endDate = new Date(passInfo.endDate);
  endDate.setHours(0, 0, 0, 0); // set the time to 00:00:00.000
  return endDate >= today;
};
