import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
    return (
        <div className='heroSect mx-auto rounded'>
            <div className='info'>
                <h2 className='text-4xl text-white font-bold text-center '>Let's Impress everyone with a <br /><span>Smile</span></h2>
                <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam corporis inventore consequatur quae culpa cum tempora! Commodi distinctio blanditiis ut accusantium incidunt earum mollitia quisquam, quos atque, facere minima!</p>
                <button className="btn btn-warning rounded-xl mt-5 ml-96 font-extrabold">get started</button>
            </div>
        </div>
    );
};

export default HeroSection;