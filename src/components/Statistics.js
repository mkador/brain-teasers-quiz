import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Stastics from './Stastics';

const Statistics = () => {
     const statistics = useLoaderData()
  console.log(statistics);

    return (
        <div>
         <Stastics data={statistics.data}></Stastics>
        </div>
    );
};

export default Statistics;