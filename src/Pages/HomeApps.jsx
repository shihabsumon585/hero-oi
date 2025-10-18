import React from 'react';
import { useLoaderData } from 'react-router';

const HomeApps = () => {
    const appData = useLoaderData();
    console.log(appData);
    const numberOfApps = appData.length;
    console.log(numberOfApps);
    return (
        <div>
            <h1>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
    );
};

export default HomeApps;