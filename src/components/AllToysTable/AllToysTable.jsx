import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({toyTableData, index}) => {
    

    //destructure data of all toys
    const {_id, sellerName, toyCategory, toyName, toyPrice, toyQuantity} = toyTableData || {};
    return (

      
        <tr className="hover">
      
        <td>
            {index + 1}
        </td>
      
       
        <td className="w-[30px] lg:w-auto">{sellerName}</td>
        <td>{toyName}</td>
        <td>{toyCategory}</td>
        <td>{toyPrice}</td>
        <td>{toyQuantity}</td>
        <th>
            <Link   to={`/alltoys/${_id}`}><button  className="btn btn-outline btn-xs">details</button>
</Link>
        </th>
        </tr>
    );
};

export default AllToysTable;