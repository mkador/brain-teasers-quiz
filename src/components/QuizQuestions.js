import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answer from './Answer';

const QuizQuestions = () => {
    const quizquestions = useLoaderData();
    
    return (
        <div>
            {/* <h2>questions and answers</h2>
            <p>Name: {quizquestions.data.name}</p>
            <p>ID: {quizquestions.data.id}</p>
            <p>Total: {quizquestions.data.total}</p>
            <p>Q: {quizquestions.data.questions[0].question}</p> */}

            {
                quizquestions.data.map(quizquestion=> <Answer
                key={quizquestions.data.id}
                quizquestions={quizquestions.data}></Answer>)
            }
            

        </div>
    );
};

export default QuizQuestions;