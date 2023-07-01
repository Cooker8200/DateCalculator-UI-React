import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        spacing={6}
      >
        <Grid item xs={12}>
          <Typography variant="h3">Welcome to Family Fun</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate("/date-calculator")}>
            Date Calculator
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate("/mason")}>Mason's Page</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
