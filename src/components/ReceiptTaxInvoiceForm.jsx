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

const currencies = [
	{ value: "ILS", label: "Shekel" },
	{ value: "USD", label: "Dollar" },
];

const paymentTypes = [
	{ value: "bank_transfer", label: "Bank Transfer" },
	{ value: "credit_card", label: "Credit Card" },
	{ value: "cash", label: "Cash" },
];

const ReceiptTaxInvoiceForm = () => {
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
					border: "4px solid #ddd",
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
							id="customer-name"
							required
							label="Customer Name"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<DatePicker
							id="payment-due-date"
							label="Payment Due Date"
							value={paymentDate}
							onChange={(newValue) => setPaymentDate(newValue)}
							renderInput={(params) => <TextField {...params} fullWidth />}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DatePicker
							id="document-date"
							label="Document Date"
							value={issueDate}
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
							id="document-description"
							label="Document Description"
							fullWidth
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
							id="service-or-product-description"
							label="Service or Product Description"
							fullWidth
							InputProps={{
								endAdornment: (
									<IconButton>
										<SearchIcon />
									</IconButton>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							id="quantity-basic"
							label="Quantity"
							type="number"
							defaultValue={1}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							select
							id="currency-basic"
							label="Currency"
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
					<Grid item xs={12} sm={4}>
						<TextField
							id="unit-price"
							label="Unit Price"
							type="number"
							defaultValue={0}
							fullWidth
						/>
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
					border: "4px solid #ddd",
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
							id="payment-type"
							label="Payment Type"
							value={paymentType}
							onChange={(e) => setPaymentType(e.target.value)}
							fullWidth
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
							id="date-basic"
							label="Date"
							value={issueDate}
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
							id="unit-price"
							label="Unit Price"
							type="number"
							defaultValue={0}
							fullWidth
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							select
							id="currency-basic"
							label="Currency"
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
					border: "4px solid #ddd",
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
							id="notes"
							label="Notes in the bottom of the document"
							multiline
							rows={4}
							fullWidth
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
