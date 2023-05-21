import React from 'react';
import { useLoaderData } from 'react-router-dom';
import dynamicTitle from '../../hooks/DynamicTitle';

const ToyDetails = () => {
  dynamicTitle('ToyDetails')

  const toyData = useLoaderData();
  // console.log(toyData);
  const { sellerEmail, toyCategory, toyPhoto, sellerName, toyDetails, toyName, toyPrice, toyQuantity, toyRating } = toyData;
  return (
    <div className="mt-4">
      <h2 className="title">Let Know More About {toyName} </h2>
      <hr className="long-line" />
      <hr className="short-line" />
      <div className="card  mt-8 lg:card-side bg-base-100 shadow-xl">
        <figure><img className="animate-pulse" src={toyPhoto} alt="Album" /></figure>
        <div className="card-body">

          <h2 className="card-title">Toy Name : {toyName}</h2>
          <h2 className="card-title mt-4">Seller Name : {sellerName}</h2>
          <p className="mt-2 font-semibold ">Seller Email : {sellerEmail}</p>

          <p className="mt-2 font-semibold ">Toy Price : {toyPrice}</p>
          <p className="mt-2 font-semibold ">Available Quantity : {toyQuantity}</p>
          <p className="mt-2 font-semibold ">Toy Category : {toyCategory}</p>
          <p className="mt-2 font-semibold ">Ratings : {toyRating}</p>
          <p className="mt-2 font-semibold ">Description : {toyDetails}</p>

        </div>
      </div>
    </div>


  );
};

export default ToyDetails;