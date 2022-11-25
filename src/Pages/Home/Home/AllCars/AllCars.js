import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Car from './Car/Car';

const AllCars = () => {
    const category=useLoaderData();
    const {_id}=category;
    const {data : cars=[],}=useQuery({
        queryKey:['cars'],
        queryFn:async ()=>{
            const res= await fetch(`http://localhost:5000/products?id=${_id}`);
            const data =await res.json();
            return data;

        }
    })
    return (
        <div className='p-6'>
            <h1 className='text-3xl text-center'>All Products {cars.length}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    cars.map(car=>
                        <Car key={car._id} car={car}>
                            
                        </Car>
                    )
                }
            </div>
        </div>
    );
};

export default AllCars;