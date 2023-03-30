import { render, screen } from "@testing-library/react";
import TodoDisplay from "../components/to-do-display";
import { Provider } from "react-redux";
import store from "../redux/store";

test("should have a empty value in input field initially", () => {
   render(
    <Provider store={store}>
      <TodoDisplay />
    </Provider>
  );  
  const data=""
  const inputData = screen.getByPlaceholderText("Add a Item");
  expect(inputData).toEqual(data);
});
