import React from 'react';
import logo from '../../images/logo.jpg';

const Home = () => {
    return (
        <div className='flex rounded-md pb-4'>
            <div className='bg-stone-800'>
            <h1 className='mt-12 text-center text-amber-700 text-4xl font-mono font-semibold italic hover:not-italic'>Brain 
            <span className='text-amber-300'>Teasers</span></h1>
            <div className='text-center'>
            <p className='ml-10 text-white text-mono'>Our research shows that logic stress and limit stress generated during playing brain teaser games are positive stress, with a desirable effect on the players' attention. These two types of stress improve cognitive abilities, such as attention, concentration, and problem-solving, by activating the brain's frontal lobe.</p>
            <button className=' mt-5 bg-amber-600 text-white text-mono px-4 py-1 rounded-md'>Take a Quiz</button>
            </div>
            </div>
            <div className='bg-stone-800'>
                <img className='w-120 h-120 p-6 rounded-full' src={logo} alt="" />
            </div>
           
        </div>
    );
};

export default Home;