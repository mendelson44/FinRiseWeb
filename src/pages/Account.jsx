import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import AccountDetails from "../components/AccountDetails";

function Account() {
	return (
		<>
			<LayoutComponent>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ flex: 1 }}>
						<h1
							style={{
								fontSize: "30px",
								color: "black",
								textAlign: "left",
								marginTop: "30px",
								fontWeight: "bold",
							}}
						>
							Account
							<hr />
						</h1>
					</div>
				</div>
				<AccountDetails />
			</LayoutComponent>
		</>
	);
}

export default Account;
