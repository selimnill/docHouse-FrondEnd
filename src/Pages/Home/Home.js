import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Location from '../../Components/Location/Location';
import Services from '../../Components/Services/Services';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Location></Location>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;