import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Car from './Car/Car';
import Loading from '../../../Shared/Loading/Loading';
import OrderModal from '../../../Dashboard/OrderModal/OrderModal';

const AllCars = () => {
    const category=useLoaderData();
    const [product,setProduct]=useState('')
    const {_id}=category;
    const {data : cars=[],isLoading ,refetch}=useQuery({
        queryKey:['cars'],
        queryFn:async ()=>{
            const res= await fetch(`https://car-dealer-server-lovat.vercel.app/products?id=${_id}`);
            const data =await res.json();
            return data;

        }
    })

   

        if (isLoading) {
            return <Loading></Loading>
        }
    return (
        <div className='p-6'>
            <h1 className='text-3xl text-center font-bold mb-5'>Selected Cars</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mb-6'>
                {
                    cars.map(car=>
                        <Car key={car._id} car={car}
                        setProduct={setProduct}>
                            
                        </Car>
                    )
                }
            </div>
            {
                product && 
                <OrderModal product={product}
                setProduct={setProduct}
                refetch={refetch}></OrderModal>
            }
        </div>
    );
};

export default AllCars;