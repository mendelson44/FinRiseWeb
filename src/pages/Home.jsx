import React from "react";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../styles/home.css";

function Home(){

      
    return(
        <>
            <img src="src/assets/Original on transparent.png" alt="FinRise Logo" className="logo" />
            <div className="custom-text">
                <p>Empowers you to track income and expenses, create invoices and payment orders,<br />
                    manage your cash flow, prepare financial reports, and much more.<br />
                    This easy-to-use and powerful tool puts you in control of your finances and helps you achieve your business goals.
                </p>
            </div>
           
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 50 }} id="services">
                    
                <Box
                    height={200}
                    width={300}
                    my={4}
                    mx={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    marginTop={50}
                    gap={4}
                    p={2}
                    sx={{ 
                        border: '2px solid grey',
                        textAlign: 'center' // Align text in the center
                    }}
                >
                    <Typography variant="h5" sx={{ color: '#0eba97', fontFamily: 'Arial',fontWeight: 'bold' }}>Track Income and Expenses</Typography>
                    <Typography variant="body1" >Monitor your financial performance with real-time tracking of income and expenses.</Typography>
                </Box>

                <Box
                    height={200}
                    width={300}
                    my={4}
                    mx={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"   
                    marginTop={50}
                    gap={4}
                    p={2}
                    sx={{ 
                        border: '2px solid grey',
                        textAlign: 'center' // Align text in the center
                    }}
                >
                    <Typography variant="h5" sx={{ color: '#0eba97', fontFamily: 'Arial',fontWeight: 'bold' }}>Create Invoices</Typography>
                    <Typography variant="body1" >Generate professional invoices quickly and easily, and keep your billing organized.</Typography>
                </Box>

                <Box
                    height={200}
                    width={300}
                    my={4}
                    mx={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    marginTop={50}
                    gap={4}
                    p={2}
                    sx={{ 
                        border: '2px solid grey',
                        textAlign: 'center' // Align text in the center
                    }}
                >
                    <Typography variant="h5" sx={{ color: '#0eba97', fontFamily: 'Arial' ,fontWeight: 'bold'}}>Financial Reports</Typography>
                    <Typography variant="body1" >Prepare detailed financial reports to understand your business better and make informed decisions.</Typography>
                </Box>
            </div>
            <Box
                    id="contact"
                    height={200}
                    width={500}
                    my={4}
                    mx={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ 
                        border: '2px solid grey',
                        textAlign: 'center' // Align text in the center
                    }}
                >
                    <Typography variant="h5" sx={{ color: '#0eba97', fontFamily: 'Arial' ,fontWeight: 'bold'}}>Contact Us</Typography>
                    <Typography variant="body1" sx={{ lineHeight:0 }}>Email: support@finrize.com</Typography>
                    <Typography variant="body1" sx={{ lineHeight:0 }} >Phone: +1 (234) 567-890</Typography>
                    <Typography variant="body1"  sx={{ lineHeight:0 }} >Address: 123 Finance St, Business City, BC 12345</Typography>
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