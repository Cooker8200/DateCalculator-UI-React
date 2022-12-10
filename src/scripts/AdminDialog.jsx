import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, Grid, MenuItem, Radio, TextField, Typography, Select } from '@mui/material';
import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import DeleteDate from './DeleteDate';
import { months } from '../constants/Months';

const AdminDialog = ({ dates, showDialog, handleCloseDialog, handleSaveClick }) => {
  const [dateFunction, setDateFunction] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [dateToDelete, setDateToDelete] = useState(undefined);

  const handleRadioChange = (functionType) => setDateFunction(functionType);

  const handleDateChange = (date) => {
    const newDate = new Date(date);
    const formattedDate = `${months[newDate.getMonth()]} ${newDate.getDay()} ${newDate.getFullYear()}`;
    setDate(formattedDate);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setType(value);
  };

  const onDeleteItemChange = (value) => {
    setDateToDelete(value)
  };

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
            <>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  openTo="year"
                  value={new Date()}
                  onChange={(date) => handleDateChange(date)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Select
                fullWidth
                label='Choose Date Type'
                onChange={handleTypeChange}
                className='admin-dialog__add__select'
              >
                <MenuItem value='birthday'>Birthday</MenuItem>
                <MenuItem value='holiday'>Holiday</MenuItem>
                <MenuItem value='other'>Other</MenuItem>
              </Select>
              <TextField
                fullWidth
                label='Date Name'
                onChange={handleNameChange}
                className='admin-dialog__add__textfield'
              />
            </>
          }
          {dateFunction === 'removeDate' &&
            <DeleteDate dates={dates} onDeleteItemChange={onDeleteItemChange}/>
          }
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item>
              <Button onClick={handleCloseDialog}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => handleSaveClick(dateFunction, date, name, type, dateToDelete)}>
                Save
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  )
};

export default AdminDialog;
