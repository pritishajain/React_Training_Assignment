import React from "react";
import { useSelector } from "react-redux";
import { myState } from "../../redux/reducers/fetch_reducer";
import ProductTile from "../common/product_tile";
import FilterSideBar from "./filter_side_bar";
import "../../assets/css/filter_category.css";

const FilterCategory = (props: { showCategory: boolean; category: string | null; }) => {
  
  interface State {
    productReducer: myState;
  }

  const product = useSelector((state: State) => state.productReducer.products);

  var filterList = product.filter(
    (element) => element.productCategory === props.category
  );

  return (
    <React.Fragment>
      <div
        className={props.showCategory ? "displayk-products" : "hidek-products"}
      >
        <h1>{props.category}</h1>

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

export default FilterCategory;
