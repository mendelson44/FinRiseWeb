import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function BackHeader() {
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
   
      </nav>
      
    </>
  );
}

export default BackHeader;
