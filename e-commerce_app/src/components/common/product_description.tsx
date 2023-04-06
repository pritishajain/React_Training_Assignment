import React from "react";
import { IinfoDataType } from "../../interface/data_interface";
import { Qty, AddToCart, AddToWishList, OrderNow } from "../../assets/constants/constant";
import "../../assets/css/product_description.css";

interface myProps{
    closePopUp:(popUp:boolean)=>void,
    itemData:IinfoDataType
}
const ProductDescription = (props:myProps) => {
  return (
    <React.Fragment>
      <div className="pop-container">
        <div className="pop-content">
          <div className="btn-close">
            <i className="fa fa-window-close" aria-hidden="true" onClick={()=>props.closePopUp(false)}></i>
          </div>
          <div className="pop-body">
            <div className="pop-image">
              <img src={props.itemData.imageUrl} alt="kfaucets"></img>
            </div>
            <div className="pop-description">
              <div className="pop-name" id="name">{props.itemData.productName}</div>
              <div className="pop-name" id="price">${props.itemData.productPrice}</div>
              <div className="pop-name" id="category">
                {props.itemData.productCategory}:{props.itemData.productSubCategory}
              </div>
              <div className="pop-name" id="description">{props.itemData.productDescription}</div>
              <div className="pop-name">
                <label className="pop-qty" >{Qty}</label>
                <input type="number" name="qty" className="qty"></input>
              </div>
              <div className="pop-name">
                <button className="pop-btn">{AddToCart}</button>
                <button className="pop-btn">{AddToWishList}</button>
              </div>
              <div className="pop-name">
                <button className="pop-btn" id="order-btn">{OrderNow}</button>
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDescription;
