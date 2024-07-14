import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import QuotationForm from "../components/QuotationForm";
import { useLocation } from "react-router-dom";

function Quotation() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userEmail = queryParams.get("email");
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
              Quotation Document
              <hr />
            </h1>
          </div>
        </div>
        <QuotationForm userEmail={userEmail} />
      </LayoutComponent>
    </>
  );
}

export default Quotation;
