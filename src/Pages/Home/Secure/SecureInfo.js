import React from 'react';

const SecureInfo = ({detail}) => {
    const {des,img}=detail;
    return (
        <div className='mx-auto pt-5' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" data-aos-delay="1500">
            <div className="w-full lg:w-96 card bg-base-200 shadow-xl pb-2 mb-3">
                <figure className='-mt-10'><img src={img} alt="img" className='lg:w-24 w-2/4' /></figure>
                <div className="card-body">
                    <h2 className="text-center text-[#538EB6] text-2xl font-semibold">{des}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default SecureInfo;