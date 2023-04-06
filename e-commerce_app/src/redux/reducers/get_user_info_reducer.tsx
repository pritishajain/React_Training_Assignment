import { IuserInfo } from "../../interface/user_data_interface";

export interface userAction {
  type: string;
  payload: IuserInfo[];
}

export interface userState {
 userData:IuserInfo[]
}

const initialState: userState = {
 userData:[]
};

const userDataReducer = (state: userState = initialState, action: userAction) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return {
        ...state,
        userData:action.payload
      };
    default: {
      return state;
    }
  }
};

export default userDataReducer;
