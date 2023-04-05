import React from "react";
import { useSelector } from "react-redux";
import { myState } from "../../redux/reducers/fetch_reducer";
import ProductView from "./product_view";
import "../../assets/css/product.css";

const Products = () => {

  interface State {
    productReducer: myState;
  }
 
  const searchPage = useSelector(
    (state: State) => state.productReducer.isSearching
  );
 
  return (
    <React.Fragment>
   
       { searchPage ? (
        <ProductView text="searchPage" />
      ) : (
        <ProductView text="products" />
      )} 
    </React.Fragment>
  );
};

export default Products;
