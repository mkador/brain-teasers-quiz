import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizpart from './Quizpart';

const Quiz = () => {
  const quizs = useLoaderData();
    return (
    <div>
      {
        quizs?.data?.map(quiz=><Quizpart
        key={quiz.id}
        quiz={quiz}></Quizpart>)
      }
    </div>
    );
};

export default Quiz;


