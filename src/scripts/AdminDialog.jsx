import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

const AdminDialog = ({ showDialog, handleCloseDialog}) => {
  return (
    <>
      <Dialog
        open={showDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>
          Here is my title
        </DialogTitle>
        <DialogContent>
          Here is my content
        </DialogContent>
      </Dialog>
    </>
  )
};

export default AdminDialog;
