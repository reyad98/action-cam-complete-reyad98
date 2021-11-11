import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddAllServices = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/allservices',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Added Service Successfully');
                reset();
            }
        })
    }

    return (
  <div className="add-service">
        <h2 className="head-part">Please add a service to all details page</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="name"/>
            <textarea {...register("description")} placeholder="description" />
            <input type="number" {...register("price",)} placeholder="price" />
            <input {...register("img")} placeholder="image url" />

            <input className="btn" type="submit" />
        </form>
     </div>
    );
};

export default AddAllServices;