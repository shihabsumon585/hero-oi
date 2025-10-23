import React, { useEffect, useState } from 'react';
import { AiFillLike, AiFillStar } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { Link, useParams } from 'react-router';
import useProducts from '../hooks/useProducts';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import appNotFountImg from "../assets/App-Error.png"
import loadingImg from "../assets/logo.png"
import { toast } from 'react-toastify';

<div>L <img src={loadingImg} /> OADING</div>

const AppDetails = () => {

    const params = useParams();
    const [isInstall, setIsInstall] = useState(false);

    const { appData, loading, error } = useProducts();

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem("wishList")) || [];
        const alreadyInstalled = existingList.find(p => String(p.id) === params.id);
        if (alreadyInstalled) {
            setIsInstall(true);
        }
    }, [params.id, appData]);


    if (loading) return (
        <div className='flex justify-center items-center my-20'>
            <span className='text-6xl font-bold'>L</span> <img src={loadingImg} className='w-[50px]' alt="" /> <span className='text-6xl font-bold'>OADING</span>
        </div>
    );

    if (error) return <p>Error loading data</p>;
    const singleAppData = appData.find(p => String(p.id) === params.id)



    if (!singleAppData) {
        return <div className='flex flex-col'>
            <img src={appNotFountImg} className='mx-auto my-10' alt="" />
            <Link to={"http://localhost:5173/allApps"} className='btn btn-primary mx-auto mb-10'>Go Back</Link>
        </div>
    }


    const handleInstall = () => {
        const exsistingList = JSON.parse(localStorage.getItem("wishList"));
        let updateList = [];

        if (exsistingList) {

            updateList = [...exsistingList, singleAppData];
        } else {
            updateList.push(singleAppData);
        }
        localStorage.setItem("wishList", JSON.stringify(updateList));
        const isDuplicate = updateList.some(p => p.id === singleAppData.id);
        if (isDuplicate) setIsInstall(true);

        // if (updateList.find(p => String(p.id) === params.id)) {
        //     setIsInstall(true)
        // } else {
        //     setIsInstall(false)
        // }
        toast("Apps Install Successfully Complete");
    }



    return (
        <div className=''>
            <div className='pb-6 '>
                <div
                    className='shadow mb-6 mt-4 border-b-1 border-gray-400 flex flex-col sm:flex-row justify-baseline items-center gap-6 p-4 bg-white '
                >
                    <img className='rounded-2xl w-[350px]' src={singleAppData?.image} alt="" />
                    <div className='space-y-1 w-full'>
                        <div className=' border-b-2'>
                            <h1 className='text-4xl font-bold'>{singleAppData?.title}</h1>
                            <p className='mb-4'>Developed by <span className='text-[#632EE3] font-semibold'>{singleAppData?.companyName}</span></p>
                        </div>
                        <div className=''>
                            <div className='flex justify-baseline gap-12 space-y-2'>
                                <div className='mt-2 space-y-1'>
                                    <BsDownload className='text-green-600 text-4xl' />
                                    <p className='text-gray-500'>Downloads</p>
                                    <h2 className='text-4xl font-bold'>{singleAppData?.downloads}</h2>
                                </div>
                                <div className='mt-2 space-y-1'>
                                    <AiFillStar className='text-orange-400 text-4xl' />
                                    <p className='text-gray-500'>Average Ratings</p>
                                    <h2 className='text-4xl font-bold'>{singleAppData?.reviews}</h2>
                                </div>
                                <div className='mt-2 space-y-1'>
                                    <AiFillLike className='text-blue-600 text-4xl' />
                                    <p className='text-gray-500'>Total Reviews</p>
                                    <h2 className='text-4xl font-bold'>{singleAppData?.reviews}</h2>
                                </div>
                            </div>
                            <button onClick={handleInstall} disabled={isInstall} className='btn bg-[#00D390] text-white mt-6'>
                                {
                                    isInstall ? "Installed" : `Install Now (${singleAppData?.size} MB)`
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className='chart bg-white p-4 my-6 shadow border-b-1 border-gray-300 '>
                    <h4 className='text-2xl  font-semibold mb-2 text-center sm:text-left'>Ratings</h4>

                    {/* bar charts */}
                    <BarChart

                        className='mx-auto'
                        style={{ width: '100%', maxWidth: '90%', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive data={singleAppData?.ratings}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis width="auto" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                    </BarChart>
                </div>

                <div className='bg-white p-4 my-6 border-b-1 border-gray-300'>
                    <h4 className='text-2xl  font-semibold mb-2'>Description</h4>
                    <p className='text-gray-500'>{singleAppData?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;