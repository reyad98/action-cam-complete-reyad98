import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Expurches = () => {
    const { serviceId } = useParams();
    const [service,setService]= useState({})
    console.log(serviceId);
    useEffect(()=>{
        fetch(`http://localhost:5000/allservices/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
        <h2>Details of : {service.name}</h2>
        <h2>this is booking: {serviceId}</h2>
        <Link style={{textDecoration:'none'}}><Button variant="contained" color="secondary">Pay now</Button></Link>

    </div>
    );
};

export default Expurches;