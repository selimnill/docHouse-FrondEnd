import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gray font-bold ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Appointment</Link></li>
                        <li><Link>Reviews</Link></li>
                        <li><Link>Contact Us</Link></li>
                        <li><Link>Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-extrabold">Doctor's House</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mx-3">
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Appointment</Link></li>
                    <li><Link>Reviews</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;