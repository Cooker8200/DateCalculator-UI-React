import React from 'react';
import { useState } from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DateSelector from './DateSelector';
import DateResults from './DateResults';
import { calculateDayDifference } from '../utils/DateCalculations';
import AdminDialog from './AdminDialog';

const Main = () => {
  const [dateCalculationResult, setDateCalculationResult] = useState(undefined);
  const [showAdminDialog, setShowAdminDialog] = useState(false);

  const onDateSelection = (dateObject) => {
    setDateCalculationResult(calculateDayDifference(dateObject));
  };

  const handleCloseDialog = () => setShowAdminDialog(false);

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
          showDialog={showAdminDialog}
          handleCloseDialog={handleCloseDialog}
        />
      }
    </>
  );
};

export default Main;
