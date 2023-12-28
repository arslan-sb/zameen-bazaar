import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
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
          <p>(100)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs{product.old_price}</div>
          <div className="productdisplay-right-price-new">Rs{product.new_price}</div>
        </div>
        <div className="productdisplay-right-discription">
          {product.discription}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select</h1>
          <div className="productdisplay-right-sizes">
            <div>1 kg</div>
            <div>2 kg</div>
            <div>3 kg</div>
            <div>4 kg</div>
            <div>5 kg</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category: </span>{product.category}, Fresh, Fruit</p>
        <p className="productdisplay-right-category"><span>Tags:</span> Fresh, Imported, High Quality</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
