import React from "react";
import LayoutComponent from "../components/LayoutComponent";

function Receipt() {
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
            Receipt
            <hr />
          </h1>
        </div>
      </div>
    </LayoutComponent>
    </>
  );
}

export default Receipt;