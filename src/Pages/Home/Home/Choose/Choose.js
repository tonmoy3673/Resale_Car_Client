import React from 'react';

const Choose = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-between'>
           <div className='mb-5 px-8' data-aos="fade-right"
        data-aos-duration="2200" data-aos-delay="1400" data-aos-easing="ease-in-sine">
                <h2 className='text-4xl font-bold mb-4 text-center lg:text-start text1'>Why Choose Us</h2>
                <p>We offer a wide range of pre-owned vehicles to suit every budget and preference. Whether you're looking for a compact sedan, a spacious SUV, or a sporty coupe, our inventory has something for everyone. Our team carefully curates the listings to ensure that you have access to high-quality, reliable vehicles.</p>
            </div>
           
            {/* ===== image section ====== */}
            <div className='mb-6' data-aos="fade-down-left" data-aos-duration="2200" data-aos-delay="1400">
                <div class="card w-10/12 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body text-[#538EB6]">
                        <div className='flex items-center gap-4 mb-2'>
                        <img className='w-12' src='https://i.ibb.co/KxQLvk1/MORTGA1.png' alt='icon'/>
                        <p className='text-2xl font-semibold'>Do More From Home</p>
                        </div>
                        <div className='flex items-center gap-4 mb-2'>
                        <img className='w-12' src='https://i.ibb.co/BKRVhnY/Auto-Loan-copy.png' alt='icon'/>
                        <p className='text-2xl font-semibold'>24 Hours Test Drive</p>
                        </div>
                        <div className='flex items-center gap-4'>
                        <img className='w-12' src='https://i.ibb.co/CMg08PH/Funds-Transfer-01-copy.png' alt='icon'/>
                        <p className='text-2xl font-semibold'>Money Return Guarantee</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* ======== text section ====== */}
            
        </div>
    );
};

export default Choose;