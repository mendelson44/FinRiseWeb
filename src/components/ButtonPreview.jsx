import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

const renderFormType = (form) => {
	// a function for the form type
	switch (form.type) {
		case constants.FORM_TYPE.TAX_INVOICE:
			return (
				<StyledTableCell align="right">No action available</StyledTableCell>
			);
		case constants.FORM_TYPE.QUOTE:
			return (
				<StyledTableCell align="right">No action available</StyledTableCell>
			);
		case constants.FORM_TYPE.RECEIPT:
			return (
				<StyledTableCell align="right">No action available</StyledTableCell>
			);

		case constants.FORM_TYPE.DELIVERY_NOTE:
			return (
				<StyledTableCell align="right">No action available</StyledTableCell>
			);
		case constants.FORM_TYPE.RECEIPT_TAX_INVOICE:
			return (
				<StyledTableCell align="right">No action available</StyledTableCell>
			);
		default:
			return (
				<StyledTableCell align="right">No action available</StyledTableCell>
			);
	}
};

export default function ButtonPreview(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Button variant="outlined" onClick={handleClickOpen}>
				Preview
			</Button>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers>
					{" "}
					<Typography
						sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
						gutterBottom
					>
						Tax invoice Details:
					</Typography>
					<Typography gutterBottom>
						{`customer Name: ${props.details.customerName}`} <br />
						{`Production Date: ${props.details.createDate}`}
						<br />
						{`Payment Due Date: ${props.details.paymentDueDate}`}
						<br />
						{`Document description: ${props.details.documentDescription}`}
					</Typography>
					<Typography
						sx={{
							color: "#0eba97",
							fontFamily: "Arial",
							fontWeight: "bold",
							marginTop: 5,
						}}
						gutterBottom
					>
						Products Details:
					</Typography>
					{props.details.productArray.map((product) => (
						<Typography gutterBottom>
							{`Product Name: ${product.name}`} <br />
							{`Quantity: ${product.quantity}`}
							<br />
							{`Unit Price: ${product.unitPrice}`}
							<br />
							{`Currency: ${product.currency}`}
							<br />
							{`Vat: ${product.vat}`}
						</Typography>
					))}
					<Typography
						sx={{
							color: "#0eba97",
							fontFamily: "Arial",
							fontWeight: "bold",
							marginTop: 5,
						}}
						gutterBottom
					>
						Notes:
					</Typography>
					<Typography gutterBottom>{props.details.notes}</Typography>
				</DialogContent>
			</BootstrapDialog>
		</React.Fragment>
	);
}