import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, Grid, Radio, Typography } from '@mui/material';
import DeleteDate from './DeleteDate';
import AddDate from './AddDate';
import { months } from '../../constants/Months';
import { IDate } from '../../interfaces/IDate';

const AdminDialog: React.FC<IAdminDialogProps> = ({
  dates,
  showDialog,
  onDialogClose,
  onSave,
}) => {
  const [dateFunction, setDateFunction] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [dateToDelete, setDateToDelete] = useState<string>('');

  useEffect(() => {
    onDateChange(new Date());
  }, [])

  const handleRadioChange = (functionType: string) => setDateFunction(functionType);

  const onDateChange = (date: Date) => {
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
    setDate(formattedDate);
  };

  const onNameChange = (name: string) => setName(name);

  const onTypeChange = (type: string) => setType(type);

  const onDeleteItemChange = (name: string) => {
    setDateToDelete(name)
  };

  const isSaveDisabled = (): boolean => {
    if (dateFunction === 'addDate') {
      return name === '' || type === '';
    } else {
      return dateToDelete === '';
    }
  };

  return (
    <>
      <Dialog
        open={showDialog}
        onClose={onDialogClose}
      >
        <DialogTitle>
          Date Admin
        </DialogTitle>
        <DialogContent>
          <Grid container direction='column'>
            <Grid item xs={12}>
              <Typography>
                What do you want to do?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Radio
                checked={dateFunction === 'addDate'}
                onChange={e => handleRadioChange(e.target.value)}
                value='addDate'
                aria-label='Add Date'
                />
                <FormLabel>Add Date</FormLabel>
            </Grid>
            <Grid item xs={12}>
              <Radio
                checked={dateFunction === 'removeDate'}
                onChange={e => handleRadioChange(e.target.value)}
                value='removeDate'
                />
                <FormLabel>Remove Date</FormLabel>
            </Grid>
          </Grid>
          {dateFunction === 'addDate' &&
            <AddDate
              onDateChange={onDateChange}
              onTypeChange={onTypeChange}
              onNameChange={onNameChange}
            />
          }
          {dateFunction === 'removeDate' &&
            <DeleteDate
              dates={dates}
              onDeleteItemChange={onDeleteItemChange}
            />
          }
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item>
              <Button onClick={onDialogClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => onSave(dateFunction, date, name, type, dateToDelete)}
                disabled={isSaveDisabled()}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  )
};

interface IAdminDialogProps {
  dates: IDate[];
  showDialog: boolean;
  onDialogClose: () => void;
  onSave: (dateFunction: string, date: string, name: string, type: string, dateToDelete: string) => void;
}

export default AdminDialog;
