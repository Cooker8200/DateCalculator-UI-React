export const calculateDayDifference = (dateObject) => {
  const parsedDate = new Date(dateObject.date);
  const currentDate = new Date().setHours(0,0,0,0);
  const birthDay = parsedDate.getDate();
  const birthMonth = parsedDate.getMonth();
  const currentBirthday = new Date(new Date().getFullYear(), birthMonth, birthDay).getTime();
  if (currentDate > currentBirthday) {
    // day has already passed in the current year
    const nextOccuringDate = new Date(new Date().getFullYear() + 1, birthMonth, birthDay);
    const dayDifference = Math.round((nextOccuringDate - currentDate) / (1000 * 60 * 60 * 24));
    return {
      name: dateObject.name,
      date: dateObject.date,
      daysToNextCelebration: dayDifference,
      type: dateObject.type,
    };
  } else if (currentDate < currentBirthday) {
    // day has not passed in the current year
    const dayDifference = Math.round((currentBirthday - currentDate) / (1000 * 60 * 60 * 24));
    return {
      name: dateObject.name,
      date: dateObject.date,
      daysToNextCelebration: dayDifference,
      type: dateObject.type,
    }
  } else {
    // day is today
    return {
      name: dateObject.name,
      date: dateObject.date,
      daysToNextCelebration: 0,
      type: dateObject.type,
    }
  }
};
