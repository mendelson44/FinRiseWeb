import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import TableCustomerList from "../components/TableCustomersList";
import SideMenu from "../components/SideMenu";
import BackHeader from "../components/BackHeader";

function CustomerList() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/addnewcustomer");
  };

  return (
    <div>
      <BackHeader />
      <div style={{ display: "flex", marginTop: "10px" }}>
        {/* SideMenu component */}
        <div style={{ marginRight: "20px" }}>
          <SideMenu />
        </div>
        <div style={{ flex: 1, position: "relative" }}>
          <Box
            sx={{
              position: "fixed",
              top: "90px",
              right: "20px",
            }}
          >
            <Fab
              style={{ backgroundColor: "rgb(14, 186, 151)", color: "#fff" }}
              aria-label="add"
              onClick={handleAddClick}
            >
              <AddIcon />
            </Fab>
          </Box>
          <h1
            style={{
              fontSize: "30px",
              color: "black",
              textAlign: "left",
              marginTop: "30px",
              fontWeight: "bold",
            }}
          >
            Customer list
          </h1>
          <TableCustomerList />
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
