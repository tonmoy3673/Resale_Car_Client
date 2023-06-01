
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const OrderModal = ({ product, setProduct, refetch }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { price, resale_price, name , email, img} = product;
    const navigate = useNavigate();

    


    const handleOrder = data => {
            
        const order = {
            title: name,
            product_img: img,
            price: data.price,
            buyer: data.name,
            email: data.email,
            phone: data.phone,
            location: data.location,
            seller_email : email,
        }

        fetch('https://car-dealer-server-lovat.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct('')
                    toast.success(`Order Successfully Done`)
                    refetch()
                    navigate('/dashboard/myorders')

                }
                else {
                    setProduct('')
                    toast.error(data.message)
                }

            })



    }
    return (
        <>
            <input name="" type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <form className='mt-8' onSubmit={handleSubmit(handleOrder)}>
                        <div className="form-control">
                            <input readOnly defaultValue={user?.displayName} type="text" {...register("name", {
                                required: 'Name is required'

                            })} placeholder="name" className="input input-bordered" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input readOnly defaultValue={user?.email} type="email" {...register("email", {
                                required: 'Email Address is required'

                            })} placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="tel" {...register("phone", {
                                required: 'Phone Address is required'

                            })} placeholder="Phone Number" className="input input-bordered" />
                            {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        </div>
                        <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <select {...register("location")} className="select select-bordered w-full ">
                        <option disabled selected>Selected Location</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Jashore">Jashore</option>
                    </select>
                </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            {resale_price !== '' ? <input readOnly defaultValue={resale_price} type="text" {...register("price")} className="input input-bordered" /> :
                                <input readOnly defaultValue={price} type="text" {...register("price")} className="input input-bordered" />
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-warning text-white semi-bold">Submit Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;