
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarDetail = ({ detail }) => {
    const { info, img,duration } = detail;
    // useEffect(()=>{
    //     AOS.init(
    //         {
    //             duration:duration
    //         }
    //     )
    // },[duration])
    return (
        <div className='mx-auto' data-aos="fade-up"
        >
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