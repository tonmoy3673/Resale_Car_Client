import React from 'react';
import './BannerItems.css'

const BannerItems = ({slide}) => {

    
    const {image,id,prev,next}=slide;

    return (
       
            <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='banner-img'>
    <img src={image} alt='img' className="w-full rounded-xl py-4"  />
    </div>
    
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/3 w-3/4">
    <h1 className='text-4xl font-bold text-white text-start hidden lg:block'>Affordable
       Price For <br/>Resale Car <br/>
        Buying & Selling</h1>
    </div>
    
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5 btn-outline btn-warning">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle btn-warning">❯</a>
    </div>
  </div> 
        
    );
};

export default BannerItems;