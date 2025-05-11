import './Home.scss'
import { IoIosArrowDown } from "react-icons/io";
import Product from '../../components/Product/Product';

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
            <div className="home__feature-summer">
                <h1 className="home__feature-summer-heading">Next to your run crew: summer gear.</h1>
                <div className="home__product-display">
                    <Product 
                        name="Swiftly Tech Short-Sleeve Shirt 2.0 Waist Length"
                        price="68"
                        imageUrl={'/src/assets/lululemon-short-sleeve.png'} 
                        imageAlt="Female wearing a short sleeve top." 
                    />
                </div>
            </div>
        </div>
    )
}