
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imgHostingApiKey = process.env.REACT_APP_imgbb_api_key;
    
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data
        }
    })



    

    const handleAddProduct = data => {
        const img = data.img[0];
        const formData = new FormData ();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const product = {
                        seller: data.seller,
                        name: data.name,
                        email: data.email,
                        categoryId: data.categoryId,
                        img: imgData.data.url,
                        location: data.location,
                        price: data.price,
                        resale_price: data.resale_price,
                        description: data.description,
                        condition: data.condition,
                        used_time: data.used_time

                    }

                    fetch(`http://localhost:5000/products`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success(`Product added successfully`);
                                navigate('/dashboard/myproduct')
                            }
                        })
                }
            })

    }

    return (
        <div className='lg:w-1/2 p-6 bg-[#dfe6e9]'>
            <h2 className='text-2xl mb-5 font-bold text-center'>Please Add Your Product Here!</h2>
            <form className='mt-8 mx-auto' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" readOnly defaultValue={user?.displayName} {...register("seller")} placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" readOnly defaultValue={user?.email} {...register("email")} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Car Name</span>
                    </label>
                    <input type="text" {...register("name")} placeholder="Title" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Regular Price</span>
                    </label>
                    <input type="text" {...register("price")} placeholder="Regular Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input type="text" {...register("resale_price")} placeholder="Resale Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Used Time</span>
                    </label>
                    <input type="text" {...register("used_time")} placeholder="Resale Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Condition type</span>
                    </label>
                    <select {...register("condition")} className="select select-bordered w-full ">
                        <option disabled selected>Select type</option>
                        <option value="excellent">excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>

                    </select>
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
                        <span className="label-text">Category</span>
                    </label>
                    <select {...register("categoryId", {
                        required: `please`
                    })} className="select select-bordered w-full ">
                        <option disabled selected>Selected Category</option>
                        {
                            categories.map(category => <option defaultValue={category._id}
                                key={category._id}
                                value={category._id}
                            >{category.category}</option>)
                        }

                    </select>
                    {errors.categoryId && <p>Error</p>}
                </div>
                <div className="form-control">
                    <label className="label">Product Description</label>
                    <textarea cols="30" rows="20" type="textarea" {...register("description")} placeholder="Description" className="input input-bordered"></textarea>
                </div>
                <div className="form-control">
                    <label className="label"></label>
                    <input type="file" {...register("img")} placeholder="Photo Upload" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-warning text-white border-none">Add A Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;