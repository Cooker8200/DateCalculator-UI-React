import React, { useEffect, useState } from 'react';
import { ListSubheader, MenuItem, Select } from '@material-ui/core';
import { orderBy } from 'lodash';
import { getAllDates } from './data/AWS';

const DateSelector = ({ onDateSelection }) => {
  const [dates, setDates] = useState(undefined);

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

  const renderMenuItems = (type) => {
    let datesForMenuItems;
    switch (type) {
      case 'birthday':
        datesForMenuItems = orderBy(dates.filter(date => date.type === 'birthday'), 'date');
        break;
      case 'holiday':
        datesForMenuItems = orderBy(dates.filter(date => date.type === 'holiday'), 'date');
        break;
      case 'other':
        datesForMenuItems = orderBy(dates.filter(date => date.type === 'other'), 'date');
        break;
      default:
        break;
    }
    return datesForMenuItems.map(date => (
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
          {dates.some(x => x.type === 'birthday') &&
            <ListSubheader>Birthdays</ListSubheader>
          }
          {renderMenuItems('birthday')}
          {dates.some(x => x.type === 'holiday') &&
            <ListSubheader>Holidays</ListSubheader>
          }
          {renderMenuItems('holiday')}
          {dates.some(x => x.type === 'other') &&
            <ListSubheader>Other</ListSubheader>
          }
          {renderMenuItems('other')}
        </Select>
      </>
    )
  }
};

export default DateSelector;
