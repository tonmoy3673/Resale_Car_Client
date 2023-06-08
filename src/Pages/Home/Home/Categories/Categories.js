import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Categories.css';
import Lottie from "lottie-react";
import car from '../Lottie/carr.json';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://car-dealer-server-lovat.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        AOS.init(
         
        );
      }, [])
    return (
        <div className='container py-12' data-aos="fade-left">
           <div className='grid items-center justify-center'>
           <Lottie animationData={car} loop={true} className='lg:w-3/12 mx-auto rounded w-1/4 -mt-5' />
            <h2 className='text-4xl -mt-6 pb-8 text-center font-bold text1'>Cars Categories</h2>
           </div>
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