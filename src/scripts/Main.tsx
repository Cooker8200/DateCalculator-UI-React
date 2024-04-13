import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Typography, IconButton, Tooltip } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DateSelector from './DateSelector';
import DateResults from './DateResult';
import { calculateDayDifference } from '../utils/DateCalculations';
import AdminDialog from './AdminDialog';
import { getAllDates, putNewDate, removeDate } from './data/AwsClient';
import { IDate } from '../interfaces/IDate';

const Main: React.FC = () => {
  const [dates, setDates] = useState<IDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<IDate | undefined>(undefined);
  const [daysToSelectedDate, setDaysToSelectedDate] = useState<number | undefined>(undefined);
  const [showAdminDialog, setShowAdminDialog] = useState<boolean>(false);

  useEffect(() => {
    getAllDates()
      .then(resp => setDates(resp))
      .catch(err => console.error(err.message));
  }, []);

  const onDateSelect = (date: IDate): void => {
    setSelectedDate(date);
    setDaysToSelectedDate(calculateDayDifference(date));
  };

  const onDialogClose = (): void => setShowAdminDialog(false);

  const onSave = (dateFunction: string, date: string, name: string, type: string, dateToDelete: string): void => {
    switch (dateFunction){
      case 'addDate':
        putNewDate({ date, name, type })
          .then(() => {
            getAllDates()
            .then(resp => setDates(resp))
            .catch(err => console.error(err.message))
            .finally(() => onDialogClose());
          });
        break;
      case 'removeDate':
        removeDate(dateToDelete)
          .then(() => {
            getAllDates()
            .then(resp => setDates(resp))
            .catch(err => console.error(err.message))
            .finally(() => onDialogClose());
          });
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
            variant='h4'
            data-testid='main__title'
          >
            Date Calculator
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item alignItems='center'>
          <Typography
            variant='h5'
            data-testid='main__text__date-selector'
          >
            How many days until...
          </Typography>
          <div data-testid='main__date-selector'>
            <DateSelector
              dates={dates}
              onDateSelect={onDateSelect}
            />
          </div>
        </Grid>
          <Grid item data-testid='main__dates-admin'>
            <Tooltip title='Manage Dates'>
              <IconButton onClick={() => setShowAdminDialog(true)}>
                <SettingsOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        {selectedDate !== undefined && daysToSelectedDate !== undefined &&
          <Grid item xs={12} data-testid='main__dates-results'>
            <DateResults
              selectedDate={selectedDate}
              daysToSelectedDate={daysToSelectedDate}
            />
          </Grid>
        }
      </Grid>
      {showAdminDialog &&
        <AdminDialog
          dates={dates}
          showDialog={showAdminDialog}
          onDialogClose={onDialogClose}
          onSave={onSave}
        />
      }
    </>
  );
};

export default Main;
