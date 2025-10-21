import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';


const InstalledAppCard = ({ app }) => {
    const { image, title, size, ratingAvg, downloads } = app;
    return (
        <div className='bg-white p-2 rounded-lg'>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img src={image} className='w-15 h-auto mr-4 rounded-sm' />
                    <div className='space-y-2'>
                        <h1 className='font-semibold text-xl'>{title}</h1>
                        <div className='flex gap-6'>
                            <div className='flex justify-center items-center gap-1 text-[#00D390]'>
                                <BsDownload />
                                <p>{downloads}</p>
                            </div>
                            <div className='flex justify-center items-center gap-1 text-[#FF8811]'>
                                <AiFillStar />
                                <p>{ratingAvg}</p>
                            </div>
                            <p>{size} MB</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <button className='btn btn-primary !px-4'>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstalledAppCard;

// BsDownload className='text-green-600 text-4xl' />
//                                     <p className='text-gray-500'>Downloads</p>
//                                     <h2 className='text-4xl font-bold'>{singleAppData.downloads}</h2>
//                                 </div>
//                                 <div className='mt-2 space-y-1'>
//                                     