const taxInvoiceArray = [
	{
		customerName: "inbar",
		createDate: "22/4/2000",
		paymentDueDate: "22/4/2002",
		documentDescription: "Buy Boll",
		productArray: [
			{
				name: "boll",
				quantity: "5",
				unitPrice: "10",
				currency: "",
				vat: true,
			},
		],
		notes: "Beautiful ball",
	},
];

export const receiptArray = [
	{
		customerName: "inbar",
		createDate: "",
		paymentDueDate: "04/04/1996",
		documentDescription: "",
		productArray: [
			{
				name: "",
				quantity: "",
				unitPrice: "",
				currency: "",
				vat: true,
			},
		],
		notes: "",
	},
];

export default taxInvoiceArray;
