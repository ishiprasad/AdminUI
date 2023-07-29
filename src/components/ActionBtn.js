import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, Stack } from '@mui/material';

const ActionBtn = ({ id, handleEdit, handleDelete }) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <EditIcon
        id={id}
        onClick={handleEdit}
        sx={{ color: 'green', ':hover': { color: 'black' } }}
      />
      <DeleteIcon
        id={id}
        onClick={handleDelete}
        sx={{ color: 'red', ':hover': { color: 'black' } }}
      />
    </Stack>
  );
};

export default ActionBtn;
