import React from 'react';

const Option = ({option,showAnswer}) => {
    return (
        <div>
            <div className="flex">
               <div className="mt-2">
                 <label className="inline-flex items-center">
                   <input onClick={()=>showAnswer(option)} type="radio" className="form-radio" name="option" value={option}/>
                    <span class="ml-2">{option}</span>
                </label>
         </div>
  
        </div>
        </div>
    );
};

export default Option;