import MultipleChoiceCard from './MultipleChoiceCard/MultipleChoiceCard'
import TextCard from './TextCard/TextCard'

export default function SurveyCard({ question, handleAnswerChange }) {
    switch (question.type) {
        case 'multiple-choice':
            return ( 
                <MultipleChoiceCard 
                    question={question}
                    handleAnswerChange={handleAnswerChange}
                />
            )
        case 'text':
            return (
                <TextCard 
                    question={question}
                    handleAnswerChange={handleAnswerChange}
                />
            )
        
        default:
            return <p>Invalid question type</p>
    }
}