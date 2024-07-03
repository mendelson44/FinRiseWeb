import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import ReceiptTaxInvoiceForm from "../components/ReceiptTaxInvoiceForm";
function ReceiptTaxInvoice() {
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
							Receipt Tax Invoice Document
							<hr />
						</h1>
					</div>
				</div>
				<ReceiptTaxInvoiceForm />
			</LayoutComponent>
		</>
	);
}

export default ReceiptTaxInvoice;
