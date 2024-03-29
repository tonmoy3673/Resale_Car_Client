import { useQuery } from '@tanstack/react-query';

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () => {
    useTitle('My-Product')
    const {user}=useContext(AuthContext);
    const {data: products=[],refetch,isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res=await fetch(`https://car-dealer-server-lovat.vercel.app/products/my-products?email=${user?.email}`);
            const data=await res.json();
            return data
        }
    })

        const handleProductDelete=product=>{
            fetch(`https://car-dealer-server-lovat.vercel.app/products/${product._id}`,{
                method:'Delete',

            })
            .then(res=>res.json())
            .then (data=>{
                if (data.acknowledged) {
                    toast.success(`${product?.name} delete successfully`)
                    refetch()
                }
            })
        }
        if (isLoading) {
            return <Loading></Loading>
        }
    return (
        <div className='p-5'>
            <h2 className='text-2xl mb-5 font-bold text-center'>My Products :{products.length}</h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>idx</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,i)=><tr key={product._id}>
                                    <th>{i+1}</th>
                                    <td>{product?.name}</td>
                                    <td>{product?.email}</td>
                                    <td className='text-red-500'>{product?.price}</td>
                                    <td><button onClick={()=>handleProductDelete(product)} className='btn btn-sm bg-red-600 border-red-600 text-white'>Delete Product</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
            
        </div>
    );
};

export default MyProduct;