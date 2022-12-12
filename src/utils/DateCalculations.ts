import { IDate } from "../interfaces/IDate";

export const calculateDayDifference = (dateObject: IDate): number => {
  const parsedDate = new Date(dateObject.date);
  const currentDay = new Date().setHours(0,0,0,0);
  const birthDay = parsedDate.getDate();
  const birthMonth = parsedDate.getMonth();
  const currentBirthday = new Date(new Date().getFullYear(), birthMonth, birthDay).getTime();
  if (currentDay > currentBirthday) {
    // day has already passed in the current year
    const nextOccuringDate = new Date(new Date().getFullYear() + 1, birthMonth, birthDay);
    // @ts-ignore
    const dayDifference = Math.round((nextOccuringDate - currentDay) / (1000 * 60 * 60 * 24));
    return dayDifference;
  } else if (currentDay < currentBirthday) {
    // day has not passed in the current year
    const dayDifference = Math.round((currentBirthday - currentDay) / (1000 * 60 * 60 * 24));
    return dayDifference;
  } else {
    // day is today
    return 0;
  }
};
