import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import DateCalendarServerRequest from "../components/DateCalendarServerRequest";

function Lobi() {
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
            Dashboard
            <hr />
          </h1>
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <DateCalendarServerRequest />
        </div>
      </div>
    </LayoutComponent>
    </>
  );
}

export default Lobi;
