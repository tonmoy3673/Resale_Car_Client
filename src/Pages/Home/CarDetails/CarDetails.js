import React from 'react';
import CarDetail from './CarDetail';

const CarDetails = () => {

    const details=[
        {
            info:'Latest Cars',
            img:'https://i.ibb.co/LS68jjn/wheel.png',
            _id:1,
            
           duration:2000
            
        },
        {
            info:'Low Odometer',
            img:'https://i.ibb.co/tpYMGpp/meter.png',
            _id:2,
            duration:1500
        },
        {
            info:'Original Engine',
            img:'https://i.ibb.co/jZjJwkD/motor.png',
            _id:3,
            duration:1000
        },
        {
            info:'Certified Tire',
            img:'https://i.ibb.co/GtdSv5y/tire.png',
            _id:4,
            duration:700
        }
        
    ]

    return (
        <div className='py-16'>
            <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                {
                    details.map(detail=><CarDetail key={detail._id} detail={detail} data-aos-duration={detail.duration}>

                    </CarDetail>)
                }
            </div>
        </div>
    );
};

export default CarDetails;