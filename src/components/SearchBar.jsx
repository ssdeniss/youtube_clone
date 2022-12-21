import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        background: "#252525",
        pl: 3,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit">
        <Search style={{ fill: "#e3e3e3" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
