import './Product.scss'
import { IoIosAdd } from "react-icons/io";

export default function Product({name, price, imageUrl, imageAlt, colors }) {
    return (
        <div className="product">
            <img className="product__image" src={imageUrl} alt={imageAlt} />
            <div className="product__color-options">   
                {colors.map(color => 
                    <span className="product__color" style={{ backgroundColor: color }}></span>
                )}
                <span className="product__color">
                    <IoIosAdd className="product__add-icon" />
                </span>
            </div>
            <div className="product__text">
                <p className="product__description">{name}</p>
                <p className="product__description product__description--price">${price}</p>
            </div>
        </div>
    )
}