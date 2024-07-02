import * as XLSX from "xlsx";

const exportCustomerListToExcel = (customerList) => {
  let wb = XLSX.utils.book_new();
  let ws = XLSX.utils.json_to_sheet(customerList);
  XLSX.utils.book_append_sheet(wb, ws, "CustomerList");
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  console.log(`${currDate} at ${currTime}`);
  XLSX.writeFile(wb, `CustomerList ${currDate} at ${currTime}.xlsx`);
};

export default exportCustomerListToExcel;
