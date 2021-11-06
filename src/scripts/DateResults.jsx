import { Typography } from '@material-ui/core';
import React from 'react';

const DateResults = ({ results }) => {
  const renderCountdown = () => {
    if (results.daysToNextBirthday === 0) {
      return (
        <Typography>
          It is {results.name} birthday.  HAPPY BIRTHDAY!!
        </Typography>
      )
    } else {
      return (
        <Typography>
          {results.name} has {results.daysToNextBirthday} days until their birthday!
        </Typography>
      )
    }
  };

  return (
    <>
      {renderCountdown()}
    </>
  );
};

export default DateResults;
