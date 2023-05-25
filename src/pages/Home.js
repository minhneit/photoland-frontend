import React from 'react';

//import component
import Hero from '../components/Hero';
import LatestProducts from '../components/LatestProducts';

const Home = () => {
    //get new products

    return (
        <section>
            <Hero />
            <LatestProducts />
        </section>
    );
};

export default Home;
