import React, {  useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyTable from '../MyToytable/MyToyTable';
import Swal from 'sweetalert2';
import dynamicTitle from '../../hooks/DynamicTitle';




const MyToys = () => {

      dynamicTitle('MyToy')

    const {user}= useContext(AuthContext)
    const [myToys ,setToys] = useState([]);



//min
const [sort, setSort] =useState('')




    useEffect(()=>{
        fetch(`https://assignment11-server-site-blond.vercel.app/myToys/${user?.email}?sort=${sort}`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    },[user, sort])

   

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
          
      fetch(`https://assignment11-server-site-blond.vercel.app/myToys/${_id}`,
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
            <h2 className="text-center will-change-auto hover:will-change-scroll text-4xl italic font-bold  text-orange-400">Toys You Have Added!</h2>
            <hr  className="long-line italic" ></hr>
            <hr  className="short-line" ></hr>


            
            <div className="flex justify-center my-4 gap-4">
            <button onClick={()=> setSort('ascending')} className="btn btn-outline hover:btn-secondary"> Sort By Asecnding Price</button>
          <button  onClick={()=> setSort('descending')} className="btn btn-outline hover:btn-secondary">Sort By Descending Price</button>
            </div>
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