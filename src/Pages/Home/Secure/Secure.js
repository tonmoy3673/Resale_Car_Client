import React from 'react';
import SecureInfo from './SecureInfo';

const Secure = () => {
    const info=[

        {
            des:'Fill Car Details',
            img:'https://i.ibb.co/12NV3Hp/Loan.png',
            _id:1
        },
        {
            des:'Get Response Us',
            img:'https://i.ibb.co/NtJWHMp/Balances.png',
            _id:2
        },
        {
            des:'Proceed Your Payment',
            img:'https://i.ibb.co/gTZKXhz/Payday.png',
            _id:3
        },
    ]
    return (
        <div className='py-12'>
            <h2 className='text-center py-6 mb-6 text-4xl font-bold'>Easy And Secure Transaction</h2>
            
            <div className='grid gap-6 lg:grid-cols-3 grid-cols-1 items-center justify-center'>
                {
                    info.map(detail=><SecureInfo
                    key={detail._id}
                    detail={detail}
                    />)
                }
            </div>
        
            
            </div>
       
    );
};

export default Secure;