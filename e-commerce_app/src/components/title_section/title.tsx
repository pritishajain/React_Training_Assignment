import React,{ useState, useEffect } from "react";
import  {useNavigate}  from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import Menu from "./menu";
import { Istate } from "../../interface/product_reducer_interface";
import { emptyData, getUserInfo, isLoggedIn, searchFilter } from "../../redux/actions/fetch_action";
import { Profile } from "../../assets/constants/constant";
import "../../assets/css/title.css";
import logo from "../../assets/images/logo.png";
import shopName from "../../assets/images/shopName.png";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase";
import { IuserInfo } from "../../interface/user_data_interface";
import { userState } from "../../redux/reducers/get_user_info_reducer";
import { IinfoDataType } from "../../interface/data_interface";

interface IloginState {
  userDataReducer: userState;
}
const Title = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<string>("");
  const [userName, setUserName] = useState<string | null>(null);

  const isLogIn = useSelector(
    (state: IloginState) => state.userDataReducer.isLogIn
  );

  const allProducts = useSelector((state: Istate) => state.productReducer.allProducts);
 
  useEffect(() => {
    auth.onAuthStateChanged(async(user) => {
      if (user) {
        setUserName(user.displayName);
        dispatch(isLoggedIn(true));

        const q = query(collection(db,"UserInformation"), where("email","==",user.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data=doc.data() as IuserInfo
          dispatch(getUserInfo(data))
        }); 
      } else {
        setUserName(null);
        dispatch(isLoggedIn(false));
        dispatch(emptyData());
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(isLoggedIn(false));
      dispatch(emptyData());
    });
  };


  const filteredProducts = allProducts.filter((product:IinfoDataType) => {
    if (
      product.productName.toLowerCase().includes(searchResult) ||
      product.productCategory.toLowerCase().includes(searchResult) ||
      product.productSubCategory.toLowerCase().includes(searchResult)
    ) {
      return allProducts;
    }
  });

  const showList = () => {
    navigate(`/search/${searchResult}`)
    dispatch(searchFilter(filteredProducts));
  };

  return (
    <React.Fragment>
      <div className="head">
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
          <i className="fa fa-paper-plane"
            aria-hidden="true"
            onClick={showList}
          ></i>
        </div>

        <div className="profile">
          <i className="fa fa-user" aria-hidden="true"></i>
          <div
            className="user"
            onMouseOver={() => setDropDownMenu(true)}
            onMouseLeave={() => setDropDownMenu(false)}
          >
            {isLogIn && userName}
            {!isLogIn && Profile}
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
        {isDropDownMenu && (
          <div
            onMouseOver={() => setDropDownMenu(true)}
            onMouseLeave={() => setDropDownMenu(false)}
          >
            <Menu isLoggedIn={isLogIn} handleLogOut={handleLogOut} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Title;