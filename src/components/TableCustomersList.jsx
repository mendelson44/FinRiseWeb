import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableSearch from "./TableSearch"; // Import TableSearch component
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// Function to create sample data
function createData(firstName, lastName, address, phone, email) {
  return {
    firstName,
    lastName,
    address,
    phone,
    email,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        file: "file1.pdf", // Example file name
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        file: "file2.pdf", // Example file name
      },
    ],
  };
}

// Row component for rendering each row in the table
function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "You've requested to delete a transaction from the customer's history. This action is irreversible.\n\nAre you sure you want to proceed?"
    );
    if (confirmDelete) {
      // Perform deletion logic here
      console.log("Transaction deleted");
    }
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.firstName}</TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer ID</TableCell>
                    <TableCell>File</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="download file"
                          size="small"
                          color="primary" // Set color to primary (blue)
                          href={`/download/${historyRow.file}`} // Replace with actual download link
                          download
                        >
                          <FileDownloadIcon fontSize="small" />
                        </IconButton>
                        {historyRow.file}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="delete"
                          size="small"
                          color="primary"
                          onClick={handleDelete}
                        >
                          <DeleteOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

// Prop types for Row component
Row.propTypes = {
  row: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

// Sample data
const rows = [
  createData("Inbar", "Zafar", "123 Main St", "555-1234", "inbar@example.com"),
  createData("Roy", "Rubin", "456 Elm St", "555-5678", "roy@example.com"),
  createData(
    "Yosi",
    "Ben Shushan",
    "789 Oak St",
    "555-9876",
    "yosi@example.com"
  ),
  createData("Ben", "Mendelson", "101 Pine St", "555-4321", "ben@example.com"),
  createData("Noa", "Sharabi", "202 Cedar St", "555-8765", "noa@example.com"),
];

// Main component rendering the table
export default function CollapsibleTable() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <p style={{ backgroundColor: "white", padding: "20px" }}>
          <TableSearch /> {/* Include TableSearch component here */}
        </p>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography variant="h6">First Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Last Name</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">Address</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">Phone</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">Email</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={`${row.firstName}-${row.lastName}`} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
