import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/*
  This component is a Table for the Form List display
*/

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Form Type</StyledTableCell>
            <StyledTableCell align="right">Date Modified</StyledTableCell>
            <StyledTableCell align="right">Customer</StyledTableCell>
            <StyledTableCell align="right">Open/Close</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {props.customer.forms.map((form) => (
            <StyledTableRow key={form.id}>
              <StyledTableCell component="th" scope="row">
                {form.type}
              </StyledTableCell>
              <StyledTableCell align="right">
                {form.dateCreated}
              </StyledTableCell>
              <StyledTableCell align="right">
                {props.customer.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {form.isOpen ? "Open" : "Close"}
              </StyledTableCell>
              <StyledTableCell align="right">
                <PDFDownloadLink
                  document={<PDFTaxInvoiceFile taxInvoice={form} />}
                  fileName={`Tax Invoice - ${form.dateCreated}`}
                >
                  {({ loading }) =>
                    loading ? (
                      <IconButton
                        disabled
                        aria-label="download file"
                        size="small"
                        color="primary" // Set color to primary (blue)
                      >
                        <FileDownloadIcon fontSize="small" />
                      </IconButton>
                    ) : (
                      <IconButton
                        aria-label="download file"
                        size="small"
                        color="primary" // Set color to primary (blue)
                      >
                        <FileDownloadIcon fontSize="small" />
                      </IconButton>
                    )
                  }
                </PDFDownloadLink>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}
