import React,{ useState, useRef, useEffect } from "react";
import  {useNavigate}  from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import Menu from "./menu";
import { myState } from "../../../redux/reducers/fetch_reducer";
import { searchFilter } from "../../../redux/actions/fetch_action";
import { Profile } from "../../../assets/constants/constant";
import "../../../assets/css/title.css";
import logo from "../../../assets/images/logo.png";
import shopName from "../../../assets/images/shopName.png";

const Title = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<string>("");
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setIsLoggedIn(true);
      } else {
        setUserName(null);
        setIsLoggedIn(false);
      }
    });
  }, []);

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if ( isDropDownMenu && dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDropDownMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isDropDownMenu]);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
    });
  };

  const dropDownMenu = () => {
    setDropDownMenu(!isDropDownMenu)
  };

  interface State {
    productReducer: myState;
  }

  const products = useSelector((state: State) => state.productReducer.products);

  const filteredProducts = products.filter((product) => {
    if (
      product.productName.toLowerCase().includes(searchResult) ||
      product.productCategory.toLowerCase().includes(searchResult) ||
      product.productSubCategory.toLowerCase().includes(searchResult)
    ) {
      return products;
    }
  });

  const showList = () => {
    navigate(`/search/${searchResult}`)
    dispatch(searchFilter(filteredProducts));
  };

  return (
    <React.Fragment>
      <div className="head" ref={dropDownRef}>
        <div className="logo-home">
          <div className="img">
            <img src={logo} alt="logo" height="60px"></img>
          </div>

          <div className="text">
            <img src={shopName} alt="Shop Name" height="60px"></img>
          </div>
        </div>

        <div className="search">
          <input
            type="search"
            placeholder="Search.."
            value={searchResult}
            onChange={(e) => {
              setSearchResult(e.target.value.toLowerCase());
              
            }}
          ></input>   
            <i className="fa fa-paper-plane" aria-hidden="true" onClick={showList}></i>
          
        </div>

        <div className="profile">
          <i className="fa fa-user" aria-hidden="true"></i>
          <div className="user" onClick={dropDownMenu}>
            {isLoggedIn && userName}
            {!isLoggedIn && Profile}
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
        {isDropDownMenu && (
          <Menu isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Title;
