import React from 'react';
import { Box, TextField } from '@mui/material';

const SearchBar = ({ handleSearch, searchTerm }) => {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search by name, email, or role"
        fullWidth
        onChange={handleSearch}
        value={searchTerm}
      />
    </Box>
  );
};

export default SearchBar;
