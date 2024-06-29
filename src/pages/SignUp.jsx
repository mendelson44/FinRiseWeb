import React from "react";
import BackHeader from "../components/BackHeader";
import "../styles/signup.css";
import users from "/data/users.js";
import HorizontalLinearStepper from "../components/HorizontalLinearStepper";
import SignUpForm from "../components/SignUpForm";
import * as userService from "../services/userService";

function SignUp() {
  const onSignUpAttempt = async (details) => {
    const newUser = {
      email: details.email,
      role: "ADMIN",
      username: `${details.firstName} ${details.lastName}`,
      avatar: details.avatar,
    };

    try {
      const responseData = await userService.createUser(newUser);
      console.log(responseData);
    } catch (error) {
      console.error("Error during sign-up attempt:", error);
    }
  };

  console.log(users);

  return (
    <>
      <BackHeader />
      <div className="signup-container">
        <div className="signup-logo">
          <img src="src/assets/White on transparent .png" alt="logo FinRise" />
        </div>

        <div className="signup-form"></div>
        {/* <HorizontalLinearStepper /> */}
        <SignUpForm onSignUpAttempt={onSignUpAttempt} />
      </div>
    </>
  );
}

export default SignUp;
