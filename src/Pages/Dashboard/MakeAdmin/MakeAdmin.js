import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
   
    const [email, setEmail] = useState('');
    const [success,setSuccess]= useState(false)
    const handleOnBlur= e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user={email};
        fetch('https://damp-peak-19610.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data);
                setEmail('')
                setSuccess(true);
               
            }
            
        })
        e.preventDefault()
    }

    return (
        <div>
            <h2>Make a Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                style={{width:'300px'}}
                label="email" 
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
         
                <Button type="submit"  variant="contained" color="success">
                    Make Admin
                </Button>
            </form>
            {success && <Alert severity="success">Admin Made successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;