import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as cus from "../../data/customers";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
function moveToCustomer(customer) {
  console.log(`moveToCustomer Clicked: ${JSON.stringify(customer)}`);
}

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cus.cutomers1.map((customer) => (
            <TableRow
              key={customer.email}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${customer.firstName} ${customer.lastName}`}
              </TableCell>
              <TableCell align="right">{customer.address}</TableCell>
              <TableCell align="right">{customer.phone}</TableCell>
              <TableCell align="right">{customer.email}</TableCell>
              <TableCell align="right">
                <Link to="/CustomerPreview">
                  <IconButton
                    color="primary"
                    aria-label="move to customer window"
                    size="small"
                    onClick={() => moveToCustomer(customer)}
                  >
                    <NavigateNextIcon />
                  </IconButton>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
