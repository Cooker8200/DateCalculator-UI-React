import React from 'react';
import { MenuItem, Select } from '@material-ui/core';
import dates from '../constants/Dates';

const DateSelector = ({ onDateSelection }) => {
  const handleDateSelection = (event) => {
    const value = event.target.value;
    const dateObject = dates.find(date => date.name.toLowerCase() === value.toLowerCase());
    onDateSelection(dateObject);
  };

  const renderMenuItems = () => {
    return dates.map(date => (
      <MenuItem
        key={date.name}
        value={date.name}
      >
        {date.name.toString()}
      </MenuItem>
    ));
  };


  return (
    <>
      <Select
        className='date-selector__select'
        onChange={handleDateSelection}
      >
        {renderMenuItems()}
      </Select>
    </>
  )
};

export default DateSelector;
