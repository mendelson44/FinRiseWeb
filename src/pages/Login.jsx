import React from "react";
//import "../styles/login.css";
import styles from "../styles/login.module.css";
import LoginFinal from "../components/LoginForm";
import BackHeader from "../components/BackHeader";
import users from "/data/users.js";

function Login() {
  function loginAttempt(details) {
    console.log("login Attempt");
    //TODO: handle Login attempt
  }

  return (
    <>
      <BackHeader />
      <div className={styles.container}>
        <div className={styles.signupLogo}>
          <img src="src/assets/White on transparent .png" alt="logo FinRise" />
        </div>

        <div className={styles.signupForm}>
          <LoginFinal onLoginAttempt={loginAttempt} />
        </div>
      </div>
    </>
  );
}

export default Login;
