import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const FinalReview = (props) => {
    const { _id, name, description, img ,price} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, boxShadow: 2 }}>


                <CardContent>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    
                </CardContent>

            </Card>

        </Grid>
    );
};

export default FinalReview;