import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {category:name,categoryImg,_id}=category;

    return (
       <div className='mx-auto'data-aos="zoom-out-up" data-aos-duration="2200" data-aos-delay="600">
         <div className='card bg-base-100 shadow-xl rounded'>
            <div className='card-body'>
            <img src={categoryImg} alt='category_img' className='rounded'/>
            <div className='card-actions justify-center'>
                <Link to={`/category/${_id}`}>
                    <button className='btn btn1'>
                        {name}
                    </button>
                </Link>
                
            </div>
            </div>
        </div>
       </div>
    );
};

export default Category;