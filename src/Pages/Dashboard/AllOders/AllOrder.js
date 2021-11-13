import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useParams } from 'react-router';


const AllOrder = () => {
    const {user} = useAuth();
    const [orders,setOrders] = useState([]);
    //for delet 
    const [services,setServices] =useState([]);
    const {serviceId} = useParams();

    useEffect(()=>{
        const url =`https://damp-peak-19610.herokuapp.com/orderdetails?email=${user.email}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setOrders(data))
    },[])

    const handleDelete = id =>{
         const url =`https://damp-peak-19610.herokuapp.com/orderdetails/${id}`
         fetch(url,{
           method:'DELETE'
         })
         .then(res=>res.json())
         .then(data =>{
          window.location.reload();
            console.log(data);
         })
    }

    return (
        <div>
            <h2>Total Orders:{orders.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Your orders">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="center">Price $</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                 <Button 
                 onClick={()=> handleDelete(row._id)}
                 variant="contained">Detete</Button>
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default AllOrder;