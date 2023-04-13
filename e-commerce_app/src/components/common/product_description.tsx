import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IinfoDataType } from "../../interface/data_interface";
import { AddToCart, AddToWishList,  Wishlisted, AddedToCart} from "../../assets/constants/constant";
import "../../assets/css/product_description.css";
import { collection, doc, getDocs, query, updateDoc,where } from "firebase/firestore";
import { db } from "../../firebase";
import { addToCart, addToWishList, removeFromWishList } from "../../redux/actions/fetch_action";
import { IuserState } from "../../interface/product_reducer_interface";
import 'react-toastify/dist/ReactToastify.css';


interface IproductProps {
  closePopUp: (popUp: boolean) => void;
  itemData: IinfoDataType;
}

const ProductDescription = (props: IproductProps) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector(
    (state: IuserState) => state.userDataReducer.userData
  );

  const isLogIn = useSelector(
    (state: IuserState) => state.userDataReducer.isLogIn
  );

  const isInWishList = (id: number) => {
    return userData.wishList.some((product) => product.id === id);
  };

  const addWishList = async (value: IinfoDataType) => {
    if (!isLogIn) {
      navigate("/login");
    }

    const querySnapshot = await getDocs(
      query(
        collection(db, "UserInformation"),
        where("email", "==", userData.email)
      )
    );
    const docRef = doc(
      collection(db, "UserInformation"),
      querySnapshot.docs[0].id
    );

    if (isInWishList(value.id)) {
      toast.info("Removed From Wishlist")
      const updatedWishlist = userData.wishList.filter(
        (product:IinfoDataType) => product.id !== value.id
      );
      updateDoc(docRef, {
        wishList: updatedWishlist,
      });
      
      dispatch(removeFromWishList(value.id));
    } 
    else {
      toast.success("Successfully added to wishlist")
      updateDoc(docRef, {
        wishList: [...userData.wishList, value],
      });

      dispatch(addToWishList(value));
    }
  };

  const isInCart = (id: number) => {
    return userData.cart.some((product) => product.id === id);
  };

  const addCart = async (value: IinfoDataType) => {
    if (!isLogIn) {
      navigate("/login");
    }

    const querySnapshot = await getDocs(
      query(
        collection(db, "UserInformation"),
        where("email", "==", userData.email)
      )
    );

    const docRef = doc(
      collection(db, "UserInformation"),
      querySnapshot.docs[0].id
    );

    if (isInCart(value.id)) {
      toast.error("Already added in cart")
    } 
    else {
      toast.success("Successfully added to cart")
      updateDoc(docRef, {
        cart: [...userData.cart, value],
      });

      dispatch(addToCart(value));
    }
  };

  return (
    <React.Fragment>
      <div className="pop-container">
        <div className="pop-content">
          <div className="btn-close">
            <i
              className="fa fa-window-close"
              aria-hidden="true"
              onClick={() => props.closePopUp(false)}
            ></i>
          </div>
          <div className="pop-body">
            <div className="pop-image">
              <img src={props.itemData.imageUrl} alt="kfaucets"></img>
            </div>

            <div className="pop-description">
              <div className="pop-name" id="name">
                {props.itemData.productName}
              </div>

              <div className="pop-name" id="price">
                <i className="fa fa-rupee"></i>
                {props.itemData.productPrice}
              </div>

              <div className="pop-name" id="category">
                {props.itemData.productCategory}:
                {props.itemData.productSubCategory}
              </div>

              <div className="pop-name" id="description">
                {props.itemData.productDescription}
              </div>

              <div className="pop-name">
                <button
                  className="pop-btn"
                  onClick={() => addCart(props.itemData)}
                >
                  {isInCart(props.itemData.id) ? (<span>{AddedToCart}</span>) : (<span>{AddToCart}</span>)}
                </button>

                <button
                  className="pop-btn"
                  onClick={() => addWishList(props.itemData)}
                >
                  {isInWishList(props.itemData.id) ? (<span>{Wishlisted}</span>) : (<span>{AddToWishList}</span>)}
                  <i className={`fa ${isInWishList(props.itemData.id)? "fa-heart": "fa-heart-o"}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDescription;
