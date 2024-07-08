import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TableSearch from "./TableSearch"; // Import TableSearch component
import { Button } from "antd";
import exportCustomerListToExcel from "../utils/exportExcel";
import Row from "./Row";
import customers from "../../data/customers";

// Main component rendering the table
export default function CollapsibleTable() {
	const [currCustomers, setCustomers] = useState(customers);
	const [loading, setLoading] = useState(false);

	const handleOnExportExcel = () => {
		setLoading(true);
		exportCustomerListToExcel(currCustomers);
		setTimeout(() => {
			setLoading(false);
		}, 3000); // wait for 1 second
	};

	const handleDelete = (customerToDelete) => {
		setCustomers(
			currCustomers.filter((customer) => customer !== customerToDelete)
		);
	};

	return (
		<>
			<div style={{ margin: "50px" }}>
				<TableContainer component={Paper}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<TableSearch /> {/* Include TableSearch component here */}
						<Button
							onClick={handleOnExportExcel}
							loading={loading}
							disabled={loading}
						>
							Export Excel
						</Button>
					</div>
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
							{currCustomers.map((customer) => (
								<Row
									key={`${customer.firstName}-${customer.lastName}`}
									customer={customer}
									onDelete={handleDelete}
								/>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</>
	);
}
