import { Dialog, DialogContent, DialogTitle, FormLabel, Grid, Radio, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const AdminDialog = ({ showDialog, handleCloseDialog }) => {
  const [dateFunction, setDateFunction] = useState(undefined);

  const handleRadioChange = (functionType) => setDateFunction(functionType);

  return (
    <>
      <Dialog
        open={showDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>
          Date Admin
        </DialogTitle>
        <DialogContent>
          <Grid container direciton='column'>
            <Grid item xs={12}>
              <Typography>
                What do you want to do?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Radio
                checked={dateFunction === 'addDate'}
                onChange={e => handleRadioChange(e.target.value)}
                value='addDate'
                aria-label='Add Date'
                />
                <FormLabel>Add Date</FormLabel>
            </Grid>
            <Grid item xs={12}>
              <Radio
                checked={dateFunction === 'removeDate'}
                onChange={e => handleRadioChange(e.target.value)}
                value='removeDate'
                />
                <FormLabel>Remove Date</FormLabel>
            </Grid>
          </Grid>
          {dateFunction === 'addDate' &&
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="year"
                value={new Date()}
                onChange={(event) => console.log(event)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          }
          {dateFunction === 'removeDate' &&
            <div>Remove Date Here...</div>
          }
        </DialogContent>
      </Dialog>
    </>
  )
};

export default AdminDialog;
