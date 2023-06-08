
import React from 'react';


const CarDetail = ({ detail }) => {
    const { info, img} = detail;
    
    return (
        <div className='mx-auto' data-aos="zoom-in-right"
        data-aos-duration="1500" data-aos-delay="1200" data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className="w-full h-full lg:w-72 card bg-base-100 shadow-xl pb-2">
                <figure className='pt-4'><img src={img} alt="img" className='lg:w-24 w-2/4' /></figure>
                <div className="card-body">
                    <h2 className="text-center text-[#538EB6] text-2xl font-semibold">{info}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default CarDetail;