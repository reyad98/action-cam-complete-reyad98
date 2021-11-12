import { Container, Grid } from '@mui/material';
import React from 'react';
import payment from '../../../image/payment.png'

const PaymentMethod = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h2>Payment Method Coming Soon</h2>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={payment} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default PaymentMethod;