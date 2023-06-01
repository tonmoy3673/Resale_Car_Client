import React from 'react';

const SecureInfo = ({detail}) => {
    const {des,img}=detail;
    return (
        <div className='mx-auto pt-5'>
            <div className="w-full h-full lg:w-96 card bg-base-100 shadow-xl pb-2">
                <figure className='-mt-10'><img src={img} alt="img" className='lg:w-24 w-3/4' /></figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">{des}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default SecureInfo;