import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUP } from "../../redux/actions/auth";
const SignUp = ({ setLoginLeft, loginLeft }) => {
  const dispatch = useDispatch();
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpLastName, setSignUpLastName] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [valid, setValid] = useState(false);
  const HandleEmpty = () => {
    if (
      signUpEmail &&
      signUpPassword &&
      signUpFirstName &&
      signUpLastName &&
      signUpConfirmPassword
    ) {
      setSignUpEmail("");
      setSignUpPassword("");
      setSignUpFirstName("");
      setSignUpLastName("");
      setSignUpConfirmPassword("");
      setValid(false);
    } else {
      setValid(true);
    }
  };
  return (
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
            {valid && !signUpFirstName ? (
              <span className="error-message">Please enter first name *</span>
            ) : null}
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
            {valid && !signUpLastName ? (
              <span className="error-message">Please enter last name *</span>
            ) : null}
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
            {valid && !signUpEmail ? (
              <span className="error-message">Please enter email *</span>
            ) : null}
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
            {valid && !signUpPassword ? (
              <span className="error-message">Please enter password *</span>
            ) : null}
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
            {valid && !signUpConfirmPassword ? (
              <span className="error-message">
                Please enter confirm password *
              </span>
            ) : null}
            {signUpConfirmPassword !== signUpPassword ? (
              <span className="error-message">
                Password does not match*
              </span>
            ) : null}
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
  );
};

export default SignUp;
