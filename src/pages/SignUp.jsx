import React from "react";
import BackHeader from "../components/BackHeader";
import "../styles/signup.css";
import users from "/data/users.js";
import HorizontalLinearStepper from "../components/HorizontalLinearStepper";

function SignUp() {
  function onSignUpAttempt(details) {
    console.log("login Attempt");
    //TODO: find User By Email
    console.log(users);

    const newUser = {
      email: details.email,
      role: "MINI_APP_USER",
      username: `${details.firstName} ${details.lastName}`,
      avatar: details.avatar,
    };

    // Here you would usually send the formData to a server or some other handling function
    //TODO: 1. check if this email is not used in the database (GET)
    //      2. if not, create new user (POST)
    users.push(newUser);
    console.log(users);
  }

  return (
    <>
      <BackHeader />
      <div className="signup-container">
        <div className="signup-logo">
          <img src="src/assets/White on transparent .png" alt="logo FinRise" />
        </div>

        <div className="signup-form"></div>
        <HorizontalLinearStepper />
      </div>
    </>
  );
}

export default SignUp;
