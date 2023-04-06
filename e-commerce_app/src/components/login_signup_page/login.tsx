import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { IloginValue } from "../../interface/login_interface";
import { MssLogo, WelcomeBack, NotRegistered, SignUp, ErrorFields, SignIn } from "../../assets/constants/constant";
import "../../assets/css/signup.css";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.jpg";
import { IuserInfo } from "../../interface/user_data_interface";
import { getUserInfo } from "../../redux/actions/fetch_action";



const Login = () => {
  const state: IloginValue = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState<IloginValue>(state);
  const [errorMsg, setErrorMsg] = useState<string>("");
 
  const handleInputChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    let { name, value } = e.target;
    setInput({...input,[name]:value});
  }

  const handleSubmission = () => {
    if (!input.email || !input.password) {
      setErrorMsg(ErrorFields);
      return;
    }
    setErrorMsg("");

     signInWithEmailAndPassword(auth, input.email, input.password)
      .then(async() =>{
        navigate("/");
      
      })
      .catch((e) => {
        if(e.code === 'auth/user-not-found')
        {
          setErrorMsg(()=>("User not found !"));
        }
        else if(e.code === 'auth/wrong-password')
        {
          setErrorMsg(()=>("Wrong password !"));
        }
      }) 
  };

  return (
    <React.Fragment>
      <main>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="logo">
                  <img src={logo} alt="logo"></img>
                  <h1>{MssLogo}</h1>
                </div>

                <div className="heading">
                  <h3>{WelcomeBack}</h3>
                  <h6>
                    {NotRegistered}
                    <Link to="/signup" className="toggle">
                      {SignUp}
                    </Link>
                  </h6>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      name="email"
                      className="input-field"
                      autoComplete="off"
                      placeholder="Email"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      name="password"
                      className="input-field"
                      autoComplete="off"
                      placeholder="Password"
                      onChange={handleInputChange}
                    />
                  </div>


                  <p className="error">{errorMsg}</p>
                  <input
                    type="submit"
                    value="Sign In"
                    className="sign-btn"
                    onClick={handleSubmission}
                  />
                </div>
              </form>
            </div>

            <div className="image">
              <img src={profile} alt="profile" className="img-show-1" />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Login;
