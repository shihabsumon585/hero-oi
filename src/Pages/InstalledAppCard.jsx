import React from 'react';

const InstalledAppCard = () => {
    return (
        <div className='bg-white p-2 rounded-lg'>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img src="" alt="" />
                    <div className=''>
                        <h1>Name</h1>
                        <div className='flex gap-4'>
                            <p>install</p>
                            <p>review</p>
                            <p>size</p>
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