import { Grid } from '@mui/material';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const HomeDetails = (props) => {
    const { _id, name, description, img ,price} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
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
                    <Typography sx={{my:2}} variant="h5">
                        {price}$ Only
                    </Typography>
                   <Link to={`/confrimpurches/${_id}`} style={{textDecoration:'none'}}>
                   <Button variant="contained">Purches!</Button>
                   </Link>
                </CardContent>

            </Card>

        </Grid>
    );
};

export default HomeDetails;