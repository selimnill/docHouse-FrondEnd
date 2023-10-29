import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div className='input-container '>
            <h3 className="text-xl mt-52  text-yellow-400 font-bold text-center p-5">Contact Us</h3>
            <h1 className="text-3xl font-bold text-center text-white mb-10">Stay Connected With Us</h1>
            <div className='input-info'>
                <input type="text" placeholder="Your Name" className="input input-bordered input-warning w-full max-w-xs rounded-xl block mt-3" />
                <input type="text" placeholder="Email" className="input input-bordered input-warning w-full max-w-xs rounded-xl block mt-3" />
                <textarea className="textarea textarea-warning w-80 rounded-xl block mt-3" placeholder="Bio"></textarea>
                <button className='btn bg-gradient-to-r from-yellow-500  to-orange-500 rounded-xl mt-5 w-32 font-bold ml-24' type="submit">Submit</button>
            </div>
        </div>
    );
};

export default Contact;