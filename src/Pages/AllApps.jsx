import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import AppsCard from './AppsCard/AppsCard';
import loadingImg from "../assets/logo.png"

const AllApps = () => {

    const { appData, loading } = useProducts();
    
    const [search, setSearch] = useState("");
    const term = search.trim().toLocaleLowerCase();
    
    const searchedProducts = term ? appData.filter(p => p.title.toLocaleLowerCase().includes(term)) : appData;
    
    
    if (loading) return (
        <div className='flex justify-center items-center mt-10 gap-2'>
            <span className='text-6xl font-bold'>L</span> <img src={loadingImg} className='w-[50px]' alt="" /> <span className='text-6xl font-bold'>OADING</span>
        </div>
    );

    return (
        <div className='my-6 space-y-6'>
            <h1 className='text-center text-4xl font-bold'>Our All Applications</h1>
            <p className='text-center text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>({searchedProducts.length}) Apps Found</h1>
                {/* search feature add */}
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search"
                        placeholder="Search Apps"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </label>
            </div>

            <div className='card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#eceaea] p-4'>
                {
                    searchedProducts.map(allApp => <AppsCard key={allApp.id} app={allApp}></AppsCard>)
                }
            </div>

        </div>
    );
};

export default AllApps;