import React, { useState } from "react";
import ProductDescription from "./product_description";
import { IinfoDataType } from "../../interface/data_interface";

const dataInfo={
     id: 0,
    imageUrl: "",
    productName: "",
    productPrice: 0,
    productSubCategory: "",
    productCategory: "",
    productDescription: "",
    brand: "",
}

const ProductTile = (props: { list: IinfoDataType[] }) => {

  const [popUp, setPopUp] = useState<boolean>(false);
  const [itemData, setItemData] = useState<IinfoDataType>(dataInfo);

  const displayProductTile=(value:IinfoDataType)=>{
    return(
    <div className="container">
    <div className="img">
      <img
        src={value.imageUrl}
        alt="kfaucets"
        className="pimage"
      ></img>
      <div className="picons">
        <i className="icon fa fa-heart-o"></i>
        <i
          className="icon fa fa-eye"
          onClick={() => {
            setItemData(value);
            setPopUp(true);
          }}
        ></i>

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
}

  return (
    <React.Fragment>
      <div className="productTile">
        {props.list.map((value:IinfoDataType, key:number) => {
          {
            key = value.id;
          }
          return (
           displayProductTile(value)
          )})}
      
        {popUp && ( <ProductDescription closePopUp={setPopUp} itemData={itemData} />)}

      </div>
    </React.Fragment>
  );
};

export default ProductTile;
