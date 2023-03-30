import { IinfoDataType } from "../middlewares/fetch_middleware";

export interface myAction {
  type: string;
  payload: IinfoDataType[];
}

export interface myState {
  products: IinfoDataType[];
  isLoading: boolean;
}

const initialState: myState = {
  products: [],
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
        isLoading: false,
      };

    default: {
      return state;
    }
  }
};

export default productReducer;
