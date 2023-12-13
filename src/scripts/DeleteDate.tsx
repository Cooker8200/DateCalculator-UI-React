import React from 'react';
import { ListSubheader, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { IDate } from '../interfaces/IDate';
import { orderBy } from 'lodash';

const DeleteDate: React.FC<IDeleteDateProps> = ({
  dates,
  onDeleteItemChange
}) => {
  const handleItemChange = (event: SelectChangeEvent<string>) => {
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
        {date.name.toString()}
      </MenuItem>
    ))
  };

  return (
    <>
      <Select
        onChange={handleItemChange}
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
      </Select>
    </>
  )
};

interface IDeleteDateProps {
  dates: IDate[];
  onDeleteItemChange: (dateName: string) => void;
}

export default DeleteDate;
