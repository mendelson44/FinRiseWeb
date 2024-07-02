import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import TaxInvoiceForm from "../components/TaxInvoiceForm";

function Quotation() {
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
							Quotation Document
							<hr />
						</h1>
					</div>
				</div>
				<TaxInvoiceForm />
			</LayoutComponent>
		</>
	);
}

export default Quotation;
