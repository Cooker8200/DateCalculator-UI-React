import { TextField } from '@mui/material';
import React from 'react';

const AddGame: React.FC<IAddGame> = ({ onGameDataChange, onGameNameChange}) => {
  return (
    <>
      <TextField label='Game Name' helperText='This name must be unique' onChange={(e) => onGameNameChange(e.target.value)}/>
      <TextField label='Game Data' helperText='This is the iframe data' onChange={(e) => onGameDataChange(e.target.value)}/>
    </>
  );
};

interface IAddGame {
  onGameNameChange: (name: string) => void;
  onGameDataChange: (data: string) => void;
}

export default AddGame;
