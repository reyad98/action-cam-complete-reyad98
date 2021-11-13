import React from 'react';
import { Grid } from '@mui/material';
import AllOrder from '../AllOders/AllOrder';
import order from '../../../image/order.png'

const Myorders = () => {
  return (
    <Grid container spacing={2}>
     <Grid item xs={12} md={8}>
    <AllOrder></AllOrder>
    </Grid>
    <Grid item xs={12} md={4}>
     <img src={order} style={{width:'100%'}} alt="" />
    </Grid>
  </Grid>
);
};

export default Myorders;