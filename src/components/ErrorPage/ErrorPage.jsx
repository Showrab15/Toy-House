import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    
    //useRouterError hook for show ta error with status
    const { error, status } = useRouteError();

    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='my-container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
<img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?w=740&t=st=1684682315~exp=1684682915~hmac=92f717d62b093e06fd33e7a928b1fc5e2f702cde7597e3479f5549126d5cdb04" alt="" />
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-red-300 text-gray-900'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;