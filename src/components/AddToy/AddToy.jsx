import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    
    const {user} = useContext(AuthContext);
    // const [posted, setPosted] = useState([])
    
    const handleAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const sellerName = form.sellerName.value;
        const toyCategory = form.toyCategory.value;
        const sellerEmail = user?.email;
        const toyName = form.toyName.value;
        const toyPhoto = form.toyPhoto.value;
        const toyPrice = parseFloat(form.toyPrice.value)
        const toyQuantity = form.toyQuantity.value;
        const toyRating = form.toyRating.value;
        const toyDetails = form.toyDetails.value;
        const addedToys = {
            sellerName:sellerName,
            toyCategory: toyCategory,
            sellerEmail:sellerEmail,
            toyName:toyName,
            toyPhoto:toyPhoto,
            toyPrice:toyPrice,
            toyQuantity:toyQuantity,
            toyRating:toyRating,
            toyDetails:toyDetails
        }
        console.log(addedToys)
        fetch('http://localhost:5000/addedToys',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToys)

            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                title: 'Success!',
                text: 'Toy Added Successful In The Toy House ',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset()
              }
        }
        )

    }
    // console.log(posted)

    return (
        <div>
            <div className="card-body mt-8 rounded-lg bg-[#F3F3F3]">
                <form onSubmit={handleAddToy}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6  ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' disabled  defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name='sellerEmail' disabled defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toyName' required placeholder="Toy Name" className="input input-bordered"/>
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-semibold">Toy Photo URL</span>
                            </label>
                            <input name="toyPhoto" type="text" placeholder="Toy Photo URL" className="input input-bordered" />
                        </div>
                        
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <select className="text-input  input input-bordered" name="toyCategory"  >
                                <option value="Sports Car">Sports Car</option>
                                <option value="Police Cars">Police Cars</option>
                                <option value="Mini Fire Truck">Mini Fire Truck</option>
                            </select>
                        </div>
                     
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Price</span>
                            </label>
                            <input type="text" name='toyPrice' placeholder="$ Price" required className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='toyQuantity' placeholder="Available quantity" required className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name='toyRating' placeholder="Rating" required className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <textarea className="p-4 caret-pink-500 input input-bordered" name="toyDetails" type="text" placeholder="Toy's Details" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811]">Add Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;