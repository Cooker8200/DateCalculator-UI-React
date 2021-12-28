import React, { useEffect, useState } from 'react';
import { ListSubheader, MenuItem, Select } from '@material-ui/core';
import { orderBy } from 'lodash';
import { getAllDates } from './data/AWS';

const DateSelector = ({ onDateSelection }) => {
  const [ dates, setDates ] = useState(undefined);

  useEffect(() => {
    const test = async () => {
      await getAllDates()
        .then(resp => setDates(JSON.parse(resp)))
        .catch(err => console.log(err.message));
    };

    test();
  }, []);

  const handleDateSelection = (event) => {
    const value = event.target.value;
    const dateObject = dates.find(date => date.date === value);
    onDateSelection(dateObject);
  };

  const renderBirthdayMenuItems = () => {
    return orderBy(dates.filter(date => date.type === 'birthday'), 'name')
      .map(date => (
      <MenuItem
        key={date.name}
        value={date.date}
      >
        {date.name.toString()}
      </MenuItem>
    ));
  };

  const renderImportanyDateMenuItems = () => {
    return orderBy(dates.filter(date => date.type === 'holiday'), 'name')
      .map(date => (
      <MenuItem
        key={date.name}
        value={date.date}
      >
        {date.name.toString()}
      </MenuItem>
    ))
  };

  if (dates === undefined) {
    return (<>Loading...</>);
  }
  else {
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
  }
};

export default DateSelector;
