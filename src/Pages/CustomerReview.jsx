import React from 'react';
import heroImg from "../assets/hero.png"

const CustomerReview = () => {
    return (
        <div className='mt-6 '>
            <img src={heroImg} className='mx-auto w-[550px] ' alt="" />
            <div className='bg-[#632EE3] text-white text-center space-y-6 py-12'>
                <h1 className='text-4xl font-bold'>Trusted By Millions, Build For You</h1>
                <div className='flex justify-around items-center'>
                    <div className='space-y-1'>
                        <p className=''>Total Downloads</p>
                        <h2 className='text-5xl font-bold'>29.6M</h2>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div className='space-y-1'>
                        <p className=''>Total Reviews</p>
                        <h2 className='text-5xl font-bold'>906K</h2>
                        <p>46% more than last month</p>
                    </div>
                    <div className='space-y-1'>
                        <p className=''>Active Apps</p>
                        <h2 className='text-5xl font-bold'>132+</h2>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;