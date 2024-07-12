import axios from "axios";
import * as constants from "../utils/constants";

/*POST New User*/
export const createUser = async (data) => {
  try {
    const response = await axios.post(
      "https://finrise.azurewebsites.net/superapp/users",
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

/* GET User By Email */
export const fetchData = async (currentEmail) => {
  try {
    const response = await axios.get(
      `https://finrise.azurewebsites.net/superapp/users/login/${constants.SUPERAPP_NAME}/${currentEmail}`
    );
    return response;
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error;
  }
};

/* PUT Update User */
export const putUser = async (currentUser, data) => {
  try {
    const response = await axios.put(
      `https://finrise.azurewebsites.net/superapp/users/${currentUser.userId.superapp}/${currentUser.userId.email}`,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error making PUT request:", error);
    throw error;
  }
};
