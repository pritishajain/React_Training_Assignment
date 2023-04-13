import { IinfoDataType } from "../../interface/data_interface";
import { IuserInfo } from "../../interface/user_data_interface";

export const fetchSomeData = () => {
  return {
    type: "FETCH_PRODUCTS",
  };
};

export const fetchDataSuccess = (data: IinfoDataType[]) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  };
};

export const searchFilter =(data: IinfoDataType[]) =>{
  return{
    type:"SERACH_FILTER",
    payload:data,
    
  }
}

export const addCategory=(filterName:string)=>{
  return{
    type:"ADD_CATEGORY",
    payload:filterName,
  }
}

export const addSubCategory=(filterName:string)=>{
  return{
    type:"ADD_SUB_CATEGORY",
    payload:filterName,
  }
}

export const addBrandCategory=(filterName:string)=>{
  return{
    type:"ADD_BRAND_CATEGORY",
    payload:filterName,
  }
}

export const removeCategory=(filterName:string)=>{
  return{
    type:"REMOVE_CATEGORY",
    payload:filterName,
  }
}

export const removeSubCategory=(filterName:string)=>{
  return{
    type:"REMOVE_SUB_CATEGORY",
    payload:filterName,
  }
}

export const removeBrandCategory=(filterName:string)=>{
  return{
    type:"REMOVE_BRAND_CATEGORY",
    payload:filterName,
  }
}

export const removeFilterProperty=(filterName:string)=>{
  return{
    type:"REMOVE_FILTER_PROPERTY",
    payload:filterName,
  }
}
 
export const storeFilteredProducts=(filteredList:IinfoDataType[])=>{
  return{
    type:"STORE_FILTERED_PRODUCTS",
    payload:filteredList,
  }
}

export const priceFilter=(min:number,max:number)=>{
  return{
    type:"PRICE_FILTER",
    min:min,
    max:max
  }
}

export const priceFilterProducts=(priceData:IinfoDataType[])=>{
  return{
    type:"PRICE_FILTER_PRODUCTS",
    payload:priceData
  }
}

export const getUserInfo=(userData:IuserInfo)=>{
  return{
    type:"GET_USER_INFO",
    payload:userData
  }
}

export const addToWishList=(productData:IinfoDataType)=>{
  return{
    type:"ADD_TO_WISH_LIST",
    productData:productData
  }
}

export const removeFromWishList=(id:number)=>{
  return{
    type:"REMOVE_FROM_WISH_LIST",
    id:id
  }
}

export const addToCart=(productData:IinfoDataType)=>{
  return{
    type:"ADD_TO_CART",
    productData:productData
  }
}

export const removeFromCart=(id:number)=>{
  return{
    type:"REMOVE_FROM_CART",
    id:id
  }
}

export const removeAddToWishList=(data:IinfoDataType)=>{
  return{
    type:"REMOVE_AND_ADD_TO_WISHLIST",
    productData:data
  }
}

export const isLoggedIn=(logIn:boolean)=>{
  return{
    type:"IS_LOGGED_IN",
    logIn:logIn
  }
}

export const emptyData=()=>{
  return{
    type:"EMPTY_DATA"
  }
}

export const updateQuantity=(updatedCart:IinfoDataType[])=>{
  return{
    type:"UPDATE_QUANTITY",
    updatedData:updatedCart
  }
}

export const emptyCart=()=>{
  return{
    type:"EMPTY_CART"
  }
}
