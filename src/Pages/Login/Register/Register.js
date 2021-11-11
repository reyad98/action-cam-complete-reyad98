import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../image/loginpng.png';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
     
    const {registerUser,user,isLoading,authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        
        if(loginData.password!==loginData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email,loginData.password);
            e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1">Register</Typography>
                    {  !isLoading && <form  onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-type Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <NavLink to="/login">
                            <Button variant="text">Already Register?Please login</Button>
                        </NavLink>
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully !!!</Alert>} 
                     {authError && <Alert severity="error">{authError}</Alert> }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;