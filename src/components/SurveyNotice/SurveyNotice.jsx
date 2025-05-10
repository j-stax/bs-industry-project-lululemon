import './SurveyNotice.scss'
import { Link } from 'react-router-dom'

export default function SurveyNotice({ handleSurveyNoticeEnd }) {

    const handleClick = (e) => {
        e.target.parentNode.classList.add("hidden")
        handleSurveyNoticeEnd()
    }

    return (
        <p className="notice">
            Complete a quick survey and receive 10% off your next purchase!&nbsp; 
            <Link to="/survey" 
                className="notice__link" 
                onClick={handleClick}
            >Click here.</Link>
        </p>
    )
}