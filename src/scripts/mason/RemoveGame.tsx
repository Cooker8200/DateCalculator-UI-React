import { Grid, Radio } from '@mui/material';
import React from 'react';
import IGame from '../../interfaces/IGame';

const RemoveGame: React.FC<IRemoveGame> = ({ games, onSelectedGame }) => (
  <Grid container direction='column'>
    {games.map(game => (
      <Grid container>
        <Grid item xs={2}>
          <Radio />
        </Grid>
        <Grid item xs={10}>
          {game.name}
        </Grid>
      </Grid>
    ))}
  </Grid>
);

interface IRemoveGame {
  games: IGame[];
  onSelectedGame: (gameName: string) => void;
}

export default RemoveGame;