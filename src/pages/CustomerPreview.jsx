import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import CustomizedTables from "../components/FormTable";
import { useLocation } from "react-router-dom";

const CustomerPreview = () => {
  //NEED TO GET CUSTOMER ID FROM BasicTable.jsx
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const customerEmail = queryParams.get("id");
  console.log(customerEmail);
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
      <CustomizedTables emailToSearch={customerEmail} />
    </LayoutComponent>
  );
};

export default CustomerPreview;
