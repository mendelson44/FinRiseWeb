import React, { useState } from "react";
import BusinessCreateArea from "../components/BusinessCreateArea";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Zoom from "@mui/material/Zoom";
import BackHeader from "../components/BackHeader";

/**
|--------------------------------------------------
| This Page is for the user (business owner).
| after the user login, he will need to fill the 
| details of his business in this page.
|--------------------------------------------------
*/

function LoginBusinessDetails() {

  const fabStyle = {
    margin: "15px",
    color: "black",
    backgroundColor: "rgb(14, 186, 151)",
  };
  return (
    <>
     <BackHeader/>
        <BusinessCreateArea  />
    </>
  );
}

export default LoginBusinessDetails;
