import React from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { IDate } from '../interfaces/IDate';

const DeleteDate: React.FC<IDeleteDateProps> = ({
  dates,
  onDeleteItemChange
}) => {
  const handleItemChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    onDeleteItemChange(value);
  };

  const renderMenuItems = () => {
    return dates.map((date: IDate) => (
      <MenuItem
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
        {renderMenuItems()}
      </Select>
    </>
  )
};

interface IDeleteDateProps {
  dates: IDate[];
  onDeleteItemChange: (dateName: string) => void;
}

export default DeleteDate;
