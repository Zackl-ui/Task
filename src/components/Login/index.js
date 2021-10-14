import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { SignIn, SignUP } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpLastName, setSignUpLastName] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [loginLeft, setLoginLeft] = useState(false);
  const HandleEmpty = () => {
    setSignUpEmail("");
    setSignUpPassword("");
    setSignUpFirstName("");
    setSignUpLastName("");
    setSignUpConfirmPassword("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login-inner">
            <div className="login-lft">
              <div class="brand">
                <a href="#" class="logo">
                  Bilal<span>&nbsp;.</span>
                </a>

                <div class="heading">
                  <h2>Time Manager</h2>
                  <p>Your Right Choice</p>
                </div>

                <div class="success-msg">
                  <p>Great! You are one of our members now</p>
                  <a href="#" class="profile">
                    Your Profile
                  </a>
                </div>
              </div>
            </div>
            <div className={`loginCard ${loginLeft && "move"}`}>
              <div className="session">
                <div className="log-in form">
                  <h4>
                    <span>Signup</span>
                  </h4>
                  <div className="floatingLabel">
                    <input
                      placeholder="First Name"
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="off"
                      value={signUpFirstName}
                      onChange={(e) => setSignUpFirstName(e.target.value)}
                    />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="floatingLabel">
                    <input
                      placeholder="Last Name"
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="off"
                      value={signUpLastName}
                      onChange={(e) => setSignUpLastName(e.target.value)}
                    />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                  <div className="floatingLabel">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={signUpEmail}
                      onChange={(e) => setSignUpEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                  </div>
                  <div className="floatingLabel">
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={signUpPassword}
                      onChange={(e) => setSignUpPassword(e.target.value)}
                    />
                    <label htmlFor="email">Password</label>
                  </div>
                  <div className="floatingLabel">
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      autoComplete="off"
                      value={signUpConfirmPassword}
                      onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                    />
                    <label htmlFor="confirm_password">Confirm Password:</label>
                  </div>
                  <button
                    type="submit"
                    onClick={() => {
                      dispatch(
                        SignUP(
                          {
                            firstName: signUpFirstName,
                            lastName: signUpLastName,
                            email: signUpEmail,
                            password: signUpPassword,
                            password_confirmation: signUpConfirmPassword,
                          },
                          setLoginLeft
                        )
                      );
                      HandleEmpty();
                    }}
                  >
                    SignUp
                  </button>
                  <div className="message">
                    <p>Already have an account?&nbsp;</p>
                    <span onClick={(e) => setLoginLeft(false)}>Login</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`loginCard ${loginLeft && "change"}`}>
              <div className="session">
                <div className="form">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
