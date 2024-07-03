import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import Overview from "../components/Overview";

function Lobi() {
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
							Dashboard
							<hr />
						</h1>
					</div>
				</div>
				<Overview />
			</LayoutComponent>
		</>
	);
}

export default Lobi;
