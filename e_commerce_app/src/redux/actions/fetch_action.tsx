import { IinfoDataType } from "../middlewares/fetch_middleware";

export const fetchSomeData = () => {
  return {
    type: "FETCH_PRODUCTS",
  };
};

export const fetchDataSucces = (data: IinfoDataType[]) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  };
};
