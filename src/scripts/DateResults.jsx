import { Typography } from '@material-ui/core';
import React from 'react';
import { dateType } from '../constants/DateType';

const DateResults = ({ results }) => {
  const renderCountdown = () => {
    console.log(results);
    if (results.daysToNextCelebration === 0) {
      return results.type === dateType.birthday ?
        <Typography>
          It is {results.name} birthday.  HAPPY BIRTHDAY!!
        </Typography>
      :
        <Typography>
          It is {results.name}!  Let's celebrate!!
        </Typography>
    } else {
      return results.type === dateType.birthday ?
        <Typography>
          {results.name} has {results.daysToNextCelebration} days until their birthday on {results.date.substring(0, results.date.lastIndexOf(' '))}!
        </Typography>
        :
        <Typography>
          {results.name} is {results.daysToNextCelebration} days away on {results.date}!
        </Typography>
    }
  };

  return (
    <>
      {renderCountdown()}
    </>
  );
};

export default DateResults;
