import { Provider } from "react-redux";
import store from "../../redux/store";
import Title from "../../components/title_section/title";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { IuserInfo } from "../../interface/user_data_interface";


describe("Title", () => {

    const userInfoData:IuserInfo={
        email: "pritishajain05@gmail.com",
        fullName: "Pritisha Jain",
        cart: [],
        wishList:[],
        orderHistory:[]
    }

    const loggedIn:boolean=true

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Title />
        </Provider>
      </BrowserRouter>
    );
  });

  test("renders correctly", () => {
    const titleContainer = screen.getByTitle("titleHead");
    expect(titleContainer).toBeInTheDocument();
  });

  test("display user's name when logged in", () => {
    act(()=>{
        store.dispatch({type:'IS_LOGGED_IN',logIn:loggedIn});
        store.dispatch({type:'GET_USER_INFO',payload:userInfoData});
    })
    const userNameElement=screen.getByText("Pritisha Jain");
    expect(userNameElement).toBeInTheDocument();
  });

  test("dropdown visible on hover",()=>{
    const profile = screen.getByTitle('hover')
    fireEvent.mouseOver(profile);
  
    expect(screen.getByTitle('dropdown')).toBeInTheDocument();
  })


});
