import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import HomeDetails from '../HomeDetails/HomeDetails';


// const services = [
//     {
//         name: 'Fluride Treatment',
//         price: 359,
//         description: 'Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral',
//         img: 'https://media.istockphoto.com/photos/mountain-biking-family-riding-on-forest-trail-picture-id1281756222?b=1&k=20&m=1281756222&s=170667a&w=0&h=7WDs6rOBb4OU0E7GcZyGVRT0Ti9G3caOab9UJRZc0TM='
//     },
//     {
//         name: 'Fluride Treatment',
//         price: 359,
//         description: 'Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral',
//         img: 'https://media.istockphoto.com/photos/skydivers-fall-through-clear-skies-aerial-flight-picture-id1241938536?b=1&k=20&m=1241938536&s=170667a&w=0&h=ySDUWKFsdILgL4FBy1cYBfznTgaaWvQBs-Z6tP0t18g='
//     },
//     {
//         name: 'Fluride Treatment',
//         price: 359,
//         description: 'Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral',
//         img: 'https://media.istockphoto.com/photos/action-camera-on-wood-surface-picture-id1213771607?b=1&k=20&m=1213771607&s=170667a&w=0&h=d4j0pp3IL0rnZhjcjWBrASMsp_mfpgiWebcK-dfQtl8='
//     },

//     {
//         name: 'Fluride Treatment',
//         price: 359,
//         description: 'Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral',
//         img: 'https://media.istockphoto.com/photos/skydivers-fall-through-clear-skies-aerial-flight-picture-id1241938536?b=1&k=20&m=1241938536&s=170667a&w=0&h=ySDUWKFsdILgL4FBy1cYBfznTgaaWvQBs-Z6tP0t18g='
//     },
// ]

const ShowProduct = () => {

    const  [services,setServices] = useState([])
     useEffect(()=>{
         fetch('https://damp-peak-19610.herokuapp.com/services')
         .then(res => res.json())
         .then(data => setServices(data.slice(0,6)))
     },[])

    return (
        <Box sx={{ flexGrow: 1, my: 15 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, my: 5, color: '#9B0077' }} variant="h4" component="div">
                    OUR COLLECTION
                </Typography>
                <Typography sx={{ fontWeight: 500, m: 2 }} variant="h5" component="div">
                    Choise Your One From Here
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <HomeDetails
                            key={service.name}
                            service={service}
                        ></HomeDetails>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ShowProduct;