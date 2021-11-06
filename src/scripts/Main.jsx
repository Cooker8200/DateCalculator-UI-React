import React from 'react';
import { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import DateSelector from './DateSelector';
import DateResults from './DateResults';

const Main = () => {
  const [result, setResult] = useState(undefined);

  const onDateSelection = (dateObject) => {
    const currentYear = new Date().getFullYear();
    const birthDay = dateObject.birthday.getDate();
    const birthMonth = dateObject.birthday.getMonth();
    const futureDate = new Date(currentYear + 1, birthMonth, birthDay);
    const dayDifference = Math.round(( futureDate.getTime() - new Date().getTime() ) / ( 1000 * 60 * 60 * 24 )).toFixed(0);
    const dateResult = {
      name: dateObject.name,
      birthday: dateObject.birthday,
      daysToNextBirthday: dayDifference,
    };
    setResult(dateResult);
  };

  return (
    <>
      <Grid
        container
        justifyContent='center'
        direction='column'
        alignItems='center'
        spacing={6}
      >
        <Grid item xs={12}>
          <Typography
            variant='h2'
          >
            Family Dates Tracker
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DateSelector onDateSelection={onDateSelection}/>
        </Grid>
        {result !== undefined &&
          <Grid item xs={12}>
            <DateResults results={result}/>
          </Grid>
        }
      </Grid>
    </>
  );
};

export default Main;
