import { IinfoDataType } from "../../interface/data_interface";

export interface myAction {
  type: string;
  payload: IinfoDataType[];
 
}

export interface myState {
  products: IinfoDataType[];
  filterProducts: IinfoDataType[];
  allProducts: IinfoDataType[];
  isSearching:boolean;
  isLoading: boolean;
}

const initialState: myState = {
  products: [],
  filterProducts: [],
  allProducts:[],
  isSearching:false,
  isLoading: true,
};

const productReducer = (state: myState = initialState, action: myAction) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        products: action.payload,
        filterProducts: action.payload,
        allProducts :action.payload,
        isLoading: false,
      };
    case "STORE_FILTERED_PRODUCTS":
      return {
        ...state,
        filterProducts: action.payload,
        
      };
    case "SERACH_FILTER":
      return {
        ...state,
        products:action.payload,
        filterProducts: action.payload,
        isSearching:true  
      };
     
    default: {
      return state;
    }
  }
};

export default productReducer;
