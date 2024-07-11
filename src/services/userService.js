import axios from "axios";
import * as constants from "../utils/constants";

/* GET User By Email */
export const fetchData = async (currentEmail) => {
  try {
    const response = await axios.get(
      `http://localhost:8084/superapp/users/login/${constants.SUPPER_APP_NAME}/${currentEmail}`
    );
    return response.data;
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error;
  }
};

/*POST New User*/
export const createUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8084/superapp/users",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};
