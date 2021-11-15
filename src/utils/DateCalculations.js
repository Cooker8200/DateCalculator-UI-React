export const calculateBirthday = (dateObject) => {
  const currentYear = new Date().getFullYear();
  const birthDay = dateObject.date.getDate();
  const birthMonth = dateObject.date.getMonth();
  const futureDate = new Date(currentYear + 1, birthMonth, birthDay);
  const dayDifference = Math.round(( futureDate.getTime() - new Date().getTime() ) / ( 1000 * 60 * 60 * 24 )).toFixed(0);
  return {
    name: dateObject.name,
    birthday: dateObject.date,
    daysToNextBirthday: dayDifference,
  };
};

export const calculateHoliday = (dateObject) => {
  const currentYear = new Date().getFullYear();

  return undefined;
}