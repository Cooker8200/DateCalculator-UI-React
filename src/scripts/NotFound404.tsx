import React, { ReactElement } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound404: React.FC = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4">
          You are heading to somewhere that does not exist
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={() => navigate('/')}>
          Return Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound404;
