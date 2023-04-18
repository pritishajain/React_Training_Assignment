import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { act,  render, screen,} from "@testing-library/react";
import { IinfoDataType } from "../../interface/data_interface";
import Products from "../../components/product_page/products";

describe("Product", () => {
  const productInfoData: IinfoDataType[] = [
    {
      id: 40,
      imageUrl: "dkcmdkf",
      productName: "product1",
      productPrice: 200,
      productSubCategory: "kitchen",
      productCategory: "tiles",
      productDescription: "kdcnvksdvcmf",
      brand: "cera",
      qty: 1,
    },
    {
      id: 41,
      imageUrl: "dkcmdkfcdfvc",
      productName: "product2",
      productPrice: 300,
      productSubCategory: "bathroom",
      productCategory: "shower",
      productDescription: "kdcnvksdvcmfvfdv",
      brand: "hindware",
      qty: 1,
    },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          {/* <NavBar/> */}
          <Products />
        </Provider>
      </BrowserRouter>
    );
  });

  test("renders product page", () => {
    const productContainer = screen.getByTitle("products");
    expect(productContainer).toBeInTheDocument();
  });

  test("renders products which are added", () => {
    act(() => {
      store.dispatch({ type: "FETCH_DATA_SUCCESS", payload: productInfoData });
    });

    const showProducts = screen.getAllByTitle("showProducts");

    showProducts.forEach((product) => {
      expect(product).toBeInTheDocument();
    });
  });

  test("renders those products which is added", () => {
    act(() => {
      store.dispatch({ type: "FETCH_DATA_SUCCESS", payload: productInfoData });
    });

    const updatedProductsIList = store.getState().productReducer.allProducts;
    expect(updatedProductsIList.length).toBe(2);
    expect(updatedProductsIList[0].id).toBe(40);
    expect(updatedProductsIList[1].id).toBe(41);
  });
});
