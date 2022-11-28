import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const AllBuyer = () => {
    useTitle('All-Buyers');

    const {data : buyers=[],isLoading,refetch}=useQuery({
        queryKey:['buyers'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/users?role=buyers');
            const data=await res.json();
            return data
            
        }
        
    })

        const handlebuyerDelete=buyer=>{
            fetch(`http://localhost:5000/users/buyer/${buyer?._id}`,{
                method:'DELETE',

            })
            .then(res=>res.json())
            .then(data=>{
                if (data.acknowledged) {
                    toast.success(`${buyer?.name} deleted successfully`)
                    refetch()
                }
            })
        }

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div className='p-5'>
            <h2 className='text-2xl mb-5 font-bold text-center'> All Buyers : {buyers.length}</h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                            <tr>
                                <th>
                                    idx
                                </th>
                                <th>Name</th>
                                    <th>Email</th>
                                    <th>Remove</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer,i)=> <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td className='font-semibold'>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td><button onClick={()=>handlebuyerDelete(buyer)} className='btn btn-sm bg-red-600 border-red-600 text-white'>Delete</button> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;