import React from 'react';

const UserWork = () => {
    return (
        <div className="mt-4">
            <h2 className="title">Our User Work</h2>
        <hr  className=" long-line"/>
                <hr  className=" short-line"/>

                <div className=' mt-8 lg:mx-20 mx-4 bg-gray-400 rounded-lg p-5 py-10'>
            <h2 className='text-center text-4xl font-bold text-teal-300 mb-10'>How It's Works?</h2>
            <div className='grid grid-cols-3 gap-5 text-center'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-40 w-20 mx-auto bg-orange-400 rounded-full p-4 mb-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>


                    <h2 className='text-teal-300  font-bold lg:text-xl'>Create Account</h2>
                    <p className=' text-white mt-3'>It's very easy to open an account <br /> and start your journey</p>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-40 w-20 mx-auto bg-orange-400 rounded-full p-4 mb-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>

                    <h2 className='text-teal-300  font-bold lg:text-xl'>Complete Your Account</h2>
                    <p className=' text-white mt-3'>Complete Your profile with all the info <br />  to get authentication of client.</p>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-40 w-20 mx-auto bg-orange-400 rounded-full p-4 mb-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>



                    <h2 className='text-teal-300 font-bold lg:text-xl'>Add Your Business Toys</h2>
                    <p className=' text-white mt-3'>Add and get your preferable toys with all <br /> the requirements and get it.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UserWork;