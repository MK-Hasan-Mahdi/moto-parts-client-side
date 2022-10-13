import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Products from './Products';
import Reviews from './Reviews';
import Team from './Team';

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;