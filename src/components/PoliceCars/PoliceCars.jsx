import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const PoliceCars = ({category}) => {
    const {_id,toyPhoto, toyName,toyRating, toyPrice} = category;
const {user} = useContext(AuthContext);

    const handleShow = () => {
      if (!user) {
          Swal.fire({
              title: 'Please Log in!',
              text: 'Need to  log access this Details',
              icon: 'success',
              confirmButtonTxt: 'Okay'
          })
      }
  }
    return (
        <div className="card mt-4 w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={toyPhoto} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name : {toyName}</h2>
          <p>Toy Price: {toyPrice}</p>
          <p>Toy Rating : {toyRating}</p>
                    <p> Available Toy  : {toyRating}</p>

          <div className="card-actions">
          <Link to={`/alltoys/${_id}`}> <button onClick={handleShow} className='btn  btn-secondary'>View Details</button></Link>      
              </div>
        </div>
      </div>
    );
};

export default PoliceCars;