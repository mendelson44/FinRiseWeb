import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../styles/home.css";
import Header from "../components/Header";
import { PDFDownloadLink } from "@react-pdf/renderer";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PDFQuotationFile from "../components/PDFQuotationFile";
import PDFReceiptFile from "../components/PDFReceiptFile";
import PDFTaxInvoiceFile from "../components/PDFTaxInvoiceFile";
import PDFDeliveryNoteFile from "../components/PDFDeliveryNoteFile";
import taxInvoiceArray from "../../data/inbar.js";
function Home() {
	return (
		<>
			<Header />

			<img
				src="src/assets/OriginalOnTransparent.png"
				alt="FinRise Logo"
				className="logo"
			/>
			<div className="custom-text">
				<Typography variant="body1" gutterBottom>
					Empowers you to track income and expenses, create invoices and payment
					orders,
					<br />
					manage your cash flow, prepare financial reports, and much more.
					<br />
					This easy-to-use and powerful tool puts you in control of your
					finances and helps you achieve your business goals.
				</Typography>
			</div>
			{/* button for look pdf*/}
			<h1>Tax Invoice</h1>
			<PDFDownloadLink
				document={<PDFTaxInvoiceFile taxInvoice={taxInvoiceArray[0]} />}
				fileName="FORM"
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
			<h1>Receipt</h1>
			<PDFDownloadLink document={<PDFReceiptFile />} fileName="FORM">
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
			<h1>Quotation</h1>
			<PDFDownloadLink document={<PDFQuotationFile />} fileName="FORM">
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
			<h1>DeliveryNote</h1>
			<PDFDownloadLink document={<PDFDeliveryNoteFile />} fileName="FORM">
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
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: 50,
					}}
					id="services"
				>
					<Box
						height={200}
						width={300}
						my={4}
						mx={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
						marginTop={50}
						gap={4}
						p={2}
						sx={{
							border: "2px solid grey",
							textAlign: "center", // Align text in the center
						}}
					>
						<Typography
							variant="h5"
							sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
						>
							Track Income and Expenses
						</Typography>
						<Typography variant="body1">
							Monitor your financial performance with real-time tracking of
							income and expenses.
						</Typography>
					</Box>
					<Box
						height={200}
						width={300}
						my={4}
						mx={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
						marginTop={50}
						gap={4}
						p={2}
						sx={{
							border: "2px solid grey",
							textAlign: "center", // Align text in the center
						}}
					>
						<Typography
							variant="h5"
							sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
						>
							Create Invoices
						</Typography>
						<Typography variant="body1">
							Generate professional invoices quickly and easily, and keep your
							billing organized.
						</Typography>
					</Box>
					<Box
						height={200}
						width={300}
						my={4}
						mx={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
						marginTop={50}
						gap={4}
						p={2}
						sx={{
							border: "2px solid grey",
							textAlign: "center", // Align text in the center
						}}
					>
						<Typography
							variant="h5"
							sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
						>
							Financial Reports
						</Typography>
						<Typography variant="body1">
							Prepare detailed financial reports to understand your business
							better and make informed decisions.
						</Typography>
					</Box>
				</div>
				<Box
					id="contact"
					height={200}
					width={500}
					my={4}
					mx={2}
					display="flex"
					flexDirection="column"
					alignItems="center"
					gap={4}
					p={2}
					sx={{
						border: "2px solid grey",
						textAlign: "center", // Align text in the center
					}}
				>
					<Typography
						variant="h5"
						sx={{ color: "#0eba97", fontFamily: "Arial", fontWeight: "bold" }}
					>
						Contact Us
					</Typography>
					<Typography variant="body1" sx={{ lineHeight: 0 }}>
						Email: support@finrize.com
					</Typography>
					<Typography variant="body1" sx={{ lineHeight: 0 }}>
						Phone: +1 (234) 567-890
					</Typography>
					<Typography variant="body1" sx={{ lineHeight: 0 }}>
						Address: 123 Finance St, Business City, BC 12345
					</Typography>
				</Box>
			</div>
		</>
	);
}
export default Home;
