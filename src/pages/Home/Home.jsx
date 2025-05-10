import './Home.scss'
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
    return (
        <div className="home">
            <div className="home__feature-dropdown">
                <h3 className="home__feature-dropdown-heading">
                    lululemon
                </h3>
                <IoIosArrowDown />
            </div>
            <div className="home__feature-running">
                <div className="home__feature-running-content">
                    <h2 className="home__feature-running-heading">BlacklistLA Run Crew</h2>
                    <button className="home__feature-running-link">SHOP WHAT'S NEW</button>
                </div>
            </div>
        </div>
    )
}