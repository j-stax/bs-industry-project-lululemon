import './MultipleChoiceCard.scss'
import { useState } from 'react'

export default function MultipleChoiceCard({ question, handleAnswerChange }) {
    const [selectedOption, setSelectedOption] = useState("")

    const handleClick = (option) => {
        setSelectedOption(option)
        handleAnswerChange(question.id, option)
    }

    return (
        <div className="mc-card">
            <p className="mc-card__text">{question.text}</p>
            <div className="mc-card__mc-options">
                {question.options.map(option =>
                    <button 
                        key={option} 
                        className={`mc-card__option${selectedOption === option ? " mc-card__option--selected" : ""}`}
                        onClick={() => handleClick(option)}
                    >{option}</button>
                )}
            </div>
        </div>
    )
}