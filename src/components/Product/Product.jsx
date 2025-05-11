import './Product.scss'

export default function Product({name, price, imageUrl, imageAlt }) {
    return (
        <div className="product">
            <div className="product__item">
                <img className="product__image" src={imageUrl} alt={imageAlt} />
                <div className="product__color-options">   
                    <span className="product__color"></span>
                    <span className="product__color"></span>
                    <span className="product__color"></span>
                    <span className="product__color"></span>
                    <span className="product__color"></span>
                    <span className="product__color"></span>
                </div>
                <p className="product__description">{name}</p>
                <p className="product__description product__description--price">${price}</p>
            </div>
        </div>
    )
}