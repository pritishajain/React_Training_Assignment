import { IinfoDataType } from "../../interface/data_interface";

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