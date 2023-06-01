import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';



const MyOrders = () => {
    const {user} =useContext(AuthContext);

    useTitle('My-Order')

    const {data : orders = [], isLoading} = useQuery({
        queryKey: ["orders"],
        queryFn: async ()=>{
            const res = await fetch(`https://car-dealer-server-lovat.vercel.app/orders?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleOrderPay = () =>{

    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='p-5'>
            <h2 className='text-2xl mb-5 text-center font-bold'>My Orders : {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                        <th>idx</th>
                            <th>Img</th>
                            <th>Your Product Name</th>
                            <th>Product Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr className='shadow-md' key={order._id}>
                                <td className='text-xl font-semibold'>{i + 1}</td>
                                <td><img className='w-24 h-24 rounded' src={order?.product_img} alt="product" /></td>
                                <td className='text-lg font-bold badge-accent'>{order?.title}</td>
                                <td className='text-red-500 font-bold'>$ {order?.price}</td>
                                <td><button onClick={() => handleOrderPay(order._id)} className='btn btn-sm btn-warning text-white'>Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;