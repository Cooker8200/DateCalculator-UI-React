import React, { ChangeEvent } from 'react';
import { ListSubheader, MenuItem, TextField } from '@mui/material';
import { orderBy } from 'lodash';
import { IDate } from '../interfaces/IDate';

const DateSelector: React.FC<IDateSelectorProps> = ({
  dates,
  onDateSelect
}) => {

  const handleDateSelection = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    const date = dates.find(d => d.date === value);
    // @ts-ignore
    onDateSelect(date);
  };

  const renderMenuItems = (dateType: string) => {
    let datesForMenuItems: IDate[] = [];
    switch (dateType) {
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

    return datesForMenuItems.map((date: IDate) => (
      <MenuItem
        key={date.name}
        value={date.date}
        data-testid='date-selector__menu-item'
      >
        {dateType === 'birthday' ?
          `${date.name.toString()}'s Birthday`
          :
          date.name.toString()
        }
      </MenuItem>
    ))
  };

  if (dates === undefined) {
    return (<>Loading...</>);
  } else {
    return (
      <TextField
        select
        className='date-selector__textfield'
        data-testid='date-selector__textfield'
        onChange={(e) => handleDateSelection(e)}
        variant='standard'
        label='Choose a Date'
        defaultValue=''
      >
        {dates.some(x => x.type === 'birthday') &&
          <ListSubheader data-testid='date-selector__menu-item__header'>Birthdays</ListSubheader>
        }
        {renderMenuItems('birthday')}
        {dates.some(x => x.type === 'holiday') &&
          <ListSubheader data-testid='date-selector__menu-item__header'>Holidays</ListSubheader>
        }
        {renderMenuItems('holiday')}
        {dates.some(x => x.type === 'other') &&
          <ListSubheader data-testid='date-selector__menu-item__header'>Other</ListSubheader>
        }
        {renderMenuItems('other')}
      </TextField>
    )
  }
};

interface IDateSelectorProps {
  dates: IDate[];
  onDateSelect: (date: IDate) => void;
}

export default DateSelector;
