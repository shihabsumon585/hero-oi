import React from 'react';

const AllAppsCard = ({app}) => {
    return (
        <div className='shadow bg-white'>
            <div className='space-y-3 p-4'>
                <img src={app.image} className='w-full h-[260px] rounded-2xl' alt="" />
                <h1 className='text-2xl font-semibold'>{app.title}</h1>
                <div className='flex justify-between'>
                    <p className='px-2 py-1 bg-[#F1F5E8] text-[#00D390]'>{app.downloads}</p>
                    <p className='px-2 py-1 bg-[#FFF0E1] text-[#FF8811]'>{app.ratingAvg}</p>
                </div>
            </div>
        </div>
    );
};

export default AllAppsCard;