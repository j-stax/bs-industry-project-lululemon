import './Recommendation.scss'
import Event from "../../components/Event/Event"
import { events } from '../../data/events'

export default function Recommendation() {
    const event = events[1]

    return (
        <div className="recommendation-wrapper">
            <div className="recommendation">
                <Event 
                    imageUrl={event.imageUrl}
                    date={event.date}
                    location={event.location}
                    address={event.address}
                    time={event.time}
                />
                <div className="recommendation__para-container">
                    <p className="recommendation__para">
                        Based on the survey, we think you would like this {event.activity} event that lululemon is sponsoring!
                    </p>
                    <p className="recommendation__para">
                        Come and connect with the lululemon {event.activity} community. We hope to see you there! 
                    </p>
                </div>
            </div>
        </div>
    )
}