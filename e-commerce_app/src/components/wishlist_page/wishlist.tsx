import React from "react";
import { useSelector } from "react-redux";
import ProductTile from "../common/product_tile";
import NavBar from "../navbar_section/navBar";
import Title from "../title_section/title";
import EmptyWishlist from "./empty_wishlist";
import { IuserState } from "../../interface/product_reducer_interface";

const Wishlist = () => {
  const userData = useSelector(
    (state: IuserState) => state.userDataReducer.userData
  );

  return (
    <React.Fragment>
      <Title />
      <NavBar />

      {userData.wishList.length > 0 ? (
        <div>
          <h1>My WishList</h1> <ProductTile list={userData.wishList} />
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </React.Fragment>
  );
};

export default Wishlist;
