import { Button, Grid, Typography } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IGame from "../../interfaces/IGame";
import { getAllGames } from "../data/AwsClient";
import AdminDialog from "./AdminDialog";

const Mason: React.FC = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState<IGame[]>([]);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  useEffect(() => {
    getAllGames()
      .then(resp => setGames(resp))
      .catch(err => console.error(err.message));
  }, []);

  const onDialogClose = (): void => setShowDialog(false);

  const onSave = (action: string, name: string, data?: string): void => {
    switch (action) {
      case 'addGame':
        console.log('adding game');
        break;
      case 'removeGame':
        console.log('removing game');
        break;
    }
  };

  const renderGames = ():ReactElement => {
    if (games.length === 0) return <></>;
    else {
      return (
        <Grid container justifyContent="center" direction="column" alignItems="center" spacing={4}>
          {games.map(game => (
            <Typography key={game.name}>{game.name}</Typography>
          ))}
        </Grid>
      );
    }
  };

  return (
    <>
      <Grid container justifyContent="center" direction="column" alignItems="center" spacing={4}> 
        <Grid item xs={12}>
          <Typography variant="h2">Mason's Page</Typography>
        </Grid>
        <Grid item xs={!2}>
          <Button onClick={() => setShowDialog(true)}>Manage Games</Button>
        </Grid>
        <Grid item>
          {renderGames()}
        </Grid>
      </Grid>
      {showDialog &&
        <AdminDialog
          games={games}
          showDialog={showDialog}
          onDialogClose={onDialogClose}
          onSave={onSave}
        />
      }
    </>
  );
};

export default Mason;
