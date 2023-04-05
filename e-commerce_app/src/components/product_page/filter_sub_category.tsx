import React from "react";
import { useSelector } from "react-redux";
import ProductTile from "../common/product_tile";
import FilterSideBar from "./filter_side_bar";
import { myState } from "../../redux/reducers/fetch_reducer";
import "../../assets/css/filter_category.css";

const FilterSubCategory = (props: {
  showSubCategory: boolean;
  category: string;
  subCategory: string;
}) => {
  
  interface State {
    productReducer: myState;
  }

  const product = useSelector((state: State) => state.productReducer.products);

  var filterList = product.filter(
    (element) =>
      element.productCategory === props.category &&
      element.productSubCategory === props.subCategory
  );

  return (
    <React.Fragment>
      <div className={ props.showSubCategory ? "displayk-products" : "hidek-products"}>
        <h1>{props.category}:{props.subCategory}</h1>
        <div className="display-type">
          <div className="side">
            <FilterSideBar />
          </div>
          <div className="main-products">
          <ProductTile list={filterList} />
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default FilterSubCategory;
