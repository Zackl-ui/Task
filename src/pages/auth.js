import React, { useState } from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
const Auth = (props) => {
  const [loginLeft, setLoginLeft] = useState(false);
  return (
    <div className="login">
      <div className="container">
        <div className="login-inner">
          <div className="login-lft">
            <div class="brand">
              <a href="#" className="logo">
                Bilal<span>&nbsp;.</span>
              </a>

              <div class="heading">
                <h2>Time Manager</h2>
                <p>Your Right Choice</p>
              </div>

              <div class="success-msg">
                <p>Great! You are one of our members now</p>
                <a href="#" className="profile">
                  Your Profile
                </a>
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
