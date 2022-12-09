import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DateSelector from './DateSelector';
import DateResults from './DateResults';
import { calculateDayDifference } from '../utils/DateCalculations';
import AdminDialog from './AdminDialog';
import { getAllDates, putNewDate } from './data/AWS';

const Main = () => {
  const [dates, setDates] = useState(undefined);
  const [dateCalculationResult, setDateCalculationResult] = useState(undefined);
  const [showAdminDialog, setShowAdminDialog] = useState(false);

  useEffect(() => {
    getAllDates()
      .then(resp => setDates(JSON.parse(resp)))
      .catch(err => console.log(err.message));
  }, []);

  const onDateSelection = (dateObject) => {
    setDateCalculationResult(calculateDayDifference(dateObject));
  };

  const handleCloseDialog = () => setShowAdminDialog(false);

  const handleSaveClick = (dateFunction, date, name, type) => {
    console.log(dateFunction);
    switch (dateFunction){
      case 'addDate':
        putNewDate({ date, name, type });
        break;
      default:
        console.warn('Hit the default case');
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
          <DateSelector dates={dates} onDateSelection={onDateSelection}/>
          <IconButton onClick={() => setShowAdminDialog(true)}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Grid>
        {dateCalculationResult !== undefined &&
          <Grid item xs={12}>
            <DateResults results={dateCalculationResult}/>
          </Grid>
        }
      </Grid>
      {showAdminDialog &&
        <AdminDialog
          dates={dates}
          showDialog={showAdminDialog}
          handleCloseDialog={handleCloseDialog}
          handleSaveClick={handleSaveClick}
        />
      }
    </>
  );
};

export default Main;
