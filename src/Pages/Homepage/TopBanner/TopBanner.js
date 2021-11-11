import React from 'react';
import banner from '../../../image/bannergopro.jpg'
import banner1 from '../../../image/banner2.jpg'
import cover from '../../../image/cover.jpeg'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Fab, Typography } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';


const bannerBg = {
    background: `url(${banner1})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',

}


const TopBanner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:'flex-start',
             textAlign:'left',alignItems:'center'
            }}>
                   <Box>
                   <Typography variant="h4" sx={{mb:5,ml:5}} style={{ color: 'white' }}>
                        Capture Your Ultimate Moment
                    </Typography >
                    <Typography variant="h6" sx={{ml:5}}  style={{ color: 'white'}}>
                        Action camera can be able to capture any environment you want...

                    </Typography>
                   <Typography sx={{my:5,ml:5}}>
                   <Link to="detailspage" style={{textDecoration:'none'}}>
                   <Fab variant="extended">
                         <NavigationIcon sx={{ mr: 1 }} />
                          Explore More
                   </Fab>
                   </Link>
                   </Typography>
                   </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '450px' }}
                        src={banner} alt="" />
                </Grid>

            </Grid>
        </Box>
    );
};

export default TopBanner;