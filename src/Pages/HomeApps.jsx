import React from 'react';
import { Link, useLoaderData } from 'react-router';
import HomeAppsCard from './HomeAppsCard';

const HomeApps = () => {
    const appData = useLoaderData();
    // console.log(appData);
    return (
        <div className='pt-10 bg-[#eceaea]'>
            <h1 className='text-center text-5xl font-bold '>Trending Apps</h1>
            <p className='text-center mt-4 text-lg text-gray-500'>Explore All Trending Apps on the Market developed by us</p>



            <div className='card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3'>
                {
                    appData.map(app => <HomeAppsCard key={app.id} app={app}></HomeAppsCard>)
                }
            </div>



            <div className='flex justify-center my-6'>
                <Link to={"/allApps"} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white '>Show All</Link>
            </div>
        </div>
    );
};

export default HomeApps;