import React from 'react';
import { Link } from 'react-router-dom';

const Quizpart = ({quiz}) => {
    const {id,name,logo,total} = quiz;
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="rounded-md flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src={logo}
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="bg-blue-200 rounded-full inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-500 uppercase rounded-full bg-teal-accent-400">
              {id}
            </p>
          </div>
          <h5 className="mb-3 text-2xl font-extrabold leading-none sm:text-3xl">
          Topic Name: {name}
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Lorem ipsum</span> dolor sit amet,
            consectetur adipiscing elit. Etiam sem neque, molestie sit amet
            venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
            sed consequat odio sollicitudin.
          </p>
          <p className='mb-2'>Total Quiz: {total}</p>
          <div className="flex items-center">
            <Link to={`/quiz/${id}`}>
            <button
              className="bg-blue-200 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-amber-700 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Quizpart;