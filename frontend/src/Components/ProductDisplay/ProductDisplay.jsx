import React, { useContext,useState,useEffect } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;
    
    const { addToCart,  setCartItems } = useContext(ShopContext);
    const [mainImage, setMainImage] = useState(product.image);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1); // Initialize quantity to 1

    const changeMainImage = (newImage,index) => {
        setMainImage(newImage);
        setSelectedImageIndex(index);
    };
    useEffect(() => {
        // Reset quantity to 1 whenever product changes
        setQuantity(1);
    }, [product.id]);
    const handleAddToCart = () => {
        addToCart(product.id, quantity); // Thêm sản phẩm vào giỏ hàng với số lượng được chọn
        setQuantity(1); 
    }

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
        setCartItems(prev => ({ ...prev, [product.id]: newQuantity }));
    }

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
            <img src={product.image} alt="" onClick={() => changeMainImage(product.image,0)}className={selectedImageIndex === 3 ? 'selected' : ''} />
                    <img src={product.image1} alt="" onClick={() => changeMainImage(product.image1,1)}className={selectedImageIndex === 1 ? 'selected' : ''} />
                    <img src={product.image2} alt="" onClick={() => changeMainImage(product.image2,2)}className={selectedImageIndex === 2 ? 'selected' : ''} />
                    <img src={product.image3} alt="" onClick={() => changeMainImage(product.image3,3)}className={selectedImageIndex === 3 ? 'selected' : ''} />
            </div>
            <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={mainImage} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
                
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            <h1>{product.describe}</h1>
                
                
            </div>
            <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" value={quantity} min="1" onChange={handleQuantityChange} />
                </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>{product.tags}</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>

    </div>
  )
}
export default ProductDisplay