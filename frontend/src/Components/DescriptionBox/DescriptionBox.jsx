import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = (props) => {
  const { product } = props;
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          {product.discription}
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices and any available variations
          (e.g, sizes, colors). Each product usually has it's own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;