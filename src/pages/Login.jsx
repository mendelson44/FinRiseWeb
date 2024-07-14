import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import LoginFinal from "../components/LoginForm";
import BackHeader from "../components/BackHeader";
import * as userService from "../services/userService";
import * as objectService from "../services/objectService";
import * as constants from "../utils/constants";
import Cookies from "js-cookie";
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
      // get user
      const fetchedData = await userService.fetchData(details.email);
      console.log("fetchedData: ");
      console.log(fetchedData);

      Cookies.set(
        `${fetchedData.data.userId.email}`,
        JSON.stringify(fetchedData.data),
        {
          expires: 7,
        }
      );

      const currentUser = Cookies.get(`${fetchedData.data.userId.email}`);

      console.log("currentUser after cookie (final form): ");
      console.log(currentUser);

      window.location.href = `/lobi?email=${fetchedData.data.userId.email}`;
    } catch (error) {
      console.error("Error during login attempt:", error);
    }
  };

  return (
    <>
      <BackHeader />
      <div className={styles.container}>
        <div className={styles.loginLogo}>
          <img src={constants.IMAGES.WHITE_ON_TRANSPARENT} alt="logo FinRise" />
        </div>

        <div className={styles.loginForm}>
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
