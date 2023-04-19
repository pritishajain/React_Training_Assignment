import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { IuserState } from "../../interface/product_reducer_interface";
import { IinfoDataType } from "../../interface/data_interface";
import "../../assets/css/order_history.css";
import { addToCart } from "../../redux/actions/fetch_action";
import { toast } from "react-toastify";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase";
import { MyOrders, BuyAgain, Delivered } from "../../assets/constants/constant";

const OrderHistory = () => {

    const dispatch = useDispatch();
    const userData = useSelector(
        (state: IuserState) => state.userDataReducer.userData
      );
      const handleClick=async (data:IinfoDataType)=>{

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
      
          updateDoc(docRef, {
            cart: [...userData.cart,data],
          });
        toast.success("Product Added To Cart");
        dispatch(addToCart(data))
      }

      const displayOrdersTile=(data:IinfoDataType)=>{
        return(
           
            <div className="order-title">
                <div className="oh-top"> <i className="fa fa-check-circle"></i>{Delivered}</div>
                <div className="oh-middle">
                    <div className="oh-image"><img src={data.imageUrl} alt={data.productName}></img></div>
                    <div className="oh-data">
                        <p>{data.productName}</p>
                        <p>{data.productCategory}:{data.productSubCategory}</p>
                        </div>
                </div>
                <div className="oh-end">
                    <button onClick={()=>handleClick(data)} >{BuyAgain}</button>
                </div>
            </div>
        )
      }
      
  return (
    <React.Fragment>
        <div className="oh-container">
            <div className="oh-content">
                <h1>{MyOrders}</h1>
                {userData.orderHistory.map((element:IinfoDataType,key:Number)=>
                  {  key=element.id
                    return displayOrdersTile(element);
                  }
                )}

            </div>
        </div>

    </React.Fragment>
  )
};

export default OrderHistory;
