import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Container">
        

      <div className="TitleContainer">
        <h1 className="Title">Peaza</h1>
        <h1 className="tagline">Barge the menu and satisfy your cravings!</h1>
      </div>


      <div className="formContainer">
          <form className="formm" action="" method="post" name="loginForm">
            <h1 className="loginN">Login</h1>
            <input
              placeholder="Email"
              className="field"
              type="email"
              name="email"
            />
            <input
              placeholder="Password"
              className="field"
              type="password"
              name="password"
              id=""
            />
            <button className="buttlog" type="submit">Go!</button>
            <a href="https://longdogechallenge.com/" className="links">Forgot Password?</a>
            <a href="https://longdogechallenge.com/" className="links">Not a member yet? Register</a>
          </form>
      </div>



    </div>
  );
};

export default Login;
