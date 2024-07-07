const customers = [
  {
    firstName: "Yosi",
    lastName: "Ben Shushan",
    address: "789 Oak St",
    phone: "555-9876",
    email: "yosi@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
  {
    firstName: "Inbar",
    lastName: "Zafar",
    address: "123 Main St",
    phone: "555-1234",
    email: "inbar@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
  {
    firstName: "Roy",
    lastName: "Rubin",
    address: "456 Elm St",
    phone: "555-5678",
    email: "roy@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
  {
    firstName: "Ben",
    lastName: "Mendelson",
    address: "101 Pine St",
    phone: "555-4321",
    email: "ben@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
  {
    firstName: "Noa",
    lastName: "Sharabi",
    address: "202 Cedar St",
    phone: "555-8765",
    email: "noa@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
];

export const cutomers1 = [
  {
    firstName: "Yosi",
    lastName: "Ben Shushan",
    address: "789 Oak St",
    phone: "555-9876",
    email: "yosi@example.com",
  },
  {
    firstName: "Noa",
    lastName: "Sharabi",
    address: "202 Cedar St",
    phone: "555-8765",
    email: "noa@example.com",
    documents: {
      taxInvoices: [
        {
          data: {
            isOpen: false,
            payDate: `26.7.24`,
            hasTax: false,
          },
        },
        {
          data: {
            isOpen: false,
            payDate: `12.6.24`,
            hasTax: true,
          },
        },
      ],
      quotes: [
        {
          data: {
            hasTax: true,
          },
        },
      ],
      receipts: [
        {
          data: {
            taxInvoiceId: "112233",
            paymentMethod: "credit card",
          },
        },
      ],
      deliveryNotes: [
        {
          data: {
            hasTax: true,
            nameOfDeliveryPerson: "Jeff",
            signature: "jeff",
          },
        },
      ],
      receiptTaxInvoices: [
        {
          data: {
            hasTax: true,
            paymentMethod: "credit card",
          },
        },
      ],
    },
  },
];

export const forms = {
  taxInvoices: [
    {
      data: {
        isOpen: false,
        payDate: `26.7.24`,
        hasTax: false,
      },
    },
    {
      data: {
        isOpen: false,
        payDate: `12.6.24`,
        hasTax: true,
      },
    },
  ],
  quotes: [
    {
      data: {
        hasTax: true,
      },
    },
  ],
  receipts: [
    {
      data: {
        taxInvoiceId: "112233",
        paymentMethod: "credit card",
      },
    },
  ],
  deliveryNotes: [
    {
      data: {
        hasTax: true,
        nameOfDeliveryPerson: "Jeff",
        signature: "jeff",
      },
    },
  ],
  receiptTaxInvoices: [
    {
      data: {
        hasTax: true,
        paymentMethod: "credit card",
      },
    },
  ],
};

export default customers;
