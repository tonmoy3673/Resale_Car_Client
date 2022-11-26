import React from 'react';

const Car = ({car}) => {

    const {_id,name,img,location,price,resale_price,description,condition,used_time,dateOfPost,seller}=car;
    return (
        <div className='card bg-base-100 shadow-xl'>
            <figure>
            <img src={img} alt='photos'/>
            </figure>
            <div className='card-body'>
                <h2 className='card-tile text-center'>
                    <div className='badge badge-primary rounded-sm text-2xl h-10'>
                        {name}
        
                    </div>
                </h2>
                <p>Description : {description}</p>
                <p>Original Price : <del>${price}</del></p>
                <p>Resale Price : ${resale_price}</p>
                <p>Posted By : {seller}</p>
                <p>Used Of Years : {used_time}</p>
                <p>Condition : {condition}</p>
                <p>Location : {location}</p>
                <p>Date Of Post : {dateOfPost}</p>

                
                
                
            </div>
                
                
                
                <div className='card-actions justify-center w-12/12'>
                    <button className='btn btn-md btn-warning text-white font-semibold'>
                        Booked Now
                    </button>
                </div>
        </div>
    );
};

export default Car;