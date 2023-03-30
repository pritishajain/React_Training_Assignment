import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSomeData } from "../redux/actions/fetch_action";
import { myState } from "../redux/reducers/fetch_reducer";
import "../assets/css/product.css";
import Title from "./title";
import NavBar from "./navBar";

interface State {
  productReducer: myState;
}

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSomeData());
  }, []);
  
  const product = useSelector((state: State) => state.productReducer.products);

  return (
    <React.Fragment>
      <Title />
      <NavBar />
      <h1>Products</h1>
      <div className="productTile">
        {product.map((value, key) => {
          {
            key = value.id;
          }
          return (
            <div className="container">
              <div className="img">
                <img
                  src={value.imageUrl}
                  alt="kfaucets"
                  width="100%"
                  height="300px"
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

export default Products;
