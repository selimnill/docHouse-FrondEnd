import React from 'react';
import './HeroSection.css';
import {Link} from 'react-router-dom';


const HeroSection = () => {
    return (
        <div className='heroSect mx-auto rounded lg:w-1/2 '>
            <div className='info'>
                <h2 className='lg:text-4xl sm:text-2xl sm:mx-auto text-white font-bold text-center sm:mt-10 sm:w-full'>Let's Impress everyone with a <br /><span>Smile</span></h2>
                <p className='text-white text-center sm:w-72'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam corporis inventore consequatur quae culpa cum tempora! Commodi distinctio blanditiis ut accusantium incidunt earum mollitia quisquam, quos atque, facere minima!</p>
                <Link to='/appointment'><button className="btn bg-gradient-to-r from-yellow-500  to-orange-500 rounded-xl mt-5 ml-96 font-extrabold">get started</button></Link>
            </div>
        </div>
    );
};

export default HeroSection;