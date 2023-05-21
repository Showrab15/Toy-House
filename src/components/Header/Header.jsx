import banner from '../../assets/banner.jpg'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {

    
  

  

     
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


    return (
        <div>
              <div  data-aos="zoom-in-up"
 className="relative mt-8 rounded-[10px]-[x] w-full h-full">
                <img src={banner} alt="" className=" object-cover w-full h-full rounded-xl " />
                <div className="absolute backdrop-brightness-50 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  flex justify-center items-center text-white">

                    <div>
                        
      <h1 className="text-3xl font-semibold">Welcome to our Toy Store!</h1>
    
    <h1 className="md:text-5xl md:mt-0 mt-4 text-base font-bold mb-4">FIND EVERYTHING FOR YOUR BABY</h1>
         
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Header;