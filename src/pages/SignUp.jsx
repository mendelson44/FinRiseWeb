import React from "react";
import BackHeader from "../components/BackHeader";
import SignUpForm from "../components/SignUpForm";
import "../styles/signup.css";


function SignUp(){

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
          <SignUpForm onLoginAttempt={loginAttempt} />
        </div>
      </div>
    
    
    </>
  );
}

export default SignUp;
