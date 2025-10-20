import React from 'react';
import { useLoaderData } from 'react-router';
import AllAppsCard from './AllAppsCard';

const AllApps = () => {

    const allAppsData = useLoaderData();
    console.log(allAppsData);
    
    return (
        <div className='my-6 space-y-6'>
            <h1 className='text-center text-4xl font-bold'>Our All Applications</h1>
            <p className='text-center text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>({allAppsData.length}) Apps Found</h1>
                {/* search feature add */}
                <input type="search" name="" id="" />
            </div>

            <div className='card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#eceaea] p-4'>
                {
                    allAppsData.map(allApp => <AllAppsCard key={allApp.id} app={allApp}></AllAppsCard>)
                }
            </div>

        </div>
    );
};

export default AllApps;