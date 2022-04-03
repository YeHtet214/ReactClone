import React from 'react';
import { Grid } from '@mui/material';
import { TailSpin } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <Grid container alignItems='center' justifyContent='center' >
      <Grid item xs={2} >
        <TailSpin color='#00BFFF' height={600} width={200} />
      </Grid>
    </Grid>
  )
}
