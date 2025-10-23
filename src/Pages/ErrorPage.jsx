import React from 'react';
import errorImg from "../assets/error-404.png"
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center min-h-screen  items-center'>
            <img src={errorImg} alt="" />
            <Link to="/" className="btn bg-[#632EE3] text-white mt-4">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;