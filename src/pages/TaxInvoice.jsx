import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import TaxInvoiceForm from "../components/TaxInvoiceForm";

function TaxInvoice() {
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
              Tax Invoice Form
              <hr />
            </h1>
          </div>
          <div style={{ marginRight: "2px", marginTop: "100px" }}>
            <TaxInvoiceForm />
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}

export default TaxInvoice;
