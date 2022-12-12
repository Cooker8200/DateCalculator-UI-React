import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DateSelector from './DateSelector';
import DateResults from './DateResult';
import { calculateDayDifference } from '../utils/DateCalculations';
import AdminDialog from './AdminDialog';
import { getAllDates, putNewDate, removeDate } from './data/AWS';
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

  const handleCloseDialog = (): void => setShowAdminDialog(false);

  const handleSaveClick = (dateFunction: string, date: string, name: string, type: string, dateToDelete: string): void => {
    switch (dateFunction){
      case 'addDate':
        putNewDate({ date, name, type });
        break;
      case 'removeDate':
        removeDate(dateToDelete);
        break;
      default:
        console.warn('Hit the default case');
    }
    handleCloseDialog();
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
          <DateSelector
            dates={dates}
            onDateSelect={onDateSelect}
          />
          <IconButton onClick={() => setShowAdminDialog(true)}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Grid>
        {selectedDate !== undefined && daysToSelectedDate !== undefined &&
          <Grid item xs={12}>
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
          handleCloseDialog={handleCloseDialog}
          handleSaveClick={handleSaveClick}
        />
      }
    </>
  );
};

export default Main;
