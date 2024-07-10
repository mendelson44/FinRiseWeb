import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import CustomizedTables from "../components/FormTable";
import { useLocation } from "react-router-dom";

const CustomerPreview = () => {
  const location = useLocation();
  console.log("location: ", location);
  const { test } = location.state || {}; // Destructure the customer object from state
  console.log("after location: " + test);
  return (
    <LayoutComponent>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            color: "black",
            textAlign: "left",
            marginTop: "30px",
            fontWeight: "bold",
            marginBottom: 0,
          }}
        >
          Customer Preview
        </h1>
      </div>
      <h2>
        Forms: <hr />
      </h2>
      <br />
      <CustomizedTables customer={test} />
    </LayoutComponent>
  );
};

export default CustomerPreview;
