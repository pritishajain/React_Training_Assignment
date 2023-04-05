import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import NavBar from "../common/navBar";
import FilterCategory from "./filter_category";
import FilterSubCategory from "./filter_sub_category";
import FilterSideBar from "./filter_side_bar";
import ProductTile from "../common/product_tile";
import { storeFilteredProducts } from "../../redux/actions/fetch_action";
import { myState } from "../../redux/reducers/fetch_reducer";
import { filterState } from "../../redux/reducers/filter_property_reducer";
import Title from "../common/title/title";
import { IinfoDataType } from "../../interface/data_interface";

const ProductView = (props: { text: string }) => {

  const [show, setShow] = useState<boolean>(true);

  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [showSubCategory, setShowSubCategory] = useState<boolean>(false);

  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");

  const { id } = useParams();
  const { pid } = useParams();

  const dispatch = useDispatch();

  interface State {
    productReducer: myState;
  }

  interface filteredState {
    filterPropertyReducer: filterState;
  }

  const filterProducts = useSelector(
    (state: State) => state.productReducer.filterProducts
  );

  const products = useSelector((state: State) => state.productReducer.products);

  const allProducts = useSelector(
    (state: State) => state.productReducer.allProducts
  );

  var product1: IinfoDataType[] = [];
  var product2: IinfoDataType[] = [];
  var product3: IinfoDataType[] = [];
  var product4: IinfoDataType[] = [];

  
  const categoryArray = useSelector(
    (state: filteredState) => state.filterPropertyReducer.category
  );
  const subCategoryArray = useSelector(
    (state: filteredState) => state.filterPropertyReducer.subCategory
  );
  const brandCategoryArray = useSelector(
    (state: filteredState) => state.filterPropertyReducer.brand
  );
  const maxPriceRange = useSelector(
    (state: filteredState) => state.filterPropertyReducer.maxRange
  );
  const minPriceRange = useSelector(
    (state: filteredState) => state.filterPropertyReducer.minRange
  );

  useEffect(() => {
    if ( id && (pid === "Faucets" || pid === "Sink" || pid === "Tiles" ||  pid === "Shower")) {
      setShow(false);
      setShowCategory(false);
      setShowSubCategory(true);
      setSubCategory(pid);
      setCategory(id);

    } else if (id === "Kitchen" || id === "Bathroom") {
      setShow(false);
      setShowCategory(true);
      setShowSubCategory(false);
      setCategory(id);

    } else {
      setShow(true);
      setShowCategory(false);
      setShowSubCategory(false);
    }
  });

  
  useEffect(() => {
    if ( categoryArray.length > 0 || subCategoryArray.length > 0 || brandCategoryArray.length > 0 || minPriceRange > 0) {
      product1 = filterAccCategory(products);
      product2 = filterAccSubCategory(product1);
      product3 = filterAccBrand(product2);

      if (minPriceRange > 0) {
        product3 = filterAccPrice(product3);
      }

      dispatch(storeFilteredProducts(product3));
      
    } else {
      dispatch(storeFilteredProducts(products));
    }
  }, [ categoryArray, subCategoryArray, brandCategoryArray, maxPriceRange, minPriceRange ]);

 

  const filterAccCategory = (products: IinfoDataType[]) => {
    if (categoryArray.length > 0) {
      categoryArray.map((element) => {
        product1 = [
          ...product1,
          ...products.filter((value) => element === value.productCategory),
        ];
      });
      return product1;
    }
    return products;
  };

  const filterAccSubCategory = (product1: IinfoDataType[]) => {
    if (subCategoryArray.length > 0) {
      subCategoryArray.map((element) => {
        product2 = [
          ...product2,
          ...product1.filter((value) => element === value.productSubCategory),
        ];
      });
      return product2;
    }
    return product1;
  };

  const filterAccBrand = (product2: IinfoDataType[]) => {
    if (brandCategoryArray.length > 0) {
      brandCategoryArray.map((element) => {
        product3 = [
          ...product3,
          ...product2.filter((value) => element === value.brand),
        ];
      });
      return product3;
    }
    return product2;
  };

  const filterAccPrice = (product3: IinfoDataType[]) => {
    product4 = [
      ...product4,
      ...product3.filter(
        (value) =>
          value.productPrice >= minPriceRange &&
          value.productPrice <= maxPriceRange
      ),
    ];

    return product4;
  };


  return (
    <React.Fragment>
       <Title />
      <NavBar /> 
      
      <FilterCategory showCategory={showCategory} category={category} />

      <FilterSubCategory
        showSubCategory={showSubCategory}
        category={category}
        subCategory={subCategory}
      />

      <div className={show ? "display-products" : "hide-products"}>
        <h1>Products</h1>
        <div className="display-type">
          <div className="side">
            <FilterSideBar />
          </div>
          <div className="main-products">
            {props.text === "searchPage" ? (
              <ProductTile list={filterProducts} />
            ) : (
              <ProductTile list={allProducts} />
            )}
           
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductView;