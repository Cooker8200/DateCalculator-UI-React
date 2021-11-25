import React from 'react';
import { ListSubheader, MenuItem, Select } from '@material-ui/core';
import * as Dates from '../constants/Dates';
import { concat, orderBy } from 'lodash';

const DateSelector = ({ onDateSelection }) => {
  const allDates = concat(Dates.birthdays, Dates.holidays);

  const handleDateSelection = (event) => {
    const value = event.target.value;
    const dateObject = allDates.find(date => date.date === value);
    onDateSelection(dateObject);
  };

  const renderBirthdayMenuItems = () => {
    return orderBy(Dates.birthdays, 'name').map(date => (
      <MenuItem
        key={date.name}
        value={date.date}
      >
        {date.name.toString()}
      </MenuItem>
    ));
  };

  const renderImportanyDateMenuItems = () => {
    return orderBy(Dates.holidays, 'name').map(date => (
      <MenuItem
        key={date.name}
        value={date.date}
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
