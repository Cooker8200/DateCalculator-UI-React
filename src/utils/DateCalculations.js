export const calculateDayDifference = (dateObject) => {
  const currentDate = new Date().setHours(0,0,0,0);
  const birthDay = dateObject.date.getDate();
  const birthMonth = dateObject.date.getMonth();
  const currentBirthday = new Date(new Date().getFullYear(), birthMonth, birthDay).getTime();
  if (currentDate > currentBirthday) {
    // birthday has already passed in the current year
    const nextBirthday = new Date(new Date().getFullYear() + 1, birthMonth, birthDay);
    const dayDifference = Math.round((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));
    return {
      name: dateObject.name,
      birthday: dateObject.date,
      daysToNextCelebration: dayDifference,
      type: dateObject.type,
    };
  } else if (currentDate < currentBirthday) {
    // birthday has not passed in the current year
    const dayDifference = Math.round((currentBirthday - currentDate) / (1000 * 60 * 60 * 24));
    return {
      name: dateObject.name,
      birthday: dateObject.date,
      daysToNextCelebration: dayDifference,
      type: dateObject.type,
    }
  } else {
    // birthday is today
    return {
      name: dateObject.name,
      birthday: dateObject.date,
      daysToNextCelebration: 0,
      type: dateObject.type,
    }
  }
};
