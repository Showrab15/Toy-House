import React from 'react';
import testimonial from '../../assets/testimonial.jpg'
import quote from '../../assets/quote.png'
const Testimonial = () => {
    return (
        <div className="mt-8">
            <div className="card  p-4 md:flex block h-full card-side bg-red-100 shadow-xl">
<div className="w-full md:w-1/2 rounded-xl  border-dashed border-2 border-indigo-600 ">
  <div >
      <figure><img className="rounded-xl p-4" src={testimonial} alt="Movie"/></figure>

</div>
</div>

  <div className="card-body  my-auto w-full md:w-1/2">
  <h2 className="font-bold text-4xl text-center">Client's Loves</h2>

    <img className="w-[50px] h-50px]" src={quote} alt="" />
  <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">

<h2 className="font-semibold text-3xl italic ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quia provident laborum nulla obcaecati ducimus. Dicta possimus commodi tempore id?</h2>
  </div> 
  <div id="item2" className="carousel-item w-full">
  <h2 className="font-semibold text-3xl italic ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quia provident laborum nulla obcaecati ducimus. Dicta possimus commodi tempore id?</h2>  </div> 
  <div id="item3" className="carousel-item w-full">
  <h2 className="font-semibold text-3xl italic ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quia provident laborum nulla obcaecati ducimus. Dicta possimus commodi tempore id?</h2>  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
  </div>
</div>
        </div>
    );
};

export default Testimonial;