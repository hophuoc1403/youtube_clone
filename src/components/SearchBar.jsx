import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Paper
      component={"form"}
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        style={{ border: "none", outline: "none" }}
        type="text"
        value={searchTerm}
        className="search-bar"
        placeholder="search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton
        onClick={() => {
          setSearchTerm("");
        }}
        type="submit"
        sx={{ p: "10", color: "red" }}
      >
        <Link to={`/search/${searchTerm}`}>
          <Search />
        </Link>
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
