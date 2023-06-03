import React from 'react';
import img from '../../../../images/banner.png'

const Section = () => {
    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img}  className="lg:w-1/2" alt='banner'/>
                <div>
                    
                    <h1 className="text-4xl font-bold text1 text-center lg:text-start">Don't Waste Your <br/>Valuable Time or Money</h1>
                    <p className="py-6">All Vehicles Dealer additions to vehicles may apply, and may not be included in online prices. Although every reasonable effort has been made to ensure the accuracy of the information contained on this site, absolute accuracy cannot be guaranteed. This site, and all information and materials appearing on it, are presented to the user "as is" without warranty of any kind, either express or implied. All vehicles are subject to prior sale. Price does not include applicable tax, title, license, processing and/or documentation fees, and destination charges. Vehicles shown at different locations are not currently in our inventory (not in stock) but can be made available to you at our location within a reasonable date from the time of your request, not to exceed one week.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Section;