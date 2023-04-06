import React from "react";
import { useSelector } from "react-redux";
import { Istate } from "../../interface/product_reducer_interface";
import ProductTile from "../common/product_tile";
import FilterSideBar from "./filter_side_bar";
import { IinfoDataType } from "../../interface/data_interface";
import "../../assets/css/filter_category.css";

interface filterProps{
  showCategory: boolean; 
  category: string | null;
}
const FilterCategory = (props: filterProps) => {
  
  const product = useSelector((state: Istate) => state.productReducer.products);

  var filterList = product.filter(
    (element:IinfoDataType) => element.productCategory === props.category
  );

  return (
    <React.Fragment>
      <div className={props.showCategory ? "displayk-products" : "hidek-products"}>
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
