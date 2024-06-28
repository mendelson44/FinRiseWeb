import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import LoginFinal from "../components/LoginForm";
import BackHeader from "../components/BackHeader";
import axios from "axios";
function Login() {
  const [data, setData] = useState(null); // Define state for storing data

  useEffect(() => {
    if (data) {
      console.log(`My Data: ${JSON.stringify(data)}`);
    }
  }, [data]);

  const fetchData = async (superapp, currentEmail) => {
    try {
      const response = await axios.get(
        `http://localhost:8084/superapp/users/login/${superapp}/${currentEmail}`
      );
      setData(response.data);
      console.log(
        `My Response: ${response.status} ${JSON.stringify(response.data)}`
      );
    } catch (error) {
      console.error("Error making GET request:", error);
    }
  };

  function loginAttempt(details) {
    console.log("login Attempt");
    fetchData("2024b.noa.sharabi", details.email);

    console.log(`My Data: ${data}`);
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
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data fetched yet</p>
      )}
    </>
  );
}

export default Login;
