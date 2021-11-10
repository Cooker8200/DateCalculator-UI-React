import React from 'react';
import { ListSubheader, MenuItem, Select } from '@material-ui/core';
import { birthdays, holidays } from '../constants/Dates';

const DateSelector = ({ onDateSelection }) => {
  const handleDateSelection = (event) => {
    const value = event.target.value;
    const dateObject = birthdays.find(birthday => birthday.name.toLowerCase() === value.toLowerCase());
    onDateSelection(dateObject);
  };

  const renderBirthdayMenuItems = () => {
    return birthdays.map(birthday => (
      <MenuItem
        key={birthday.name}
        value={birthday.name}
      >
        {birthday.name.toString()}
      </MenuItem>
    ));
  };

  const renderImportanyDateMenuItems = () => {
    return holidays.map(date => (
      <MenuItem
        key={date.name}
        value={date.name}
      >
        {date.name.toString()}
      </MenuItem>
    ))
  };

  return (
    <>
      <Select
        className='date-selector__select'
        onChange={handleDateSelection}
      >
        <MenuItem value='' />
        <ListSubheader>Birthdays</ListSubheader>
        {renderBirthdayMenuItems()}
        <ListSubheader>Holidays</ListSubheader>
        {renderImportanyDateMenuItems()}
      </Select>
    </>
  )
};

export default DateSelector;
