import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";
function Login({ setLoginLeft, loginLeft }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.Helper.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const HandleEmpty = () => {
    if (email && password) {
      setEmail("");
      setPassword("");
      setValid(false);
    } else {
      setValid(true);
    }
  };
  return (
    <>
      <div className={`loginCard ${loginLeft && "change"}`}>
        <div className="session">
          <div className="form">
            {error.message ? (
              <span className="error">{error.message}</span>
            ) : null}
            <h4>
              <span>Login</span>
            </h4>
            <div className="floatingLabel">
              <input
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="email">Email:</label>
              {valid && !email ? (
                <span className="error-message">Please enter an email *</span>
              ) : null}
            </div>

            <div className="floatingLabel">
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              {valid && !password ? (
                <span className="error-message">
                  Please enter an password *
                </span>
              ) : null}
            </div>
            <button
              type="submit"
              onClick={() => {
                dispatch(SignIn({ email, password }, history));
                HandleEmpty();
              }}
            >
              Log in
            </button>
            <div className="message">
              <p>Dont have an account?&nbsp;</p>
              <span onClick={(e) => setLoginLeft(true)}>I m new</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
