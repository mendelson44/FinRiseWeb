import axios from "axios";
import * as constants from "../utils/constants";

/*POST New User*/
export const createUser = async (data) => {
  try {
    const response = await axios.post(
      `${constants.BASE_URL}/superapp/users`,
      data
    );
    console.log("postUser response: ");
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
      `${constants.BASE_URL}/superapp/users/login/${constants.SUPERAPP_NAME}/${currentEmail}`
    );
    return response;
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error;
  }
};

/* PUT Update User */
export const putUser = async (currentUser) => {
  try {
    const response = await axios.put(
      `${constants.BASE_URL}/superapp/users/${currentUser.userId.superapp}/${currentUser.userId.email}`,
      currentUser
    );

    return response.data;
  } catch (error) {
    console.error("Error making PUT request:", error);
    throw error;
  }
};
