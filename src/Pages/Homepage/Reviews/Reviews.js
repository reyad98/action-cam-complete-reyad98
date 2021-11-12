import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Reviews = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/allservices',data)
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

            <textarea style={{width:'600px',height:'200px'}} {...register("description")} placeholder="review" />

            <input className="btn" type="submit" />
        </form>
     </div>
    );
};

export default Reviews;