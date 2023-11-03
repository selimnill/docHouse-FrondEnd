import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div className="navbar font-bold sticky top-0  backdrop-filter backdrop-blur-lg g-opacity-30 border-b border-gray-200">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={2} className="menu menu-sm dropdown-content content-center bg-orange-800 backdrop-blur-2xl  bg-white/30 text-black mt-3 z-[1] p-2 shadow-2xl rounded-box w-96 ">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/appointment'>Appointment</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        {user?.uid ?
                            <>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={logOut}>Sign Out</button></li>
                            </>
                            :
                            <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>

                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-extrabold">Doctor's House</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/appointment'>Appointment</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    {user?.uid ?
                        <>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><button onClick={logOut}>Sign Out</button></li>
                            <p className='mt-1.5 font-extrabold text-orange-700 text-[15px]'>{user?.displayName}</p>
                        </>
                        :
                        <li><Link to='/login'>Login</Link></li>
                    }
                    <p className="btn btn-square btn-ghost mx-3 mt-[-5px]" onClick={handleToggle}>
                        <label className="swap swap-rotate w-12 h-12">
                            <input type="checkbox" />
                            <span alt="dark" className="w-8 h-8 swap-off"><FaMoon className="w-8 h-6 " /></span>
                            <span alt="light" className="w-8 h-8 swap-on"><FaSun className="w-8 h-6" /></span>
                        </label>
                    </p>
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={3} className="btn btn-ghost lg:hidden navbar-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;