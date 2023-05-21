import React, { useEffect, useState } from 'react';
import AllToysTable from '../AllToysTable/AllToysTable';

const AllToys = () => {

    const [toys ,setToys] = useState([])
const [search , setSearch] = useState('')
    useEffect(()=>{
        fetch('https://assignment11-server-site-blond.vercel.app/allToys')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setToys(data);
        })
    },[])

   
    const handleSearchBtn = () => {
      fetch(`https://assignment11-server-site-blond.vercel.app/searchByName/${search}`)
          .then(res => res.json())
          .then(data => {
              setToys(data);
              console.log(data);
          })
  }

    return (
        <div className="mt-8">
            <h2 className="text-center text-4xl font-bold  text-orange-400">All Toys {toys.length}</h2>
            <div className='text-center mt-8'>
                <input onChange={(e) => setSearch(e.target.value)} type="text" className='p-1 border' />{" "}
                <button className='btn btn-secondary' onClick={handleSearchBtn}>Search</button>
            </div>
            <div className="mt-8">
                
                    <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                      {/* head */}
                      <thead>
                        <tr>
                         
                          <th>#</th>
                          <th>Seller Name</th>
                          <th>Toy Name</th>
                          <th> Category</th>
                          <th> Price</th>
                          <th> Quantity</th>
                          <th> Details</th>
                        </tr>
                      </thead>
                      <tbody>
                      
                     {
                        toys.map((toyTableData, index)=> <AllToysTable
                        index={index}
                        key={toyTableData._id}
                            toyTableData ={toyTableData}
                        
                        ></AllToysTable> )
                     }
                       
                       
                      </tbody>
                     
                      
                    </table>
                  </div>
                
            </div>
        </div>
    );
};

export default AllToys;