import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import DeleteDate from './DeleteDate';
import AddDate from './AddDate';
import { months } from '../constants/Months';
import { IDate } from '../interfaces/IDate';
import { Clear } from '@mui/icons-material';

const AdminDialog: React.FC<IAdminDialogProps> = ({
  dates,
  showDialog,
  onDialogClose,
  onSave,
}) => {
  const [dateFunction, setDateFunction] = useState<string>('addDate');
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
        fullWidth
        classes={{ paper: 'admin-dialog__paper' }}
        data-testid='admin-dialog__dialog'
      >
        <DialogTitle>
          <Grid container alignItems='center'>
            <Grid item xs={1}>
              <IconButton data-testid='admin-dialog__button__close' onClick={() => onDialogClose()}>
                <Clear />
              </IconButton>
            </Grid>
            <Grid item xs={11}>
              <Typography variant='h5' data-testid='admin-dialog__dialog__title'>
                Manage Dates
              </Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <FormControl>
            <RadioGroup row>
              <FormControlLabel
                value='addDate'
                label='Add Date'
                control={
                  <Radio
                    checked={dateFunction === 'addDate'}
                    onChange={e => handleRadioChange(e.target.value)}
                    value='addDate'
                    data-testid='admin-dialog__radio__add-date'
                  />
                }
              />
              <FormControlLabel
                value='removeDate'
                label='Remove Date'
                control={
                  <Radio
                    checked={dateFunction === 'removeDate'}
                    onChange={e => handleRadioChange(e.target.value)}
                    value='removeDate'
                    data-testid='admin-dialog__radio__remove-date'
                  />
                }
              />
            </RadioGroup>
          </FormControl>
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
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button data-testid='admin-dialog__button__cancel' onClick={onDialogClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => onSave(dateFunction, date, name, type, dateToDelete)}
                disabled={isSaveDisabled()}
                data-testid='admin-dialog__button__save'
              >
                {dateFunction === 'addDate' ?
                'Add Date'
                :
                'Remove Date'
                }
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
