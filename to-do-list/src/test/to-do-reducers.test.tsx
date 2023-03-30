import itemReducer from "../redux/reducers/to-do-reducers";

test("should return the initial state when passed an empty action", () => {
  const initialState = undefined;
  const action = {
    type: "",
    payload: {
      id: "",
      title: "",
    },
  };
  const result = itemReducer(initialState, action);
  expect(result).toEqual({ active: [], complete: [], recycleBin: [] });
});
