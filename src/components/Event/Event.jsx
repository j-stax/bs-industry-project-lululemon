import './Event.scss'

export default function Event({ imageUrl, date, location, address, time }) {
    return (
        <div className="event" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="event__info">
                <p className="event__info-label">
                    Date: 
                    <span className="event__info-item">{date}</span>
                </p>
                <p className="event__info-label">
                    Location: 
                    <span className="event__info-item">{location}</span>
                </p>
                <p className="event__info-label">
                    Address: 
                    <span className="event__info-item">{address}</span>
                </p>
                <p className="event__info-label">
                    Time: 
                    <span className="event__info-item">{time}</span>
                </p>
            </div>
        </div>
    )
}