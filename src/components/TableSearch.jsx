import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const TableSearch = ({ rows, setFilteredRows }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    setFilterText(searchText);

    const filteredData = rows.filter(
      (row) =>
        row.firstName.toLowerCase().includes(searchText) ||
        row.lastName.toLowerCase().includes(searchText)
    );

    setFilteredRows(filteredData);
  };

  const clearFilter = () => {
    setFilterText("");
    setFilteredRows(rows);
  };

  return (
    <Box display="flex" sx={{ marginTop: "1rem" }}>
      <TextField
        label="Filter by Name"
        variant="outlined"
        size="small"
        value={filterText}
        onChange={handleFilterChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" size="small" onClick={clearFilter}>
                Clear
              </Button>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default TableSearch;
