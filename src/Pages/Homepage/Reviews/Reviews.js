import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Reviews = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://damp-peak-19610.herokuapp.com/allservices',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Added Rewiew Successfully');
                reset();
            }
        })
    }

    return (
  <div className="add-service">
        <h2 className="head-part">Add a Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <textarea style={{width:'600px',height:'200px'}} {...register("description")} placeholder="please add review about your exprience in with us" />

            <Button type="submit" variant="contained" color="secondary">Add Review</Button>

        </form>
     </div>
    );
};

export default Reviews;