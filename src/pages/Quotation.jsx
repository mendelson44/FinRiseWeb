import React from "react";
import LayoutComponent from "../components/LayoutComponent";

function Quotation() {
  return (
    <>
    <LayoutComponent>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: '30px',
              color: 'black',
              textAlign: 'left',
              marginTop: '30px',
              fontWeight: 'bold',
            }}
          >
            Quotation
            <hr />
          </h1>
        </div>
      </div>
    </LayoutComponent>
    </>
  );
}

export default Quotation;