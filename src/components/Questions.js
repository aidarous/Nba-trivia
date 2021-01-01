import React, { useState} from 'react';

const Questions = ({question, choice1, choice2, choice3, choice4}) => {
    return (
        <div>
            <h4>{question}</h4>
            <p>a. {choice1}</p>
            <p>b. {choice2}</p>
            <p>c. {choice3}</p>
            <p>d. {choice4}</p>
        </div>
    );
};

export default Questions;