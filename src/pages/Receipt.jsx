import React from "react";
import LayoutComponent from "../components/LayoutComponent";
// import ReceiptForm from "../components/ReceiptForm";
function Receipt() {
  return (
    <>
      <LayoutComponent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "30px",
                color: "black",
                textAlign: "left",
                marginTop: "30px",
                fontWeight: "bold",
              }}
            >
              Receipt Document
              <hr />
            </h1>
          </div>
        </div>
        {/* <ReceiptForm /> */}
      </LayoutComponent>
    </>
  );
}

export default Receipt;
