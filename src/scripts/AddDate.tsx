import React from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, MenuItem } from '@mui/material';

const AddDate: React.FC<IAddDateProps> = ({
  onDateChange,
  onTypeChange,
  onNameChange,
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={new Date()}
          onChange={(date) => onDateChange(date as Date)}
          // renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TextField
        select
        fullWidth
        label='Choose Type'
        onChange={(event) => onTypeChange(event.target.value as string)}
        className='admin-dialog__add__select'
        variant='standard'
      >
        <MenuItem value='birthday'>Birthday</MenuItem>
        <MenuItem value='holiday'>Holiday</MenuItem>
        <MenuItem value='other'>Other</MenuItem>
      </TextField>
      <TextField
        fullWidth
        label='Date Name'
        variant='standard'
        onChange={(event) => onNameChange(event.target.value)}
        className='admin-dialog__add__textfield'
      />
    </>
  )
};

interface IAddDateProps {
  onDateChange: (date: Date) => void;
  onTypeChange: (type: string) => void;
  onNameChange: (name: string) => void;
};

export default AddDate;
