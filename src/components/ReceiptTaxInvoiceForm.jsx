import React, { useState } from "react";
import {
	Container,
	TextField,
	Grid,
	Button,
	MenuItem,
	Typography,
	Box,
	IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Alert } from "antd";
import "../styles/inputFix.css";

const currencies = [
	{ value: "ILS", label: "Shekel" },
	{ value: "USD", label: "Dollar" },
];

const paymentTypes = [
	{ value: "bank_transfer", label: "Bank Transfer" },
	{ value: "credit_card", label: "Credit Card" },
	{ value: "cash", label: "Cash" },
];
const vat = [
	{ value: "before", label: "Before" },
	{ value: "after", label: "After" },
];

const ReceiptTaxInvoiceForm = () => {
	const [vatStatus, setVatStatus] = useState("before");
	const [paymentDate, setPaymentDate] = useState(null);
	const [issueDate, setIssueDate] = useState(null);
	const [currency, setCurrency] = useState("ILS");
	const [showAlert, setShowAlert] = useState(false);
	const [paymentType, setPaymentType] = useState("bank_transfer");

	const handleSubmit = () => {
		setShowAlert(true); // Show the alert on form submission
	};

	return (
		<>
			<Box
				sx={{
					border: "2px solid #ddd",
					padding: 2,
					borderRadius: 2,
					marginTop: 2,
					width: "100%", // Ensure the box takes the full width
				}}
			>
				<Typography variant="h5" gutterBottom>
					Document Details
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							required
							label="Customer Name"
							fullWidth
							className="custom-input"
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<DatePicker
							label="Payment Due Date"
							value={paymentDate}
							className="custom-input"
							onChange={(newValue) => setPaymentDate(newValue)}
							renderInput={(params) => (
								<TextField {...params} fullWidth className="custom-input" />
							)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DatePicker
							label="Document Date"
							value={issueDate}
							className="custom-input"
							onChange={(newValue) => setIssueDate(newValue)}
							renderInput={(params) => (
								<TextField
									{...params}
									fullWidth
									InputProps={{ endAdornment: <SearchIcon /> }}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Document Description"
							fullWidth
							className="custom-input"
						/>
					</Grid>

					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							marginLeft: 3,
							marginTop: 2,
						}}
					>
						<Typography variant="h6" gutterBottom>
							List of Items
						</Typography>
					</Box>
					<Grid item xs={12}>
						<TextField
							label="Service or Product Description"
							fullWidth
							className="custom-input"
							InputProps={{
								endAdornment: (
									<IconButton>
										<SearchIcon />
									</IconButton>
								),
							}}
						/>
					</Grid>
					<Grid item xs={6} sm={2}>
						<TextField
							label="Quantity"
							type="number"
							defaultValue={1}
							fullWidth
							className="custom-input"
						/>
					</Grid>
					<Grid item xs={6} sm={2}>
						<TextField
							label="Unit Price"
							type="number"
							defaultValue={0}
							fullWidth
							className="custom-input"
						/>
					</Grid>
					<Grid item xs={6} sm={2}>
						<TextField
							select
							label="Currency"
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}
							fullWidth
							className="custom-input"
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={6} sm={2}>
						<TextField
							select
							label="Vat"
							value={vatStatus}
							onChange={(e) => setVatStatus(e.target.value)}
							fullWidth
							className="custom-input"
						>
							{vat.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>

					<Grid item xs={12}>
						<Button variant="outlined" startIcon={<AddIcon />}>
							Add to Item List
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Box
				sx={{
					border: "2px solid #ddd",
					padding: 2,
					borderRadius: 2,
					marginTop: "10px",
					width: "100%", // Ensure the box takes the full width
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						marginBottom: "20px",
					}}
				>
					<Typography variant="h5" gutterBottom>
						Details of Receipts
					</Typography>
					<Typography variant="h7" gutterBottom>
						How you were paid?
					</Typography>
				</Box>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							select
							label="Payment Type"
							value={paymentType}
							onChange={(e) => setPaymentType(e.target.value)}
							fullWidth
							className="custom-input"
						>
							{paymentTypes.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>

					<Grid item xs={12} sm={2}>
						<DatePicker
							label="Date"
							value={issueDate}
							className="custom-input"
							onChange={(newValue) => setIssueDate(newValue)}
							renderInput={(params) => (
								<TextField
									{...params}
									fullWidth
									InputProps={{ endAdornment: <SearchIcon /> }}
								/>
							)}
						/>
					</Grid>

					<Grid item xs={12} sm={4}>
						<TextField
							label="Unit Price"
							type="number"
							defaultValue={0}
							fullWidth
							className="custom-input"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							select
							label="Currency"
							className="custom-input"
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}
							fullWidth
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
				</Grid>
			</Box>

			<Box
				sx={{
					border: "2px solid #ddd",
					padding: 2,
					borderRadius: 2,
					marginTop: 2,
					width: "100%", // Ensure the box takes the full width
				}}
			>
				<Typography variant="h5" gutterBottom>
					Notes in the Document
				</Typography>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<TextField
							label="Notes in the bottom of the document"
							multiline
							rows={4}
							fullWidth
							className="custom-input"
						/>
					</Grid>
				</Grid>
			</Box>

			{showAlert && (
				<Alert
					message="Success"
					description="The Document was created successfully."
					type="success"
					showIcon
				/>
			)}

			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					marginLeft: 3,
					marginTop: 2,
				}}
			>
				<Box sx={{ mr: 2 }}>
					<Button variant="outlined" color="primary" onClick={handleSubmit}>
						Preview
					</Button>
				</Box>
				<Box>
					<Button variant="contained" color="primary" onClick={handleSubmit}>
						Submit
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default ReceiptTaxInvoiceForm;
