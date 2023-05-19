import React from 'react';
import banner from '../../assets/banner.jpg'
const Header = () => {
    return (
        <div>
              <div className="relative mt-8 rounded-xl w-full h-full">
                <img src={banner} alt="" className=" object-cover w-full h-full rounded-xl " />
                <div className="absolute backdrop-brightness-50 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  flex justify-center items-center text-white">

                    <div>
                          <p className=" text-orange-100 text-base md:text-2xl">Welcome To Toy House!</p>
                        <h1 className="md:text-5xl md:mt-0 mt-4 text-base font-bold mb-4">FIND EVERYTHING FOR YOUR BABY</h1>
                      
                   
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Header;