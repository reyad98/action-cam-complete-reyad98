import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const DetailsPage = (props) => {
    const { _id, name, description, img ,price} = props.service;
    return (
        <Grid item xs={3} sm={3} md={3} >
            <Card sx={{ minWidth: 275, boxShadow: 2 }}>

                <CardMedia
                    component="img"
                    style={{ width: '100%', margin: 'auto' }}
                    image={img}
                    alt="green iguana"
                />

                <CardContent>

                    <Typography variant="h5" component="div">
                        {name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography sx={{my:2}} variant="h4">
                        {price}$ Only
                    </Typography>
                   <Link to={`/exconfrimpurches/${_id}`} style={{textDecoration:'none'}}>
                   <Button variant="contained">Purches!</Button>
                   </Link>
                </CardContent>

            </Card>

        </Grid>
    );
};

export default DetailsPage;