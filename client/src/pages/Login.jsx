import React, { useState } from "react";
import { userReq } from "../reqMethods";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import "./Login.css";
import {logInn } from "../redux/userRedux";


const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();


  const handleLogin = (e) => {
    e.preventDefault();

    if (Email && Password) {
      const loginUser = {
        email: Email,
        password: Password,
      };

      userReq
        .post("user/login", loginUser)
        .then(async (res) => {
          dispatch(logInn(res.data));
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong.", {
            duration: 1700,
          });
        });
    }
    else{
      toast.error("Something went wrong.", {
        duration: 1700,
      });
    }
  };

  return (
    <div className="Container">
      <div className="TitleContainer">
        <h1 className="Title">Peaza</h1>
        <h1 className="tagline">Barge the menu and satisfy your cravings!</h1>
      </div>
      <div className="formContainer">
        <form className="formm" action="" method="" name="loginForm" onSubmit={handleLogin} >
          <h1 className="loginN">Login</h1>
          <input
            placeholder="Email"
            className="field"
            type=""
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="field"
            type="password"
            name="password"
            id=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="buttlog" type="submit" >
            Go!
          </button>

          <Toaster />

          <a href="https://longdogechallenge.com/" className="links">
            Forgot Password?
          </a>
          <a href="https://longdogechallenge.com/" className="links">
            Not a member yet? Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
