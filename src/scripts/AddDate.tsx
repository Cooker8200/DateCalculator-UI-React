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
    <div data-testid='add-date'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={new Date()}
          onChange={(date) => onDateChange(date as Date)}
          data-testid='add-date__date-picker'
          // renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TextField
        select
        fullWidth
        label='Choose Type'
        onChange={(event) => onTypeChange(event.target.value as string)}
        variant='standard'
        className='add-date__textfield__type'
        data-testid='add-date__textfield__type'
      >
        <MenuItem data-testid='add-date__menu-item' value='birthday'>Birthday</MenuItem>
        <MenuItem data-testid='add-date__menu-item' value='holiday'>Holiday</MenuItem>
        <MenuItem data-testid='add-date__menu-item' value='other'>Other</MenuItem>
      </TextField>
      <TextField
        fullWidth
        label='Date Name'
        variant='standard'
        onChange={(event) => onNameChange(event.target.value)}
        className='add-date__textfield__name'
        data-testid='add-date__textfield__name'
      />
    </div>
  )
};

interface IAddDateProps {
  onDateChange: (date: Date) => void;
  onTypeChange: (type: string) => void;
  onNameChange: (name: string) => void;
};

export default AddDate;
