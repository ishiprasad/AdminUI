import { Box, Button, Grid, Pagination } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Pagtation = ({
  totalPosts,
  handleAllDelete,
  handlePagination,
  currentPage,
}) => {
  const handleChange = (event, page) => {
    handlePagination(page);
  };

  return (
    <Box sx={{ flexGrow: 1, margin: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Button
            onClick={handleAllDelete}
            startIcon={<DeleteIcon />}
            sx={{
              color: 'white',
              background: 'red',
              ':hover': { background: 'blue' },
            }}
          >
            Delete
          </Button>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Pagination 
            count={totalPosts}
            page={currentPage}
            showFirstButton
            showLastButton
            onChange={handleChange}
            color="primary"
            sx={{
              '& .MuiPaginationItem-root:hover': {
                color: 'white',
                background: 'black',
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pagtation;
