import React from "react";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import "../styles/home.css"

function Home(){
       
    return(
    <>
        <h2>Home</h2>
        <img src="src/assets/Original on transparent.png" alt="FinRise Logo" class = "logo" />
        <div class="custom-text">
            <p>Empowers you to track income and expenses, create invoices and payment orders,<br />
                manage your cash flow, prepare financial reports, and much more.<br />
                This easy-to-use and powerful tool puts you in control of your finances and helps you achieve your business goals.
            </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        height={150}
        width={300}
        my={4}
        mx={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        marginTop={50}
        gap={4}
        p={2}
        sx={{ 
          border: '2px solid grey',
          textAlign: 'center' // Align text in the center
        }}
      >
        <h2 sx={{ color: 'blue', fontFamily: 'Arial' }}>Track Income and Expenses</h2>
        <p>Monitor your financial performance with real-time tracking of income and expenses.</p>
      </Box>

      <Box
        height={150}
        width={300}
        my={4}
        mx={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        marginTop={50}
        gap={4}
        p={2}
        sx={{ 
          border: '2px solid grey',
          textAlign: 'center' // Align text in the center
        }}
      >
        <h2 sx={{ color: 'green', fontFamily: 'Verdana' }}>Create Invoices</h2>
        <p>Generate professional invoices quickly and easily, and keep your billing organized.</p>
      </Box>

      <Box
        height={150}
        width={300}
        my={4}
        mx={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        marginTop={50}
        gap={4}
        p={2}
        sx={{ 
          border: '2px solid grey',
          textAlign: 'center' // Align text in the center
        }}
      >
        <h2 sx={{ color: 'red', fontFamily: 'Times New Roman' }}>Financial Reports</h2>
        <p>Prepare detailed financial reports to understand your business better and make informed decisions.</p>
      </Box>
    </div>
 
        
      {/*  <div id = "services" class="boxes-container">
            <div class= "box">
                <h3>Track Income and Expenses</h3>
                <p>Monitor your financial performance with real-time tracking of income and expenses.</p>

            </div>
            <div class= "box">
                <h3>Create Invoices</h3>
                <p>Generate professional invoices quickly and easily, and keep your billing organized.</p>

            </div>
            <div class= "box">
                <h3>Financial Reports</h3>
                <p>Prepare detailed financial reports to understand your business better and make informed decisions.</p>

            </div>

        </div>
        <div id="contact" class="contact-info">
            <h3>Contact Us</h3>
            <p>Email: support@finrize.com</p>
            <p>Phone: +1 (234) 567-890</p>
            <p>Address: 123 Finance St, Business City, BC 12345</p>
         </div>
    */}
         

        <Link to="/addnewcustomer">Add New Customer</Link>
        <Link to="/usersignup">Sign Up</Link>
    </>
    );
}

export default Home;