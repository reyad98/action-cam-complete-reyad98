import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import HomeDetails from '../../Homepage/HomeDetails/HomeDetails';

const Showallproducts = () => {
    const  [allservices,setAllServices] = useState([])
    useEffect(()=>{
        fetch('https://damp-peak-19610.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, my: 5, color: 'success.main' }} variant="h6" component="div">
                    All Products!!! 
                </Typography>
                <Typography sx={{ fontWeight: 500, m: 2 }} variant="h4" component="div">
                    Camera we provide can be purches from here
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        allservices.map(service => <HomeDetails
                            key={service.name}
                            service={service}
                        ></HomeDetails>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Showallproducts;