import React, {  useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyTable from '../MyToytable/MyToyTable';
import Swal from 'sweetalert2';

const MyToys = () => {

    const {user}= useContext(AuthContext)
    const [myToys ,setToys] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[user])

   

    const handleDelete = _id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
          
      fetch(`http://localhost:5000/addedToys/${_id}`,
      {
        method : "DELETE",
      
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
        
      
               Swal.fire(
                 'Deleted!',
                 'Your Toys has been deleted.',
                 'success'
               )
                 const remaining = myToys.filter(toy=> toy._id !== _id);
                 setToys(remaining)
             
        }
      })
      
            }
          })
        }

        
    return (
        <div>
               <div className="mt-8">
            <h2 className="text-center text-4xl font-bold  text-orange-400">My Toys {myToys.length}</h2>

            
            <div className="overflow-x-auto mt-8  w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Toy Photo</th>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Seller email</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>Update</th>
        <th>Delete</th>

      </tr>
    </thead>
    <tbody>
   
    {
        myToys.map((myToyTable, idx) => <MyToyTable
        myToyTable= {myToyTable}
        idx={idx}
        key={idx}
        handleDelete={handleDelete}
        ></MyToyTable> )
    }
    </tbody>
   
    
  </table>
</div>
        </div>
        </div>
    );
};

export default MyToys;