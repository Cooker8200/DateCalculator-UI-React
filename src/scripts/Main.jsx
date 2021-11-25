import React from 'react';
import { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import DateSelector from './DateSelector';
import DateResults from './DateResults';
import { dateType } from '../constants/DateType';
import { calculateDayDifference } from '../utils/DateCalculations';

const Main = () => {
  const [dateCalculationResult, setDateCalculationResult] = useState(undefined);

  const onDateSelection = (dateObject) => {
    switch (dateObject.type) {
      case dateType.birthday:
        setDateCalculationResult(calculateDayDifference(dateObject));
        break;
      case dateType.holiday:
        setDateCalculationResult(calculateDayDifference(dateObject));
        break;
      default:
        setDateCalculationResult(undefined);
        break;
    }
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
        {dateCalculationResult !== undefined &&
          <Grid item xs={12}>
            <DateResults results={dateCalculationResult}/>
          </Grid>
        }
      </Grid>
    </>
  );
};

export default Main;
