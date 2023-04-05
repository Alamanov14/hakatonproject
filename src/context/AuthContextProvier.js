import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
// import React, { createContext, useContext, useEffect, useState } from 'react';
import fire from "../fire";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvier = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // Регистрация
  const handleSignUp = () => {
    clearErrors();
    console.log(email, password);
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Успешная регистрация
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            console.error(err);
            break;
        }
      });
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;

          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  console.log(user);

  const values = {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleSignUp,
    handleLogin,
    handleLogout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvier;
