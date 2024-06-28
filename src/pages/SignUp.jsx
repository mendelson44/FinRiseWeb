import React from "react";
import BackHeader from "../components/BackHeader";
import "../styles/signup.css";
import users from "/data/users.js";
import HorizontalLinearStepper from "../components/HorizontalLinearStepper";
import SignUpForm from "../components/SignUpForm";
import axios from "axios";
function SignUp() {
  const postData = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8084/superapp/users",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };
  function onSignUpAttempt(details) {
    const newUser = {
      email: details.email,
      role: "ADMIN",
      username: `${details.firstName} ${details.lastName}`,
      avatar: details.avatar,
    };

    postData(newUser);
  }

  //users.push(newUser);
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
