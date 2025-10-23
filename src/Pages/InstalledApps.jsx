import React, { useEffect, useState } from 'react';
import InstalledAppCard from './InstalledAppCard';


const InstalledApps = () => {

    const [apps, setApps] = useState([]);

    useEffect(() => {
        const getLocalData = JSON.parse(localStorage.getItem("wishList"));
        if (getLocalData) setApps(getLocalData);
    }, [])

    const [sortOrder, setSortOrder] = useState("none");

    const sortedItem = (
        () => {
            if (sortOrder === "size-asc") {
                return [...apps].sort((a, b) => b.size - a.size)
            } else if (sortOrder === "size-desc") {
                return [...apps].sort((a, b) => a.size - b.size)
            } else {
                return apps;
            }
        }
    )()

    const handleRemove = id => {
        console.log(id);
        const existingList = JSON.parse(localStorage.getItem("wishList"));
        let updatedList = existingList.filter(p => p.id !== id)
        // for ui instant update
        setApps(updatedList);
        localStorage.setItem("wishList", JSON.stringify(updatedList))
        console.log("btn clicked");
    }

    return (
        <div className='bg-[#eceaea] py-6 space-y-4 '>
            <h1 className='text-center text-4xl font-bold'>Your Installed Apps</h1>
            <p className='text-center text-gray-500'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex justify-between px-4'>
                <h1 className='text-2xl font-bold'>({sortedItem.length}) Apps Found</h1>
                {/* sort feature add */}
                <label className='form-control w-full max-w-sm'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="none">Sort by size</option>
                        <option value="size-asc">High-Low</option>
                        <option value="size-desc">Low-High</option>
                    </select>
                </label>
            </div>

            <div className='p-4 space-y-4'>
                {

                    sortedItem.map(app => <InstalledAppCard key={app.id} 
                        app={app}
                        handleRemove={handleRemove}
                        ></InstalledAppCard>)
                }
            </div>
        </div>
    );
};

export default InstalledApps;