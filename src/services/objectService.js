import * as userService from "./userService";
import * as constants from "../utils/constants";
/*POST New Object (You must be a SUPERAPP_USER to POST an Object)*/
export const postObject = async (objectBoundary) => {
  try {
    const response = await axios.post(
      "https://finrise.azurewebsites.net/superapp/objects",
      objectBoundary
    );
    return response;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

const createNewObjectBoundary = (currentUser, type, alias, objectDetails) => {
  const newObjectBoundary = {
    objectId: {
      superapp: null,
      id: null,
    },
    type: type, //string (customer , form)
    alias: alias, //string
    location: {
      lat: 0,
      lng: 0,
    },
    active: true,
    creationTimestamp: null,
    createdBy: {
      userId: {
        superapp: currentUser.essentialDetails.userId.superapp,
        email: currentUser.essentialDetails.userId.email,
      },
    },
    objectDetails: objectDetails,
  };
  return newObjectBoundary;
};

/*
1. PUT - change role
2. POST - object boundary
3. PUT - change role back

*/
export const storeFormInDataBase = (currentUser, formType, formObject) => {
  // 1. PUT - change role
  const data1 = {
    role: constants.ROLES.SUPERAPP_USER,
  };
  userService.putUser(currentUser, data1);
  // 2. Create Object Boundary
  const newObjectBoundary = objectService.createNewObjectBoundary(
    currentUser,
    "form",
    formType,
    formObject
  );
  // post object
  const answer = postObject(newObjectBoundary);
  console.log("answer: ", answer.data);

  const data2 = {
    role: constants.ROLES.MINIAPP_USER,
  };
  userService.putUser(currentUser, data2);
};
export default createNewObjectBoundary;
