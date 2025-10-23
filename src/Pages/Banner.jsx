import React from 'react';
import playStore from "../assets/playStore.png"
import appStore from "../assets/appStore.png"
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='pt-10 space-y-4'>
            <h1 className='text-center text-4xl font-bold'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='text-center px-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center space-x-6'>
                <Link target='_blank' to={"https://play.google.com/"} className='btn'><img src={playStore} className='w-[25px]' alt="" /> Google Play</Link>
                <Link target='_blank' to={"https://www.apple.com/app-store/"} className='btn'><img src={appStore} className='w-[25px]' alt="" /> App Store</Link>
            </div>
        </div>
    );
};
export default Banner;