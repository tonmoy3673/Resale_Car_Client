import React from 'react';

const Money = () => {
    return (
        <div className='lg:px-20 pb-12 rounded-3xl'>
            <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 justify-center items-center'>
                <img src='https://i.ibb.co/xszfvq3/TGN-4-2.png' alt='img'>
                </img>

                <div className='text-center lg:text-start'>
                    
                    <h1 className='text-4xl font-bold text1 py-4'>Create content. <br />Make money for everybody.</h1>
                    <p className='text-md text-black'>With Car Dealer you can enable your loyal fan base to bid for a share of the revenue from your next product or content offering to be launched over a stipulated time period. This leads to an audience base that is even more invested in you and your work, literally and figuratively.
                    </p>
                    <div className='py-4 mt-3'>
                        <button className='btn btn1 py-2 uppercase text-md text-white rounded-full'>
                            JOIN THE CONVERSATION <span>
                                <img className='ml-2' src='https://i.ibb.co/4dpGVtn/dis.png' alt='icon' />
                            </span>
                        </button>
                    </div>
                </div>

            </div>

            {/* ================ Another Part ============= */}
            <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 justify-center items-center'>


                <div className='text-center lg:text-start'>
                
                    <h1 className='text-4xl font-bold text1 py-4'>Build your custom <br />subscription platform</h1>
                    <p className='text-md text-black'>Build your custom subscription platform
                        Create your own content and subscription engine and have direct control of audience revenues. Car Dealer gives you access to state-of-the-art No-Code content platform which enables you to raise subscriptions as well as mint NFTs
                    </p>
                    <div className='py-4 mt-3'>
                        <button className='btn btn1 py-2 uppercase text-md text-white rounded-full'>
                            JOIN THE CONVERSATION <span className='ml-2'>
                                <img src='https://i.ibb.co/4dpGVtn/dis.png' alt='icon' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='mb-10'>
                    <img src='https://i.ibb.co/1b9Dn2v/TGN-5-1.png' alt='img'>
                    </img>
                </div>

            </div>



            {/* ================ End of make money ============== */}
        </div>
    );
};

export default Money;