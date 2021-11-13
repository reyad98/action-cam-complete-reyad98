import { Backdrop, Button, Fade, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


  const Purches = ({name,price,openBooking,setOrderSuccess,handleBookingOpen,handleBookingClose}) => {
      
  const {user} = useAuth();
  
  const initialInfo = {email:user.email, name:user.displayName}
  const [bookingInfo,setBookingInfo] = useState(initialInfo);

 const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        //console.log(newInfo);
        setBookingInfo(newInfo);
 }
  
 const handleBookingSubmit = e =>{
     const orderDetails ={
         ...bookingInfo,
         name,
         price,
     }
     //console.log(orderDetails);
      
     fetch('https://damp-peak-19610.herokuapp.com/orderdetails',{
         method: 'POST',
         headers:{
             'content-type' : 'application/json'
         },
         body:JSON.stringify(orderDetails)
     })
  .then(res=>res.json())
  .then(data =>{
      if(data.insertedId){
        setOrderSuccess(true);
        handleBookingClose();
      }
  })


     e.preventDefault();
 }

   
    return (
      
        <div>
            
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openBooking}
          onClose={handleBookingClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
              timeout: 500,
          }}
        >
          <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                       Details of Purches
                    </Typography>
                    <form onSubmit={handleBookingSubmit} >
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={name}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="price"
                            //onBlur={handleOnBlur}
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            defaultValue="Your Name"
                            size="small"
                        />
                       
                        <Button type="submit" variant="contained">Place</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
      </div>
    );
};

export default Purches;