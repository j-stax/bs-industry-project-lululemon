import './TextCard.scss'

export default function TextCard({ question, handleAnswerChange }) {

    const handleChange = (e) => {
        const input = e.target.value
        handleAnswerChange(question.id, input)
    }

    return (
        <div className="text-card">
            <p className="text-card__text">{question.text}</p>
            <input 
                className="text-card__input" 
                type="text" 
                onChange={handleChange}
            />
        </div>
    )
}