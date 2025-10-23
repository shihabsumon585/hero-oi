import React from 'react';
import { Link } from 'react-router';
import useProducts from '../hooks/useProducts';
import AppsCard from './AppsCard/AppsCard';
import loadingImg from "../assets/logo.png"

const HomeApps = () => {

    const { appData, loading } = useProducts();
    if (loading) return (
        <div className='flex justify-center items-center mt-6'>
            <span className='text-6xl font-bold'>L</span> <img src={loadingImg} className='w-[50px]' alt="" /> <span className='text-6xl font-bold'>OADING</span>
        </div>
    );
    const homeAppData = appData.slice(0, 8);

    return (
        <div className='pt-10 bg-[#eceaea]'>
            <h1 className='text-center text-5xl font-bold '>Trending Apps</h1>
            <p className='text-center mt-4 text-lg text-gray-500'>Explore All Trending Apps on the Market developed by us</p>



            <div className='card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3'>
                {
                    homeAppData.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
                }
            </div>



            <div className='flex justify-center py-6'>
                <Link to={"/allApps"} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white '>Show All</Link>
            </div>
        </div>
    );
};

export default HomeApps;