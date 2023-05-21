import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import dynamicTitle from '../../hooks/DynamicTitle';

const MyToyTable = ({ myToyTable, handleDelete, idx }) => {
    const { _id, sellerEmail, sellerName, toyDetails, toyName, toyPhoto, toyPrice, toyQuantity, toyRating } = myToyTable;
   
    dynamicTitle('My-Toy-Table')

  

    return (
        <tr>

            <td>{idx + 1}</td>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={toyPhoto} alt="Avatar Tailwind CSS Component" />
                    </div>

                </div>
            </td>
            <td>{toyName}</td>
            <td>
                {sellerName}

            </td>
            <td>{sellerEmail}</td>
            <td>{toyPrice}</td>
            <td>{toyRating}</td>
            <td>{toyQuantity}</td>
            <th>
            <Link to={`/updatedToys/${_id}`}> <button className="btn btn-ghost btn-xs">Update</button></Link>
           
            </th>


           
            <th>
                <button onClick={()=> handleDelete(_id)} className="btn btn-error btn-xs">Delete  </button>
            </th>
        </tr>
    );
};

export default MyToyTable;

