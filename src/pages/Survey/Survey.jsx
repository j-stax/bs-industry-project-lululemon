import './Survey.scss'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import SurveyCard from "../../components/SurveyCard"
import { data as surveyQuestions} from '../../data/surveyQuestions'


export default function Survey() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState({})
    const navigate = useNavigate()

    const currentQuestion = surveyQuestions[currentQuestionIndex]

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }))
    }

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1)
    }

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1)
    }

    const handleSurveyEnd = () => {
        // Send answers/data for analysis
        console.log(answers)
        navigate("/recommendation")
    }

    return (
        <div className="survey">
            <SurveyCard 
                question={currentQuestion}
                handleAnswerChange={handleAnswerChange}
            />
            <div className="survey__buttons">
                <button 
                    className={`survey__btn${currentQuestionIndex === 0 ? " invisible" : ""}`}
                    onClick={handlePreviousQuestion}
                >&lt; Prev</button>
                <button 
                    className={`survey__btn${currentQuestionIndex === surveyQuestions.length - 1 ? " hidden" : ""}`}
                    onClick={handleNextQuestion}
                    disabled={!answers[currentQuestion.id]}
                >Next &gt;</button>
                {currentQuestionIndex === surveyQuestions.length - 1 &&
                    <button 
                        className="survey__btn survey__btn--end" 
                        onClick={handleSurveyEnd}
                        disabled={!answers[currentQuestion.id]}
                    >End</button>
                }
            </div>
        </div>
    )
}