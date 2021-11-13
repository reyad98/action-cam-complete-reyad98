import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Container, Grid } from '@mui/material';
import capture from '../../../image/capture.png'
import { Box } from '@mui/system';
export default function Mypart() {
    return (

        <Container sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <h1>Our Ultimates Capture</h1>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={7}>
                   
                        <ImageList variant="masonry" cols={3} gap={6}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={item.img}
                                        //srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    
                </Grid>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '100%' }} src={capture} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
}

const itemData = [
    {
        img: 'https://media.istockphoto.com/photos/awesome-man-jumping-into-water-from-rocks-wild-picture-id1091048034?b=1&k=20&m=1091048034&s=170667a&w=0&h=e5Ob6El_hCkssB2ebK1ibBQx4QgJxLKLhszso6pHwQw=',
        title: 'Cycling',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://media.istockphoto.com/photos/skier-snowboarder-taking-a-selfie-at-the-mountain-picture-id849896688?b=1&k=20&m=849896688&s=170667a&w=0&h=0w26JW56wbQ-tPWteOzHKqDveoEDhiI8YVt3JcbtHyc=',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://media.istockphoto.com/photos/skydive-tandem-selfie-photo-effect-picture-id1064278966?b=1&k=20&m=1064278966&s=170667a&w=0&h=4vrDdcy5EEgLAd5-MFQZ4LVaAgKDO5ewP7kAV8njib0=',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://media.istockphoto.com/photos/skydivers-fall-through-clear-skies-aerial-flight-picture-id1241938536?b=1&k=20&m=1241938536&s=170667a&w=0&h=ySDUWKFsdILgL4FBy1cYBfznTgaaWvQBs-Z6tP0t18g=',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://media.istockphoto.com/photos/bicycle-riding-commuter-with-road-racing-bike-in-london-picture-id908001784?b=1&k=20&m=908001784&s=170667a&w=0&h=aXj1GpUtlY1VYdDlbOLuDJFD9kKoE8OsLbkuWT8PK0I=',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://media.istockphoto.com/photos/kids-playing-in-sea-waves-and-filming-themselves-using-waterproof-picture-id1165331098?b=1&k=20&m=1165331098&s=170667a&w=0&h=js_jByIkXTLwoUTlZUaVv_3rMTrRpLOuIjGqW2pCPxQ=',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://media.istockphoto.com/photos/a-man-swimming-in-merced-river-of-yosemite-picture-id1297245260?b=1&k=20&m=1297245260&s=170667a&w=0&h=SMOn0BRlvxdtQR2VlX2_WByWp4jbtWlaX5xjxixPhnY=',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://media.istockphoto.com/photos/manatee-picture-id1297296408?b=1&k=20&m=1297296408&s=170667a&w=0&h=WFzfkEqGODZ5D4l-tCfEKuphT2mRBpQDmSK9XsU1Rr4=',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://media.istockphoto.com/photos/surfer-duck-diving-picture-id155450922?b=1&k=20&m=155450922&s=170667a&w=0&h=IMeOYJSRPUkoaqwwkVXlymC2hvNptaTRRE_EqhmZxJc=',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
   
];