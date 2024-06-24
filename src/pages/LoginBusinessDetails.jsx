import React, { useState } from "react";
import BusinessCreateArea from "../components/BusinessCreateArea";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Zoom from "@mui/material/Zoom";

/**
|--------------------------------------------------
| This Page is for the user (business owner).
| after the user login, he will need to fill the 
| details of his business in this page.
|--------------------------------------------------
*/

function LoginBusinessDetails() {
  const [isExpand, setExpand] = useState(false);

  const fabStyle = {
    margin: "15px",
    color: "black",
    backgroundColor: "rgb(14, 186, 151)",
  };

  function toggleForm() {
    setExpand(!isExpand);
  }

  return (
    <>
      <h1>add customer</h1>
      <Zoom in={true}>
        <Fab style={fabStyle} onClick={toggleForm}>
          {isExpand ? <RemoveIcon /> : <AddIcon />}
        </Fab>
      </Zoom>
      <CustomerCreateArea isExpand={isExpand} />
    </>
  );
}

export default LoginBusinessDetails;
