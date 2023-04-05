import React , { useState, useEffect, useRef }from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Categories from "../product_page/categories";
import { myState } from "../../redux/reducers/fetch_reducer";
import { searchFilter } from "../../redux/actions/fetch_action";
import "../../assets/css/navbar.css";

const NavBar = () => {
  
  const [isDropDownMenu, setDropDownMenu] = useState<boolean>(false);

  const dropDownMenu = () => {
    if (isDropDownMenu) {
      setDropDownMenu(false);
    } else {
      setDropDownMenu(true);
    }
  };

  const dropDownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfHoveredOutside = (e:any) => {
      if (isDropDownMenu && dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDropDownMenu(false);
      }
    }
    document.addEventListener("mouseover", checkIfHoveredOutside)
    return () => {
      document.removeEventListener("mouseleave", checkIfHoveredOutside)
    }
  }, [isDropDownMenu])

  const dispatch=useDispatch();
  interface State {
    productReducer: myState;
  }
 
  const allProducts = useSelector(
    (state: State) => state.productReducer.allProducts
  );

  return (
    <React.Fragment>
      <div className="main"   ref={dropDownRef}>
        <div className="items">
          <Link to="/" className="nav-items">
            Home
          </Link>
          <Link to="/products" className="nav-items" onMouseOver={dropDownMenu} onClick={()=>dispatch(searchFilter(allProducts))}>
            Products
          </Link>
          <Link to="/contact" className="nav-items">
            Contact
          </Link>
        </div>

        <div className="icons">
        <Link to="/wishlist" ><i className="fa fa-heart" ></i></Link> 
        <Link to="/cart" ><i className="fa fa-shopping-cart"></i></Link>
        </div>
        {isDropDownMenu && <Categories />}
      </div>
    </React.Fragment>
  );
};
export default NavBar;
