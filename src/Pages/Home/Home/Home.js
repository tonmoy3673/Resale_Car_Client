import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Section from './Section/Section';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <Categories></Categories>
           <Section></Section>
        </div>
    );
};

export default Home;