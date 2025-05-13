import './SurveyNotice.scss'
import { Link } from 'react-router-dom'
import { IoIosClose } from "react-icons/io";
import { useRef } from 'react'

export default function SurveyNotice({ handleSurveyNoticeEnd }) {
    const noticeRef = useRef(null)

    const handleClick = () => {
        noticeRef.current.classList.add("hidden")
        handleSurveyNoticeEnd()
    }

    const handleClose = () => {
        noticeRef.current.classList.add("hidden")
    }

    return (
        <div ref={noticeRef} className="notice">
            <IoIosClose className="notice__close-icon" size={24} onClick={handleClose} />
            <p className="notice__para">
                Complete a quick survey and receive 10% off your next purchase!&nbsp; 
                <Link to="/survey" 
                    className="notice__link" 
                    onClick={handleClick}
                >Click here.</Link>
            </p>
        </div>
    )
}