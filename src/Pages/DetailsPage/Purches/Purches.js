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


const Purches = ({name,price,openBooking,handleBookingOpen,handleBookingClose}) => {
    
  const {user} = useAuth();



  


   
    return (
        // <div>
        // <h2>Details of : {service.name}</h2>
        // <h2>this is booking: {serviceId}</h2>
        // <Link style={{textDecoration:'none'}}><Button variant="contained" color="secondary">Pay now</Button></Link>
        // </div>
        <div>
            {/* <h2>To Purches and Confrim Order Click Here!</h2>
        <Button variant="contained" onClick={handleBookingOpen}>Purches</Button> */}
        <Modal
          open={openBooking}
          onClose={handleBookingClose}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 400,
            }}
        >
          <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                       Details of Purches
                    </Typography>
                    <form >
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
                            name="patientName"
                            //onBlur={handleOnBlur}
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                           // onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                           // onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                       
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
      </div>
    );
};

export default Purches;