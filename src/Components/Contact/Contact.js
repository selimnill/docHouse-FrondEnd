import React from 'react';
// import './Contact.css'


const Contact = () => {
    return (
        <div className='bg-slate-600'>
            <h3 className="text-xl mt-52  text-yellow-400 font-bold text-center p-5">Contact Us</h3>
            <h1 className="text-3xl font-bold text-center text-white mb-10">Stay Connected With Us</h1>
            <div className='flex justify-center items-center'>
                <div className='sm:ml-10'>
                    <input type="text" placeholder="Your Name" className="input input-bordered input-warning w-full max-w-xs rounded-xl  mt-3" /> <br />
                    <input type="text" placeholder="Email" className="input input-bordered input-warning w-full max-w-xs rounded-xl  mt-3" /><br />
                    <textarea className="textarea textarea-warning w-80 rounded-xl mt-3" placeholder="Bio"></textarea><br />
                    <button className='mb-8 btn bg-gradient-to-r from-yellow-500  to-orange-700 rounded-xl mt-5 w-32 font-bold ml-24' type="submit">Submit</button> <br />
                </div>
            </div>
        </div>
    );
};

export default Contact;