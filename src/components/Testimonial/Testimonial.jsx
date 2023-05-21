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
  <h2 className="title">Client's Loves</h2>
<hr  className="long-line"/>
<hr  className="short-line"/>
    <img className="w-[50px] h-50px]" src={quote} alt="" />
  <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">

<h2 className="font-semibold text-3xl italic ">"I am extremely pleased with my experience on the toy car website! The variety of toy cars available is impressive, and the website's user-friendly interface made it easy for me to navigate and find the perfect car for my child. The ordering process was seamless, and the delivery was prompt. My child loves the toy car."</h2>
  </div> 
  <div id="item2" className="carousel-item w-full">
  <h2 className="font-semibold text-3xl italic ">"I recently purchased a toy car from this website, and I must say that I am thoroughly satisfied. The product quality exceeded my expectations, and the attention to detail in the design is fantastic. The website provided comprehensive product descriptions and clear images, allowing me to make an informed decision.I highly recommend this toy car website to any parent looking for high-quality toys."</h2>  </div> 
  <div id="item3" className="carousel-item w-full">
  <h2 className="font-semibold text-3xl italic ">I had a wonderful shopping experience on this toy car website. The website's layout is visually appealing and easy to navigate, making it a breeze to browse through the extensive toy car collection. The filters and search functionality helped me quickly find the specific car I was looking for. The checkout process was simple and secure, and I appreciated the various payment options available. </h2>  </div> 
 
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