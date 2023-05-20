import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const toyData = useLoaderData();
    console.log(toyData);
    const {sellerEmail, toyPhoto, sellerName,toyDetails,toyName,toyPrice,toyQuantity,toyRating}= toyData;
    return (
//         <div className='mt-8'>
//             <h2 className="text-4xl font-bold text-center">Know about {sellerName}'s Toy </h2>
//            <div className="card w-full mt-8 bg-red-400">
//   <figure><img className="m-8 rounded-lg" src={toyPhoto} alt="car!"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">Toy Name : {toyName}</h2>
//     <h2 className="card-title">Seller Name : {sellerName}</h2>
//     <h2 className="card-title">Seller Email :{sellerEmail}</h2>
//     <p>Toy Price : {toyPrice}</p>
//     <p> Quantity :{toyQuantity}</p>
//     <p> Rating :{toyRating}</p>
//     <p> Description :{toyDetails}</p>
  
//   </div>
// </div>
//         </div>

<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="animate-pulse" src={toyPhoto} alt="Album"/></figure>
  <div className="card-body">

    <h2 className="card-title">Toy Name : {toyName}</h2>
    <h2 className="card-title mt-4">Seller Name : {sellerName}</h2>
        <p className="mt-2 font-semibold ">Seller Email : {sellerEmail}</p>

    <p className="mt-2 font-semibold ">Toy Price : {toyPrice}</p>
    <p className="mt-2 font-semibold ">Available Quantity : {toyQuantity}</p>
    <p className="mt-2 font-semibold ">Ratings : {toyRating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default ToyDetails;