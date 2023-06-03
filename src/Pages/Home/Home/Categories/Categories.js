import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://car-dealer-server-lovat.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='container py-12'>
            <h2 className='text-4xl pb-8 text-center font-bold text1'>Cars Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category => <Category
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