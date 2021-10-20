import React, { useState } from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import {Link} from "react-router-dom"
const Auth = (props) => {
  const [loginLeft, setLoginLeft] = useState(false);
  return (
    <div className="login">
      <div className="container">
        <div className="login-inner">
          <div className="login-lft">
            <div className="brand">
              <Link to="/" className="logo">
                Bilal<span>&nbsp;.</span>
              </Link>

              <div className="heading">
                <h2>Time Manager</h2>
                <p>Your Right Choice</p>
              </div>
            </div>
          </div>
          <SignUp loginLeft={loginLeft} setLoginLeft={setLoginLeft} />
          <Login loginLeft={loginLeft} setLoginLeft={setLoginLeft} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
