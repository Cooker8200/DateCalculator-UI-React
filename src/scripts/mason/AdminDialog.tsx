import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  Grid,
  Radio,
  Typography,
} from "@mui/material";
import AddGame from "./AddGame";
import RemoveGame from "./RemoveGame";
import IGame from "../../interfaces/IGame";

const AdminDialog: React.FC<IAdminDialog> = ({
  games,
  showDialog,
  onDialogClose,
  onSave,
}) => {
  const [gameAction, setGameAction] = useState<string>("");
  const [newGameData, setNewGameData] = useState<string>("");
  const [newGameName, setNewGameName] = useState<string>("");
  const [gameToRemove, setGameToRemove] = useState<string>("");

  const handleRadioChange = (functionType: string): void =>
    setGameAction(functionType);

  const onGameDataChange = (data: string): void => setNewGameData(data);

  const onGameNameChange = (name: string): void => setNewGameName(name);

  const onSelectedGame = (name: string): void => setGameToRemove(name);

  const handleSaveClick = (): void => {
    switch (true) {
      case gameAction === "addGame":
        onSave('addGame', newGameName, newGameData)
        break;
      case gameAction === "removeGame":
        onSave('removeGame', gameToRemove);
        break;
    }
  };

  const isSaveDisabled = (): boolean => {
    switch (true) {
      case gameAction === "addGame":
        return newGameData === "" || newGameName === "" ? true : false;
      case gameAction === "removeGame":
        return gameToRemove === "" ? true : false;
      default:
        return true;
    }
  };

  return (
    <Dialog open={showDialog} onClose={onDialogClose}>
      <DialogTitle>
        <Typography variant="h5">Manage Games</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography>What do you want to do?</Typography>
          </Grid>
          <Grid item xs={12}>
            <Radio
              checked={gameAction === "addGame"}
              onChange={(e) => handleRadioChange(e.target.value)}
              value="addGame"
              aria-label="Add Date"
            />
            <FormLabel>Add Game</FormLabel>
          </Grid>
          <Grid item xs={12}>
            <Radio
              checked={gameAction === "removeGame"}
              onChange={(e) => handleRadioChange(e.target.value)}
              value="removeGame"
            />
            <FormLabel>Remove Game</FormLabel>
          </Grid>
        </Grid>
        {gameAction === "addGame" && (
          <AddGame
            onGameDataChange={onGameDataChange}
            onGameNameChange={onGameNameChange}
          />
        )}
        {gameAction === "removeGame" && (
          <RemoveGame games={games} onSelectedGame={onSelectedGame} />
        )}
      </DialogContent>
      <DialogActions>
        <Grid container>
          <Grid item>
            <Button onClick={onDialogClose}>Cancel</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleSaveClick} disabled={isSaveDisabled()}>
              Save
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

interface IAdminDialog {
  games: IGame[];
  showDialog: boolean;
  onDialogClose: () => void;
  onSave: (action: string, name: string, data?: string) => void;
}

export default AdminDialog;
