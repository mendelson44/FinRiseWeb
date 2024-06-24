import React from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";
import TableCustomerList from "../components/TableCustomersList";
import SideMenu from "../components/SideMenu";



function CustomerList() {
  return (
    <div style={{ display: 'flex' }}>
      {/* SideMenu component */}
      <div style={{ marginTop: '100px' }}> {/* Adjust marginTop to position the SideMenu lower */}
        <SideMenu />
      </div>
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <Box sx={{
         position: 'fixed',
         top: '70px',
         right: '20px',
        }}>
          <Fab style={{ backgroundColor: 'rgb(14, 186, 151)' , color: '#fff'}} // Set background color and text color
          aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
        
        <Typography variant="h3" sx={{
          textAlign: 'left', 
          color: 'rgb(14, 186, 151)', 
          marginTop: '10px', 
          fontWeight: 'bold', 
        }}>
          Customers List
        </Typography>
        
        <TableCustomerList />
      </div>
    </div>
  );
}

export default CustomerList;
