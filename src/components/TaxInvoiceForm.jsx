import React from "react";
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

const currencies = [
	{ value: "ILS", label: "Shekel" },
	{ value: "USD", label: "Dollar" },
];

const TaxInvoiceForm = () => {
	const [paymentDate, setPaymentDate] = React.useState(null);
	const [issueDate, setIssueDate] = React.useState(null);
	const [currency, setCurrency] = React.useState("ILS");

	return (
		<Container>
			<Typography variant="h6" gutterBottom>
				Tax Invoice Form
			</Typography>
			<Box sx={{ border: "1px solid #ddd", padding: 2, borderRadius: 2 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<DatePicker
							label="Payment Due Date"
							value={paymentDate}
							onChange={(newValue) => setPaymentDate(newValue)}
							renderInput={(params) => <TextField {...params} fullWidth />}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DatePicker
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
						<TextField required label="Customer Name" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField label="Document Description" fullWidth />
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							label="Quantity"
							type="number"
							defaultValue={1}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							select
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
							label="Unit Price"
							type="number"
							defaultValue={0}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
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
					<Grid item xs={12}>
						<Button variant="outlined" startIcon={<AddIcon />}>
							Add to Item List
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" color="primary">
							Submit
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default TaxInvoiceForm;
