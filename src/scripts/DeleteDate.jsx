import React from 'react';
import { MenuItem, Select } from '@mui/material';

const DeleteDate = ({ dates, onDeleteItemChange }) => {
  const handleItemChange = (event) => {
    const value = event.target.value;
    onDeleteItemChange(value);
  };

  const renderMenuItems = () => {
    return dates.map(date => (
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

export default DeleteDate;
