import React, { useState } from 'react';

const options = [
    'Front-end Developer',
    'Back-end Developer',
    'Full-Stack Developer',
    'Other...',
]

export const QuestionForm = () => {
    const [isAnswered, setIsAnswered] = useState(false);

    return (
        <div className="question-box">
            <p className="question-heading">Help us help you!</p>
            <p className="question-text">What is your current job title?</p>
            {isAnswered
                ? <p className="question-thanks-message">Thanks!</p>
                : <div className="answers-container">
                    {options.map(option => (
                        <button
                            key={option}
                            className="answer-button space-after"
                            onClick={() => setIsAnswered(true)}
                        >{option}</button>
                    ))}
                </div>}
        </div>
    );
}