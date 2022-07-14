import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from 'react-router-dom';
import useInput from "../../hooks/use-input";
import * as Styled from './Auth.styled';

// style
import classes from "./Auth.module.css";

const LOGIN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxVImOeUbmt9xP3qS8moiONGiHj-6SRJE";
const SIGNUP_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxVImOeUbmt9xP3qS8moiONGiHj-6SRJE";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    document.title = `MEALS APP | Login Page`;
  }, []);

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!usernameIsValid && !passwordIsValid) {
      return;
    }

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = LOGIN_URL;
    } else {
      url = SIGNUP_URL;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: username,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Username or pasword is invalid!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        return navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const usernameClasses = usernameHasError ? `${classes['control-invalid']}` : '';
  const passwordClasses = passwordHasError ? `${classes['control-invalid']}` : '';

  return (
    <Styled.AuthContainer>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <div className={usernameClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            value={username}
          />
          {usernameHasError && (<p style={{color: "rgb(237, 5, 5)"}}>Please enter a valid username!</p>)}
        </div>
        <div className={passwordClasses}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={password}
          />
          {passwordHasError && (<p style={{color: "rgb(237, 5, 5)"}}>Please enter a valid password!</p>)}
        </div>
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p style={{color: '#fff'}}>Sending request...</p>}
          <Styled.ToggleButton
            type="button"
            onClick={switchAuthHandler}
          >
            {isLogin ? "Create new account" : "Already registered"}
          </Styled.ToggleButton>
        </div>
      </form>
    </Styled.AuthContainer>
  );
};

export default AuthForm;
