import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Location from '../../Components/Location/Location';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Location></Location>
            <Services></Services>
        </div>
    );
};

export default Home;