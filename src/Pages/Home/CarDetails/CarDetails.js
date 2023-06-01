import React from 'react';
import CarDetail from './CarDetail';

const CarDetails = () => {

    const details=[
        {
            info:'Latest Cars',
            img:'https://i.ibb.co/LS68jjn/wheel.png',
            _id:1
        },
        {
            info:'Low Odometer',
            img:'https://i.ibb.co/tpYMGpp/meter.png',
            _id:2
        },
        {
            info:'Original Engine',
            img:'https://i.ibb.co/jZjJwkD/motor.png',
            _id:3
        },
        {
            info:'Certified Tire',
            img:'https://i.ibb.co/GtdSv5y/tire.png',
            _id:4
        }
        
    ]

    return (
        <div className='py-16'>
            <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                {
                    details.map(detail=><CarDetail key={detail._id} detail={detail}>

                    </CarDetail>)
                }
            </div>
        </div>
    );
};

export default CarDetails;