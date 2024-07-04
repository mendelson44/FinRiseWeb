import { Box, Avatar, Typography, Link as MuiLink } from "@mui/material";
import React from "react";
import DateCalendar from "./DateCalendar";
import { Link } from "react-router-dom";

const preventDefault = (event) => event.preventDefault();

function Overview() {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-start",
					marginTop: "15px",
				}}
			>
				<Avatar
					src="/path/to/avatar.jpg"
					alt="Avatar"
					sx={{ width: 100, height: 100, marginRight: "10px" }}
				/>
				<Box sx={{ width: "80%", maxWidth: 600 }}>
					<Typography variant="h5" marginTop={2} marginLeft={2}>
						Hello Inbar,
					</Typography>
					<Typography variant="h6" marginTop={2} marginLeft={2}>
						We are always here for you, wishing calmer days soon.
					</Typography>
				</Box>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					marginTop: "20px",
				}}
			>
				<div style={{ flex: 1 }}>
					<Box
						sx={{
							border: "1px solid #ddd",
							padding: 2,
							borderRadius: 2,
							marginTop: 4,
							width: "30%",
							display: "flex",
							flexWrap: "wrap",
							typography: "body1",
							"& > :not(style) ~ :not(style)": {
								ml: 2,
							},
						}}
						onClick={preventDefault}
					>
						<Link to="/taxinvoice">All Documents</Link>
						<Link to="/customerlist">My Customers</Link>
					</Box>
					<Box
						sx={{
							border: "4px solid #ddd",
							padding: 1,
							borderRadius: 2,
							marginTop: 5,
							width: "90%",
						}}
					></Box>
					<Box
						sx={{
							border: "4px solid #ddd",
							padding: 1,
							borderRadius: 2,
							marginTop: 5,
							width: "90%",
						}}
					></Box>
				</div>
				<div style={{ marginRight: "50px" }}>
					<DateCalendar />
				</div>
			</div>
		</>
	);
}

export default Overview;
