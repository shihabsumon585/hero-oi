import React, { useEffect, useState } from 'react';
import InstalledAppCard from './InstalledAppCard';


const InstalledApps = () => {

    const [apps, setApps] = useState([]);

    useEffect(() => {
        const getLocalData = JSON.parse(localStorage.getItem("wishList"));
        if(getLocalData) setApps(getLocalData);
    }, [])

    return (
        <div className='bg-[#eceaea] py-6 space-y-4'>
            <h1 className='text-center text-4xl font-bold'>Your Installed Apps</h1>
            <p className='text-center text-gray-500'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex justify-between px-4'>
                <h1 className='text-2xl font-bold'>({ apps.length }) Apps Found</h1>
                {/* sort feature add */}
                <button className='btn '>Sort</button>
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