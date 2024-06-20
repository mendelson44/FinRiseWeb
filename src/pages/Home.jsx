import React from "react";
import { Link } from 'react-router-dom';


function Home(){

    
    return(
    <>
        <h2>Home</h2>
        <Link to="/addcustomer">Add New Customer</Link>
        <Link to="/usersignup">Sign Up</Link>
    </>
    );
}

export default Home;