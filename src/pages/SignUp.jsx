import React, {useState, useEffect} from "react";
import BackHeader from "../components/BackHeader";
import "../styles/signup.css";
import HorizontalLinearStepper from "../components/HorizontalLinearStepper";
import * as userService from "../services/userService";

function SignUp() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

 

  const [newUser, setNewUser] = useState({
    essentialDetails: {
      email: "",
      role: "",
      userName: `${firstName} ${lastName}`,
      avatar: "",
    },
    extraDetails: {
      profileImageUrl: "",
      password: "",
      firstName: "",
      lastName: "",
      businessDetails: {
        registrationNumber: "",
        businessId: "",
        name: "",
        city: "",
        address: "",
        phoneNumber: "",
      }
    }
  });
  
  useEffect(() => {
    setNewUser((prevUser) => ({
      ...prevUser,
      essentialDetails: {
        ...prevUser.essentialDetails,
        userName: `${firstName} ${lastName}`,
      },
      extraDetails: {
        ...prevUser.extraDetails,
        firstName,
        lastName,
      },
    }));
  }, [firstName, lastName]);

  const updateEssentialDetails = (details) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      essentialDetails: {
        ...prevUser.essentialDetails,
        ...details
      }
    }));
  };

  const updateExtraDetails = (details) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      extraDetails: {
        ...prevUser.extraDetails,
        ...details
      }
    }));
  };

  const updateBusinessDetails = (businessDetails) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      extraDetails: {
        ...prevUser.extraDetails,
        businessDetails: {
          ...prevUser.extraDetails.businessDetails,
          ...businessDetails
        }
      }
    }));
  };
const onSignUpAttempt = async () => {
    console.log(`Attempting SignUp!!!!! \n ${newUser}`)
    // try {
    //   const responseData = await userService.createUser(newUser);
    //   console.log(responseData);
    // } catch (error) {
    //   console.error("Error during sign-up attempt:", error);
    // }
  };

  console.log(newUser);

  return (
    <>
      <BackHeader />
      <div className="signup-container">
        <div className="signup-logo">
          <img src="src/assets/White on transparent .png" alt="logo FinRise" />
        </div>
        <div className="stepper-container">
          <HorizontalLinearStepper 
          onSignUpAttempt={onSignUpAttempt}
          newUser={newUser}
          updateEssentialDetails={updateEssentialDetails}
          updateExtraDetails={updateExtraDetails}
          updateBusinessDetails={updateBusinessDetails}
          setFirstName={setFirstName}
          setLastName={setLastName}
          />
        </div>
      </div>
    </>
  );
}

export default SignUp;