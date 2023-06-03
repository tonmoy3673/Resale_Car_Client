import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Section from './Section/Section';
import CarDetails from '../CarDetails/CarDetails';
import Secure from '../Secure/Secure';
import Choose from './Choose/Choose';
import Money from './Money/Money';

const Home = () => {
    useTitle('Home-Page')
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <Categories></Categories>
           <Section></Section>
           <CarDetails/>
           <Money/>
           <Choose/>
           <Secure/>
        </div>
    );
};

export default Home;