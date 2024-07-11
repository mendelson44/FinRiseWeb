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
					<Typography gutterBottom>Tax Details:</Typography>
					<Typography gutterBottom>
						{`customerName: ${props.details.customerName}`}
					</Typography>
					<Typography gutterBottom>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
						auctor.
					</Typography>
					<Typography gutterBottom>
						Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
						cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
						dui. Donec ullamcorper nulla non metus auctor fringilla.
					</Typography>
				</DialogContent>
			</BootstrapDialog>
		</React.Fragment>
	);
}
