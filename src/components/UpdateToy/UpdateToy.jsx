import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {




    const id = useLoaderData();
    const { _id, toyPrice, toyQuantity, toyDetails } = id;

    // console.log(id)

    const handleUpdatedToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyPrice = parseFloat(form.toyPrice.value)
        const toyQuantity = form.toyQuantity.value;
        const toyDetails = form.toyDetails.value;


        const updatedToy = { toyPrice, toyQuantity, toyDetails }
        console.log(updatedToy)


        fetch(`http://localhost:5000/updatedtoysData/${_id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedToy)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    form.reset()

                    Swal.fire({
                        title: 'success!',
                        text: ' Toy Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })

    }




    return (
        <div>

            <div>
                <div className="card-body mt-8 rounded-lg bg-[#F3F3F3]">
                    <form onSubmit={handleUpdatedToy}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6  ">







                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Price</span>
                                </label>
                                <input type="number" name='toyPrice' placeholder="$ Price" defaultValue={toyPrice} required className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" name='toyQuantity' defaultValue={toyQuantity} placeholder="Available quantity" required className="input input-bordered" />

                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Descriptions</span>
                                </label>
                                <textarea className="p-4 input input-bordered" name="toyDetails" type="text" placeholder="Toy's Details" defaultValue={toyDetails} id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811]">Add Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;