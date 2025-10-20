import React from 'react';
import { useLoaderData } from 'react-router';
import InstalledAppCard from './InstalledAppCard';

const InstalledApps = () => {

    const apps = useLoaderData();

    return (
        <div className='bg-[#eceaea] py-6 space-y-4'>
            <h1 className='text-center text-4xl font-bold'>Your Installed Apps</h1>
            <p className='text-center text-gray-500'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex justify-between px-4'>
                <h1 className='text-2xl font-bold'>({ }) Apps Found</h1>
                {/* search feature add */}
                <input type="search" name="" id="" />
            </div>

            <div className='p-4 space-y-4'>
                {
                    apps.map(app => <InstalledAppCard key={app.id} app={app}></InstalledAppCard>)
                }
            </div>

        </div>
    );
};

export default InstalledApps;