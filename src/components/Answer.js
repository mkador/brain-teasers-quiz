import React from 'react';
import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = ({questionAndOption}) => {
    const {id,question,options,correctAnswer} = questionAndOption;
    const showAnswer =(answer)=>{
        if(correctAnswer===answer){
          toast.success('Correct Answer)', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        else{
          toast.success('Opss!!! Wrong Answer)', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
    }
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h6 className="mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
        <div dangerouslySetInnerHTML={{__html:question}}/>
        </h6>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
        {
            options.map((option,i)=> <Option key={i} option={option} showAnswer={showAnswer}></Option>)
        }
        </p>
        <a
        //   href="/quiz"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            {/* <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg> */}
            <EyeIcon className="h-6 w-6 text-blue-500"/>
          </div>
        </a>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
            
    <ToastContainer></ToastContainer>
       
        </div>
    );
};

export default Answer;