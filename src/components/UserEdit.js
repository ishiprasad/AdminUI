import {
    Button,
    Checkbox,
    TableCell,
    TableRow,
    TextField,
  } from '@mui/material';
  import React from 'react';
  import SaveIcon from '@mui/icons-material/Save';
  
  const UserEdit = ({
    handleFormChange,
    handleSubmitForm,
    form: { email, name, role },
  }) => {
    return (
      <TableRow>
        <TableCell>
          <Checkbox />
        </TableCell>
  
        <TableCell>
          <TextField
            onChange={handleFormChange}
            value={name}
            name="name"
            type="text"
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
        </TableCell>
  
        <TableCell>
          <TextField
            onChange={handleFormChange}
            value={email}
            name="email"
            type="email"
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
        </TableCell>
  
        <TableCell>
          <TextField
            onChange={handleFormChange}
            value={role}
            type="text"
            name="role"
            id="outlined-basic"
            label="role"
            variant="outlined"
          />
        </TableCell>
  
        <TableCell>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmitForm}
            sx={{
              color: 'white',
              backgroundColor: 'green',
              ':hover': { color: 'white', backgroundColor: 'black' },
            }}
          >
            Save <SaveIcon />
          </Button>
        </TableCell>
      </TableRow>
    );
  };
  
  export default UserEdit;
  