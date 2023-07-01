import React from 'react';
import { Typography } from '@mui/material';
import { dateType } from '../../constants/DateType';
import { IDate } from '../../interfaces/IDate';

const DateResult: React.FC<IDateResultProps> = ({
  selectedDate,
  daysToSelectedDate,
}) => {
  const renderCountdown = () => {
    if (daysToSelectedDate === 0) {
      return selectedDate.type === dateType.birthday ?
        <Typography>
          It is {selectedDate.name} birthday.  HAPPY BIRTHDAY!!
        </Typography>
      :
        <Typography>
          It is {selectedDate.name}!  Let's celebrate!!
        </Typography>
    } else {
      return selectedDate.type === dateType.birthday ?
        <Typography>
          {selectedDate.name} has {daysToSelectedDate} days until their birthday on {selectedDate.date.substring(0, selectedDate.date.lastIndexOf(' '))}!
        </Typography>
        :
        <Typography>
          {selectedDate.name} is {daysToSelectedDate} days away on {selectedDate.date}!
        </Typography>
    }
  };

  return (
    <>
      {renderCountdown()}
    </>
  );
};

interface IDateResultProps {
  selectedDate: IDate;
  daysToSelectedDate: number;
}

export default DateResult;
