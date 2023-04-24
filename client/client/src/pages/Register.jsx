import React from "react";
import "./Login.css";

const Register = () => {
  return (
    <div className="Container">
      <div className="TitleContainer">
        <h1 className="Title">Peaza</h1>
        <h1 className="tagline">Start your Pizzorable journey!</h1>
      </div>
      <div className="formContainer">
        <form className="formm" action="" method="post" name="loginForm">
          <h1 className="loginN">Register</h1>
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
          <input
            className="field"
            type="text"
            placeholder="Address"
            name="Address"
          />
          <button className="buttlog" type="submit">
            Go!
          </button>
          
          <a
            href="https://longdogechallenge.com/"
            className="links"
          >
            Already a member? Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
