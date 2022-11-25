import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='container py-12'>
            <h2 className='text-2xl text-center font-bold'>All Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                categories.map(category=><Category 
                key={category._id}
                category={category}
                >

                </Category>)
            }
            </div>

        </div>
    );
};

export default Categories;