import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import LoginFinal from "../components/LoginForm";
import BackHeader from "../components/BackHeader";
import * as userService from "../services/userService";
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
      const fetchedData = await userService.fetchData(details.email);
      setData(fetchedData.data);
      console.log(`My Data: ${JSON.stringify(fetchedData.data)}`);

      // Save the logged-in user in a Cookie
      Cookies.set("currentUser", JSON.stringify(fetchedData.data), {
        expires: 7,
      });

      const currentUser = Cookies.get("currentUser");

      console.log("currentUser after cookie: ", currentUser);

      window.location.href = "/Lobi";
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
