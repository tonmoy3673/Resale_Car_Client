import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {category:name,categoryImg,_id}=category;

    return (
        <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
            <img src={categoryImg} alt=''/>
            <div className='card-actions justify-center'>
                <Link to={`/category/${_id}`}>
                    <button className='btn btn-warning'>
                        {name}
                    </button>
                </Link>
                
            </div>
            </div>
        </div>
    );
};

export default Category;