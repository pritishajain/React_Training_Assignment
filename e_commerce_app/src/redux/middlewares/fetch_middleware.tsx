import { Middleware } from "redux";
import { getDocs } from "firebase/firestore";
import { productCollection } from "../../firebase";
import { fetchDataSucces } from "../actions/fetch_action";
import store from "../store";

export interface IinfoDataType {
  id: number;
  imageUrl: string;
  productName: string;
  productPrice: number;
  productSubCategory: string;
  productCategory: string;
}

export const firestoreMiddleware: Middleware =
  () => (next) => async (action) => {
    if (action.type === "FETCH_PRODUCTS") {
      try {
        const querySnapshot = await getDocs(productCollection);
        const products = querySnapshot.docs.map(
          (doc) => doc.data() as IinfoDataType
        );

        store.dispatch(fetchDataSucces(products));
      } catch (error) {
        console.error(error);
      }
    }

    return next(action);
  };
