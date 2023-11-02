import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (
        <div>
            <div className="hero ml-auto mr-auto lg:min-h-screen md:min-h-screen mx rounded-xl" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2RvbnRvbG9neXxlbnwwfHwwfHx8MA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="sm:w-96 mt-9 text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">Let's Impress everyone with Smile </h1>
                        <p className="mb-5 w-96">Proving with specialized and highly qualified doctores and the best dental treatment on the New York City.</p>
                        <Link to='/appointment'><button className="btn btn-primary font-extrabold mb-9">get started</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;