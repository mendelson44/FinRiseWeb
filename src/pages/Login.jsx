import React from "react";
import "../styles/login.css";
import LoginFinal from "../components/LoginForm";
import BackHeader from "../components/BackHeader";



function Login(){

    function loginAttempt(details){
        console.log("login Attempt");
        console.log(details);
        //TODO: find User By Email
    }

  return (
    <>
    <BackHeader/>
      <div className="login-container">
        <div className="login-logo">
          <img src="src/assets/White on transparent .png" alt="logo FinRise" />
        </div>

        <div className="login-form">
          <LoginFinal onLoginAttempt={loginAttempt} />
        </div>
      </div>
    
    
    </>
  );
}

export default Login;
