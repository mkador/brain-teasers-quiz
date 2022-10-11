import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answer from './Answer';

const QuizQuestions = () => {
    const quizquestions = useLoaderData();
    console.log(quizquestions)
    
    return (
        <div>
            {
                quizquestions?.data?.questions.map(question=> <Answer
                key={question.id}
                questionAndOption={question}></Answer>)
            }

            
            

        </div>
    );
};

export default QuizQuestions;