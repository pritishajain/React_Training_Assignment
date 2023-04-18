import React from "react";
import { useSelector } from "react-redux";
import ProductTile from "../common/product_tile";
import EmptyWishlist from "./empty_wishlist";
import { IuserState } from "../../interface/product_reducer_interface";
import NotLoginWishList from "./not_login_wishlist";

const Wishlist = () => {
  const userData = useSelector(
    (state: IuserState) => state.userDataReducer.userData
  );

  const isLogIn = useSelector(
    (state: IuserState) => state.userDataReducer.isLogIn
  );

  return (
    <React.Fragment>
      {!isLogIn ? <NotLoginWishList/> : ( userData.wishList.length > 0 ? (
        <div title="wishlistPage">
          <h1>My WishList</h1> <ProductTile list={userData.wishList} />
        </div>
      ) : (
        <EmptyWishlist />
      ))}
    </React.Fragment>
  );
};

export default Wishlist;
