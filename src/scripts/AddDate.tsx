import React from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, Select, MenuItem } from '@mui/material';

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
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Select
        fullWidth
        label='Choose Date Type'
        onChange={(event) => onTypeChange(event.target.value as string)}
        className='admin-dialog__add__select'
      >
        <MenuItem value='birthday'>Birthday</MenuItem>
        <MenuItem value='holiday'>Holiday</MenuItem>
        <MenuItem value='other'>Other</MenuItem>
      </Select>
      <TextField
        fullWidth
        label='Date Name'
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
