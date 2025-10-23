import React from 'react';
import { FaGithub } from 'react-icons/fa';
import imgLogo from "../assets/logo.png"
import { Link, NavLink } from 'react-router';


const Navbar = () => {

    const activeClass = "text-[#632EE3] font-bold border-b-2";
    const defaultClass = "font-semibold text-gray-700";

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? activeClass : defaultClass}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/allApps"
                                className={({ isActive }) => isActive ? activeClass : defaultClass}
                            >Apps</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/installation"
                                className={({ isActive }) => isActive ? activeClass : defaultClass}
                            >Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className='flex justify-center items-center gap-3'>
                    <img className='w-[40px]' src={imgLogo} alt="" />
                    <h1 className='font-bold text-3xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>HERO.IO</h1>

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold space-x-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? activeClass : defaultClass}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/allApps"
                            className={({ isActive }) => isActive ? activeClass : defaultClass}
                        >Apps</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/installation"
                            className={({ isActive }) => isActive ? activeClass : defaultClass}
                        >Installation</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white" href='https://github.com/shihabsumon585' > <FaGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;