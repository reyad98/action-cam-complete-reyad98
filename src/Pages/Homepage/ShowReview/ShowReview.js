import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import FinalReview from '../Reviews/FinalReview/FinalReview';

const ShowReview = () => {
    const  [services,setServices] = useState([])
     useEffect(()=>{
         fetch('http://localhost:5000/allservices')
         .then(res => res.json())
         .then(data => setServices(data))
     },[])

    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Container>
                
                <Typography sx={{ fontWeight: 500, m: 2 }} variant="h4" component="div">
                    Customers Reviews
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <FinalReview
                            key={service.name}
                            service={service}
                        ></FinalReview>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ShowReview;
   