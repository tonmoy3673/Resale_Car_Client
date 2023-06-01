import React from 'react';

const CarDetail = ({ detail }) => {
    const { info, img } = detail;
    return (
        <div className='mx-auto'>
            <div class="w-full h-full lg:w-60 card bg-base-100 shadow-xl pb-2">
                <figure className='pt-4'><img src={img} alt="img" className='lg:w-24 w-2/4' /></figure>
                <div class="card-body">
                    <h2 class="text-center text-2xl font-semibold">{info}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default CarDetail;