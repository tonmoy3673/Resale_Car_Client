import React from 'react';
import img1 from '../../../../images/hero-car-1.png';
import img2 from '../../../../images/hero-car-2.png';
import img3 from '../../../../images/hero-car-3.png';


import BannerItems from './BannerItems';

const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    }
    
]



const Banner = () => {

    return (
      
            <div className="carousel w-full py-10 mt-4">
          {
             bannerData.map(slide=><BannerItems key={slide.id} slide={slide}></BannerItems>)
          }
  
  
  </div> 
 

      
    );
};

export default Banner;