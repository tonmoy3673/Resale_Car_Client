import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '.././images/error.jpg'

const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div className='py-4 text-center bg-[#dfe6e9]'>
            <div className=''>
                <img src={img} alt='error_image' className='w-3/12 h-2/4 mx-auto'  />
            </div>
            <h2 className='text-3xl font-bold py-3'>Oops! An Error Occurred 😢</h2>
            {error && (
          <div>
            <h5 className='text-2xl text-red-600 font-semibold'>{error.statusText || error.message}</h5>
            <h5 className='text-xl text-red-600 font-semibold'>{error.status}</h5>
          </div>
        )}
        </div>
    );
};

export default ErrorPage;