import React from 'react';
import { AiFillLike, AiFillStar } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';

const appData = {
    "id": 1,
    "image": "https://picsum.photos/200/200?1",
    "title": "ChatEase",
    "companyName": "TechNova Ltd",
    "description": `This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
    
    A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
    
    For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.`,
    "size": 45,
    "reviews": "1.2M",
    "ratingAvg": 4.6,
    "downloads": "10M",
    "ratings": [
        { "name": "1 star", "count": 12000 },
        { "name": "2 star", "count": 15000 },
        { "name": "3 star", "count": 30000 },
        { "name": "4 star", "count": 50000 },
        { "name": "5 star", "count": 150000 }
    ]
}

const AppDetails = () => {
    return (
        <div className=''>
            <div className='pb-6 '>
                <div className='shadow mb-6 mt-4 border-b-1 border-gray-400 flex justify-baseline items-center gap-6 p-4 bg-white '>
                    <img className='rounded-2xl w-[300px]' src={appData.image} alt="" />
                    <div className='space-y-1'>
                        <div className='w-full border-b-2'>
                            <h1 className='text-4xl font-bold'>{appData.title}</h1>
                            <p className='mb-4'>Developed by <span className='text-[#632EE3] font-semibold'>{appData.companyName}</span></p>
                        </div>
                        <div className=''>
                            <div className='flex justify-between gap-12 space-y-2'>
                                <div className='mt-2 space-y-1'>
                                    <BsDownload className='text-green-600 text-4xl'/>
                                    <p className='text-gray-500'>Downloads</p>
                                    <h2 className='text-4xl font-bold'>{appData.downloads}</h2>
                                </div>
                                <div className='mt-2 space-y-1'>
                                    <AiFillStar className='text-orange-400 text-4xl'/>
                                    <p className='text-gray-500'>Average Ratings</p>
                                    <h2 className='text-4xl font-bold'>{appData.reviews}</h2>
                                </div>
                                <div className='mt-2 space-y-1'>
                                    <AiFillLike className='text-blue-600 text-4xl'/>
                                    <p className='text-gray-500'>Total Reviews</p>
                                    <h2 className='text-4xl font-bold'>{appData.reviews}</h2>
                                </div>
                            </div>
                            <button className='btn btn-primary mt-6'>Install Now ({appData.size} MB)</button>
                        </div>
                    </div>
                </div>
                <div className='chart bg-white p-4 my-6 shadow border-b-1 border-gray-300 '>
                    <h4 className='text-2xl  font-semibold mb-2'>Ratings</h4>
                </div>
                <div className='bg-white p-4 my-6 border-b-1 border-gray-300'>
                    <h4 className='text-2xl  font-semibold mb-2'>Description</h4>
                    <p className='text-gray-500'>{appData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;