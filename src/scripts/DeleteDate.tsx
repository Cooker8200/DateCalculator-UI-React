import React, { ChangeEvent } from 'react';
import { ListSubheader, MenuItem, TextField } from '@mui/material';
import { IDate } from '../interfaces/IDate';
import { orderBy } from 'lodash';

const DeleteDate: React.FC<IDeleteDateProps> = ({
  dates,
  onDeleteItemChange
}) => {
  const handleItemChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    onDeleteItemChange(value);
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
        value={date.name}
      >
        {`${date.name} (${date.date})`}
      </MenuItem>
    ))
  };

  return (
    <>
      <TextField
        select
        variant='standard'
        label='Select a Date'
        onChange={(e) => handleItemChange(e)}
        fullWidth
      >
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
      </TextField>
    </>
  )
};

interface IDeleteDateProps {
  dates: IDate[];
  onDeleteItemChange: (dateName: string) => void;
}

export default DeleteDate;