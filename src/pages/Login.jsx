import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import LoginFinal from "../components/LoginForm";
import BackHeader from "../components/BackHeader";
import * as userService from "../services/userService";

function Login() {
  const [data, setData] = useState(null); // Define state for storing data

  useEffect(() => {
    if (data) {
      console.log(`My Data: ${JSON.stringify(data)}`);
    }
  }, [data]);

  const loginAttempt = async (details) => {
    console.log("login Attempt");
    try {
      const fetchedData = await userService.fetchData(details.email);
      setData(fetchedData);
      console.log(`My Data: ${JSON.stringify(fetchedData)}`);
    } catch (error) {
      console.error("Error during login attempt:", error);
    }
    console.log(`My Data: ${data}`);
  };

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
