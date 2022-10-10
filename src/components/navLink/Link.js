import React from 'react';

const Link = ({route}) => {
    return (
       <li className='mr-10 mt-4 p-1 font-mono font-bold text-xl text-white'>
        <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;