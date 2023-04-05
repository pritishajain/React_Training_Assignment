import React from "react";
import { IinfoDataType } from "../../interface/data_interface";

const ProductTile = (props: { list: IinfoDataType[] }) => {
  return (
    <React.Fragment>
   
      <div className="productTile">
        {props.list.map((value, key) => {
          {
            key = value.id;
          }
          return (
            <div className="container">
              <div className="img">
                <img
                  src={value.imageUrl}
                  alt="kfaucets"
                  className="pimage"
                ></img>
                <div className="picons">
                  <i className="icon fa fa-heart-o"></i>
                  <i className="icon fa fa-eye"></i>
                  <i className="icon fa fa-shopping-cart"></i>
                </div>
              </div>
              <div className="pcontent">
                <div className="ptitle">{value.productName}</div>
                <div className="pcategory">
                  {value.productCategory}:{value.productSubCategory}
                </div>
                <div className="pprice">${value.productPrice}</div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ProductTile;
