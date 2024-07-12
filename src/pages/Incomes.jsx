import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import FormTable from "../components/FormTable";
const Incomes = () => {
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
          All Forms:
        </h1>
      </div>
      <FormTable emailToSearch={user.essentialDetails.email} />
    </LayoutComponent>
  );
};

export default Incomes;
