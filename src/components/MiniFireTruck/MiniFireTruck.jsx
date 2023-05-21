import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const MiniFireTruck = ({category}) => {
    const {_id,toyPhoto, toyName,toyRating, toyPrice} = category;

    const { user } = useContext(AuthContext);
    const handleShow = () => {
        if (!user) {
            Swal.fire({
                title: 'Please Log in!',
                text: 'When you log in then access this route',
                icon: 'success',
                confirmButtonTxt: 'Okay'
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={toyPhoto} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>{toyPrice}</p>
          <p>{toyRating}</p>
          <div className="card-actions justify-end">
          <Link to={`/alltoys/${_id}`}> <button onClick={handleShow}  className='btn btn-xs btn-secondary'>View Details</button></Link>      
              </div>
        </div>
      </div>
    );
};

export default MiniFireTruck;