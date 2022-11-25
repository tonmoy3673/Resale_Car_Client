import React from 'react';

const Car = ({car}) => {
    const {_id,name,img,location,price,resale_price,descriptions}=car;
    return (
        <div className='card bg-base-100 shadow-xl'>
            <figure>
            <img src={img} alt='photos'/>
            </figure>
            <div className='card-body'>
                <h2 className='card-tile'>
                    <div className='badge badge-primary rounded-sm text-2xl h-10'>
                        {name}
                    </div>
                </h2>
            </div>
                <div>
                {
                    resale_price ?<>
                        <p>${resale_price}</p>
                        <p><del>${price}</del></p>
                    </>:
                    <p className='text-2xl'>${price}</p>
                }
                </div>
                <p>{descriptions}</p>
                <p>{location}</p>
                <p></p>
                <div className='card-actions justify-center w-12/12'>
                    <button className='btn btn-md btn-primary'>
                        Booked Now
                    </button>
                </div>
        </div>
    );
};

export default Car;