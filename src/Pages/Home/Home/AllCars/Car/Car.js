import React from 'react';
import useTitle from '../../../../../hooks/useTitle';
import icon from '../../../../../images/icon.jpg';




const Car = ({car,setProduct}) => {

    useTitle('Car-Details')

    const {_id,name,img,location,price,resale_price,description,condition,used_time,dateOfPost,seller}=car;
    return (
        <div className='card bg-base-100 shadow-xl'>
            <figure>
            <img src={img} alt='photos'/>
            </figure>
            <div className='card-body h-screen bg-gray-100'>
                <h2 className='card-tile text-center'>
                    <div className=' bg-emerald-500 rounded-sm text-2xl h-10 text-white'>
                        {name}
        
                    </div>
                </h2>
                <p ><span className='font-semibold'>Description</span> : {description}</p>
                <p className='font-semibold'>Original Price : <del className='text-gray-500'>${price}</del></p>
                <p className='font-semibold'>Resale Price : <span className='text-red-400'>${resale_price}</span></p>
                
                <p className='font-semibold flex items-center'>Posted By : <span>{seller}</span> <img src={icon} alt='icon' className='w-8 ml-2'/> </p>
                
                <p className='font-semibold'>Used Of Years : {used_time} years</p>
                <p className='font-semibold'>Condition : {condition}</p>
                <p className='font-semibold'>Location : {location}</p>
                <p className='font-semibold'>Date Of Post : {dateOfPost}</p>

                
                
                
            </div>
                
                
                
                <div className='card-actions justify-center w-12/12'>
                    
                 <label htmlFor='order-modal'
                        className='btn btn-warning text-white' onClick={()=> setProduct(car)}>Booked Now

                        </label>
                        
                    
                    
                </div>
        </div>
    );
};

export default Car;