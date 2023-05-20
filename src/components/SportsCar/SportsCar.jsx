import React from 'react';
import { Link } from 'react-router-dom';

const SportsCar = ({category}) => {

    const {_id,toyPhoto, toyName,toyRating, toyPrice} = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={toyPhoto} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>{toyPrice}</p>
          <p>{toyRating}</p>
          <div className="card-actions justify-end">
          <Link to={`/alltoys/${_id}`}> <button className='btn btn-xs btn-secondary'>View Details</button></Link>      
              </div>
        </div>
      </div>
    );
};

export default SportsCar;


  