import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Categories from "../product_page/categories";
import { Istate } from "../../interface/product_reducer_interface";
import { searchFilter } from "../../redux/actions/fetch_action";
import {Home, Products, Contact} from "../../assets/constants/constant";
import "../../assets/css/navbar.css";


const NavBar = () => {

  const [isDropDownMenu, setDropDownMenu] = useState<boolean>(false);
  
  const dispatch = useDispatch();

  const allProducts = useSelector((state: Istate) => state.productReducer.allProducts);

  const location=useLocation();

  if (location.pathname === "/login" || location.pathname === "/signUp" || location.pathname === "/cart" || location.pathname ==='/orderconfirmation') {
    return null;
  }
  
  return (
    <React.Fragment>
      <div className="main" title="nav">
        <div className="items">
          <Link to="/" className="nav-items">{Home}</Link>

          <Link
            to="/products"
            className="nav-items"
            data-testid="product"
            onMouseOver={() => setDropDownMenu(true)}
            onMouseLeave={() => setDropDownMenu(false)}
            onClick={() => dispatch(searchFilter(allProducts))}
          >
            {Products}
          </Link>

          <Link to="/contact" title="contact" className="nav-items">{Contact}</Link>
        </div>

        <div className="icons">
          <Link to="/wishlist" title="wishlist">
            <i className="fa fa-heart" ></i>
          </Link>

          <Link to="/cart" title="cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
        {isDropDownMenu && ( <div title="product-dropdown" onMouseOver={() => setDropDownMenu(true)} onMouseLeave={() => setDropDownMenu(false)}>
            <Categories />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default NavBar;
