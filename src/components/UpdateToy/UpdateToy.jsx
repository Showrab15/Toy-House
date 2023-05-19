import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {




    const loadedToy = useLoaderData();
    const {_id, toyPrice, toyQuantity, toyDetails} = loadedToy;
   
// console.log(loadedCoffee)

const handleUpdateCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const toyPrice = form.toyPrice.value;
    const toyQuantity = form.toyQuantity.value;
    const toyDetails = form.toyDetails.value;
   

    const updatedToy ={toyPrice,toyQuantity,toyDetails}
    console.log(updatedToy)
    

      fetch(`http://localhost:5000/updateToys/${_id}`,
        {
            method : 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                form.reset()

                Swal.fire({
  title: 'success!',
  text: ' Coffee Updated successfully',
  icon: 'success',
  confirmButtonText: 'Done'
})
            }
        })

}




    return (
        <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form >
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6  ">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <input type="number" name='toyPrice' placeholder="$ Price" required className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name='toyQuantity' placeholder="Available quantity" required className="input input-bordered" />

                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>

                            <textarea className="textarea textarea-secondary  textarea-bordered textarea-lg w-full max-w-xx" name="toyDetails" placeholder="details"></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811]">Update Toy</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default UpdateToy;