import { Middleware } from "redux";
import { getDocs } from "firebase/firestore";
import { productCollection } from "../../firebase";
import { fetchDataSuccess } from "../actions/fetch_action";
import store from "../store";
import { IinfoDataType } from "../../interface/data_interface";

export const firestoreMiddleware: Middleware =
  () => (next) => async (action) => {
    if (action.type === "FETCH_PRODUCTS") {
      try {
        const querySnapshot = await getDocs(productCollection);
        const products = querySnapshot.docs.map(
          (doc) => doc.data() as IinfoDataType
        );

        store.dispatch(fetchDataSuccess(products));
      } catch (error) {
        
      }
    }

    return next(action);
  };
